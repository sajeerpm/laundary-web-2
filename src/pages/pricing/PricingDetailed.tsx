import { useEffect, useState } from "react";
import SHText from "@/shared/SHText";
import HText from "@/shared/HText";
import { useParams } from "react-router-dom";
import axiosClient from "@/axiosClient";
import Loading from "@/shared/Loading";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Helmet } from "react-helmet";
import Clients from "../landingScreen/clients";
import { Service } from "@/model/Services";
import { Area } from "@/model/Area";
import Home from "../landingScreen/home";
import GoogleReviews from "../landingScreen/reviews";
import HowItWorks from "../landingScreen/howitworks";
import AboutCompany from "../landingScreen/aboutCompany";
import Services from "../landingScreen/services";
// import PopUp from "@/shared/OfferPopUp";
import Pricing from "../landingScreen/pricing";

const PricingDetailed = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1600px)");
  const { id } = useParams<{ id: string }>();
  const [categories, setData] = useState<Service>();
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [area, setArea] = useState<Area>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/service/" + id);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        try {
          const response = await axiosClient.get("/getarea/" + id);
          setArea(response.data);
          setLoading(false);
        } catch (error) {
          window.location.href = "/not-found";
          return;
        }
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (categories && !loading) return;
    const intervalId = setInterval(() => {
      setCurrentStep((currentStep + 1) % 4);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentStep]);

  return (
    <section
      id="home"
      className="flex min-h-[100vh] flex-col bg-[#edecef] md:pb-0"
    >
      {categories && (
        <>
          <Helmet>
            <title>
              {categories?.page_title
                ? categories?.page_title
                : area?.page_title}
            </title>
            <meta
              name="description"
              content={`${
                categories?.page_meta ? categories?.page_meta : area?.page_meta
              }`}
            />
            <meta
              property="og:title"
              content={`${
                categories?.page_title
                  ? categories?.page_title
                  : area?.page_title
              }`}
            ></meta>
            <meta
              property="og:description"
              content={`${
                categories?.page_meta ? categories?.page_meta : area?.page_meta
              }`}
            ></meta>
          </Helmet>
          <div className="mt-24 md:mt-32">
            <div className="mx-auto w-5/6 items-center justify-center md:flex">
              <div className="flex w-full flex-col">
                <div className="mb-6 flex w-full flex-col overflow-hidden rounded-none">
                  <HText textAlign="text-center text-black">
                    <p className="w-full uppercase">
                      {categories?.name
                        ? categories?.name
                        : id?.replace(/-/g, " ")}
                    </p>
                  </HText>
                  {categories && (
                    <SHText textAlign="text-center text-yellow-500">
                      <p className="w-full text-[14px]">
                        COLLECTED AND DELIVERED TO YOUR DOOR
                      </p>
                    </SHText>
                  )}
                </div>
                {categories?.bannerimage && (
                  <img
                    className="w-full rounded-[1rem]"
                    src={
                      isAboveMediumScreens
                        ? categories?.bannerimage
                        : categories?.bannermobileimage
                    }
                  />
                )}
              </div>
            </div>
            <div className="mx-auto flex w-5/6 flex-col items-center">
              <div className="w-full py-4">
                {categories && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: categories?.details ?? "",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </>
      )}
      {loading && <Loading />}
      {area && (
        <div className="bg-white">
          <Helmet>
            <title>
              Dry cleaning and laundry services in London | Free pick & drop
              near me
            </title>
            <meta
              name="description"
              content="Master clean are award winning eco friendly drycleaners in london with 25+ years experience. we offer free collection & delivery services for your drycleaning & laundry."
            />
            <meta
              property="og:description"
              content="Master clean are award winning eco friendly drycleaners in london with 25+ years experience. we offer free collection & delivery services for your drycleaning & laundry."
            ></meta>
          </Helmet>
          <Home areaname={area?.name ? "IN " + area.name : ""} />
          <GoogleReviews placeId={"ChIJmdOA3csadkgRwIf2zQ_JGYo"} />
          <HowItWorks />
          <Clients />
          <Pricing />
          <AboutCompany
            aboutArea={area?.about_area ? area.about_area : ""}
            areaName={area?.name ? area.name : ""}
          />
          <Services />
          {/* <PopUp /> */}
        </div>
      )}
    </section>
  );
};

export default PricingDetailed;
