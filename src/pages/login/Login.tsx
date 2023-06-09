import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { Link } from "react-router-dom";
import { useRef, FormEvent } from "react";
import { useStateContext } from "@/context/ContextProvider";
import axiosClient from "@/axiosClient";

const Home = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const { setUser, setToken } = useStateContext();

    const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

        const payload = {
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
        };

        // console.log(payload);

        axiosClient
            .post("/login", payload)
            .then(({ data }) => {
                console.log(data);
                setUser(data.user);
                setToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                }
            });

        console.log(payload);
    };

    return (
        <section
            id="home"
            className="flex flex-1 gap-16 bg-[#fffaf0] py-10 md:pb-0"
        >
            <motion.div className="mx-auto w-5/6 items-center justify-center py-20 md:flex md:w-4/5">
                <div className="z-10 md:basis-5/12">
                    <HText textAlign="text-center">LOG IN</HText>
                    <form onSubmit={onSubmit}>
                        <div className="mt-16">
                            {/* <p>Email Address:</p>
                            <TextBoxNormal
                                type="text"
                                placeholder="Email Address"
                            />
                            <p className="mt-3">Password:</p>
                            <TextBoxNormal
                                type="password"
                                placeholder="Password"
                            /> */}
                            <p>Email Address:</p>
                            <div className="textbox-container h-[39px] w-full rounded-none bg-white">
                                <input
                                    type="text"
                                    ref={emailRef}
                                    placeholder=""
                                    className="textbox-input w-full border focus:outline-none"
                                />
                            </div>
                            <p className="mt-3">Password:</p>
                            <div className="textbox-container h-[39px] w-full rounded-none bg-white">
                                <input
                                    type="password"
                                    ref={passwordRef}
                                    placeholder=""
                                    className="textbox-input w-full border focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="mt-3 flex items-center gap-8">
                            <button
                                type="submit"
                                className="rounded-none border bg-white px-10 py-2 text-center hover:bg-secondary-400"
                            >
                                LOG IN
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 w-full text-center">
                        <p>
                            Forgot your password?{" "}
                            <Link className="underline" to="/login">
                                Reset it here
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Home;
