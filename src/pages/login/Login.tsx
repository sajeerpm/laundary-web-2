import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { Link, useNavigate } from "react-router-dom";
import { useRef, FormEvent, useEffect, useState } from "react";
import { useStateContext } from "@/context/ContextProvider";
import axiosClient from "@/axiosClient";

const Home = () => {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);

  const { setUser, setToken } = useStateContext();

  useEffect(() => {
    if (localStorage.getItem("ACCESS_TOKEN")) {
      navigate("/");
    }
  }, []);

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const payload = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    var endpoint = "";
    if (payload.email && !isEmailValid) {
      endpoint = "/account/validations/email";
    } else if (isEmailValid && payload.email && payload.password) {
      endpoint = "/login";
    } else if (!payload.email) {
      setError("Please enter valid email id");
    } else if (!payload.password) {
      setError("Please enter password");
    }

    axiosClient
      .post(endpoint, payload)
      .then(({ data }) => {
        if (data.req_code == "ACC_LOGIN") {
          setUser(data.user);
          setToken(data.token);
          localStorage.setItem("ACCESS_TOKEN", data.token);
          localStorage.setItem("USER_DATA", JSON.stringify(data.user));
          window.location.reload();
        } else if (data.req_code == "VALIDATE_EMAIL") {
          setIsEmailValid(true);
        }
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status !== 200) {
          setError(response.data.message);
        }
      });
  };

  // const handleResetPassword = () => {
  //   const payload = {
  //     email: emailRef.current?.value,
  //   };
  //   axiosClient
  //     .post("/account/reset/password", payload)
  //     .then(({ data }) => {
  //       if (data.req_code == "ACC_RESET_PASS") {
  //       }
  //     })
  //     .catch((err) => {
  //       const response = err.response;
  //       if (response && response.status !== 200) {
  //         setError(response.data.message);
  //       }
  //     });
  // };

  return (
    <section
      id="home"
      className="flex h-[100vh] flex-1 gap-16 bg-[#000] py-10 md:pb-0"
    >
      <motion.div className="mx-auto w-5/6 justify-center pt-32 md:flex md:w-4/5">
        <div className="z-10 text-white md:basis-5/12">
          <HText textAlign="text-center">LOG IN</HText>
          <form onSubmit={onSubmit}>
            <div className="">
              <div className="py-4 text-center text-red-500" id="error">
                {error}
              </div>
              <p>Email Address:</p>
              <div className="textbox-container h-[39px] w-full rounded-none bg-white">
                <input
                  type="text"
                  ref={emailRef}
                  placeholder=""
                  className="textbox-input w-full border text-black focus:outline-none"
                />
              </div>
              {isEmailValid && (
                <>
                  <p className="mt-3">Password:</p>
                  <div className="textbox-container h-[39px] w-full rounded-none bg-white">
                    <input
                      type="password"
                      ref={passwordRef}
                      placeholder=""
                      className="textbox-input w-full border focus:outline-none"
                    />
                  </div>
                </>
              )}
            </div>

            <div className="mt-3 flex items-center gap-8">
              <button
                type="submit"
                className="rounded-none border bg-black px-10 py-2 text-center hover:bg-secondary-400"
              >
                {isEmailValid ? "LOG IN" : "Next"}
              </button>
            </div>
          </form>

          {isEmailValid && (
            <div className="mt-6 w-full text-center">
              <p>
                Forgot your password?{" "}
                <span className="underline">Reset it here</span>
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
