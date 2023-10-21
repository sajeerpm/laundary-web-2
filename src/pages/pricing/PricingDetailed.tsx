import { useEffect, useState } from "react";
import SHText from "@/shared/SHText";
import HText from "@/shared/HText";
import { useParams } from "react-router-dom";
// import PricingDetailsBackgroundImage from "@/assets/images/20230719_171140_0000.png";
import axiosClient from "@/axiosClient";
import Loading from "@/shared/Loading";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Helmet } from "react-helmet";
import Clients from "../landingScreen/clients";
import AreaBackgroundImage from "@/assets/location-image.jpg";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

import BagUp from "@/assets/howtowork/bagup.png";
import PickUp from "@/assets/howtowork/pickup.png";
import Clean from "@/assets/howtowork/clean.png";
import Deliver from "@/assets/howtowork/deliver.png";

interface Service {
  id: number;
  name: string;
  image: string;
  bannerimage: string;
  bannermobileimage: string;
  description: string;
  details: string;
  page_meta: string;
  page_title: string;
}

const PricingDetailed = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1600px)");
  const { id } = useParams();
  const [categories, setData] = useState<Service>();
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const initialAreas = {
    heading:
      "Laundry, Dry Cleaning, Invisible Mending, Shoe Repairs, Trainer Cleaning, Hand Bag Repairs, Designer Jacket, Dress Alterations.",
    content_1: {
      sub_title: "Your Local Master Dry Cleaner - Established in 1997",
      title: "We are Passionate About Laundry",
      content:
        "We are professionals in laundry and dry cleaning business, which means we always stay up to date with the latest technologies, cleaning methods, and solutions for dealing with stains or delicate fabrics. Plus, we maintain the highest standards of business integrity by following local and national regulations and environmental safety rules. We are passionate about changing the way you think about laundry!",
      feature_list: [
        "100% Customer Satisfaction",
        "Free Collection & Delivery",
        "Affordable Prices",
        "Best Quality",
      ],
    },
    how_to_work: {
      sub_title: "Get Your Clothes Collected & Delivered",
      title: "How We Work",
      content:
        "Our Service is dedicated to making your life easier by providing our FREE laundry collection & delivery service. Give yourself one less thing to worry about and try our amazing service, you will never look back.<br/><br/>We have been in the laundry business for over 25 years and would love to earn your business. Try us today and put our service to the test.",
    },
    why_us: {
      sub_title: "Our Advantages",
      title: "Why Choose Us",
      pros: [
        {
          title: "Persionalised Experience",
          image: "",
          content:
            "We take the utmost care of your clothes, seperating based on the cloth type and treating indivdual items with care.",
        },
        {
          title: "Competetive Pricing",
          image: "",
          content:
            "We ensure that our pricing is competetive without compromising the amazing quality of our cleaning services.",
        },
        {
          title: "Order Online",
          image: "",
          content:
            "You can organise free collection & delivery  from your doorstep. All from the convenience of your smartphone, tablet or laptop.",
        },
        {
          title: "Quality",
          image: "",
          content:
            "We use best in class products, to assure that your favorite clothes are impeccably cleaned.",
        },
        {
          title: "Free Collection & Delivery",
          image: "",
          content:
            "With as little as 3 hours notice, we can come to your doorstep to collect your laundry.",
        },
        {
          title: "Instant Order Update",
          image: "",
          content:
            "Regular updates of your order, to help you keep a track of your laundry and plan accordingly.",
        },
      ],
    },

    benefits_list: [
      {
        title: "Save Time & Money",
        image: "",
        content:
          "No more wasted time driving to the laundry, we pickup and deliver for free!",
      },
      {
        title: " Pay Online in Seconds",
        image: "",
        content:
          "Manage your Laundry account and billing online from your smartphone or computer.",
      },
      {
        title: " Eco-Friendly",
        image: "",
        content:
          "We always use safe, clean, eco friendly products, so you, and the Earth, can look good. ",
      },
    ],
    footer_1:
      "Master Dry Cleaner provides full laundry service in Bloomsbury. We offer Free collection and delivery, commercial laundry service, hand over laundry service and also in-store washing. Master Dry Cleaner offers laundry picks up, and delivery service spans across London City covering North West, South West, as well as West. At Master Dry Cleaner, we pride ourselves on providing an excellent solution at a competetive rate. We do the necessary job of obtaining your laundry and dry cleaning. We complete our service as fast and headache-free as possible. You’ve found us now, so more searching for “laundry near me“.",
    footer_2:
      "At Master Dry Cleaner, we take enormous pride in our work, whether we are collaborating with large corporate customers or with our individual laundry customers. Master Dry Cleaner is a unique laundry in Bloomsbury that can fit all your requirements with an unbelievable high quality of service where there is current and updated modern technology used in our processes. Being located in the heart of London, it is easy to reach all areas on a daily basis as well as at any moment. Take a look through our website and find out more regarding the selection of laundry services we offer. We look forward to serving you.",
  };

  const nextStep = () => {
    setCurrentStep((currentStep + 1) % 4);
    console.log("Step " + currentStep);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/service/" + id);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        // window.location.href = "/";
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentStep((currentStep + 1) % 4);
      console.log("step: " + currentStep);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentStep]);

  return (
    <section id="home" className="flex flex-col bg-[#edecef] md:pb-0">
      <Helmet>
        <title>{categories?.page_title ?? ""}</title>
        <meta name="description" content={`${categories?.page_meta ?? ""}`} />
      </Helmet>
      <div className="mt-24 md:mt-32">
        <div className="mx-auto w-5/6 items-center justify-center md:flex">
          <div className="flex w-full flex-col">
            <div className="mb-6 flex w-full flex-col overflow-hidden rounded-none">
              <HText textAlign="text-center text-black">
                <p className="w-full uppercase">
                  {categories?.name ? categories?.name : id?.replace("-", " ")}
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
            {categories ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: categories?.details ?? "",
                }}
              />
            ) : (
              <div className="flex flex-col justify-items-start">
                <div>
                  <h1 className="w-full pb-8 text-center text-[29px] font-bold text-[#000]">
                    {id &&
                      id[0].toUpperCase() +
                        id?.slice(1).replace("-", " ") +
                        " " +
                        initialAreas.heading}
                  </h1>
                </div>
                <div>
                  <div className="flex w-full flex-col gap-2 md:flex-row">
                    <img className="md:w-1/2" src={AreaBackgroundImage} />
                    <div className="my-8 flex flex-col md:m-0 md:w-1/2 md:px-8">
                      <h6 className="font-bold text-blue-500">
                        {initialAreas.content_1.sub_title}
                      </h6>
                      <h4 className="mt-[13px] py-4 text-[28px] font-bold leading-10 text-[#000] md:text-[36px]">
                        {initialAreas.content_1.title}
                      </h4>
                      <p className="text-[16px] leading-7">
                        {initialAreas.content_1.content}
                      </p>
                      <ul className="flex flex-col pt-6">
                        {initialAreas.content_1.feature_list.map((item) => (
                          <li className="flex py-2">
                            <CheckBadgeIcon className="mx-2 w-6 text-green-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full md:my-8">
                  <div className="grid grid-flow-row md:grid-cols-3 md:gap-4">
                    {initialAreas.benefits_list.map((item) => (
                      <div className="flex w-full gap-2 py-2 md:py-8">
                        {/* <div className="h-[52px] w-[52px]">
                          <img src={item.image} />
                        </div> */}
                        <div className="flex flex-col p-4 shadow-xl shadow-gray-400">
                          <div className="text-center text-[20px] font-[600] text-[#000]">
                            {item.title}
                          </div>
                          <div className="text-center text-[16px]">
                            {item.content}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col pb-8 md:flex-row">
                  <div className="flex flex-col md:w-1/2">
                    <h6 className="font-bold text-blue-500">
                      {initialAreas.how_to_work.sub_title}
                    </h6>
                    <h4 className="text-[36px] font-bold text-[#000]">
                      {initialAreas.how_to_work.title}
                    </h4>
                    <p className="text-[16px]">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: initialAreas.how_to_work.content ?? "",
                        }}
                      />
                    </p>
                  </div>
                  <div className="flex flex-col p-8 md:w-1/2">
                    <div className="flex flex-col md:flex-row">
                      {currentStep == 0 && (
                        <div className="flex flex-col items-center justify-center md:flex-row">
                          <img src={BagUp} />
                          <div>
                            <h4 className="text-[30px]">
                              Bag Up All Your Dirty Clothes
                            </h4>
                            <p>
                              We pickup your laundry and ensure that it is
                              expertly itemised cleaned & delivered back to you
                            </p>
                          </div>
                        </div>
                      )}
                      {currentStep == 1 && (
                        <div className="flex flex-col items-center justify-center md:flex-row">
                          <img src={PickUp} />
                          <div>
                            <h4 className="text-[30px]">
                              We Pick Up Your Clothes
                            </h4>
                            <p>
                              On the day of your pickup, have your bags ready
                              for our freindly drivers to pick up.
                            </p>
                          </div>
                        </div>
                      )}
                      {currentStep == 2 && (
                        <div className="flex flex-col items-center justify-center md:flex-row">
                          <img src={Clean} />
                          <div>
                            <h4 className="text-[30px]">
                              We Clean Your Clothes
                            </h4>
                            <p>
                              Our facilities are so good we are confident you'll
                              be satisfied - we ensure that all of our clients
                              are satisfied.
                            </p>
                          </div>
                        </div>
                      )}
                      {currentStep == 3 && (
                        <div className="flex flex-col items-center justify-center md:flex-row">
                          <img src={Deliver} />
                          <div>
                            <h4 className="text-[30px]">
                              We Deliver Clean, Folded Clothes
                            </h4>
                            <p>
                              We’ll deliver your pristine garments back to you,
                              anytime and anywhere
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <Clients />

                <div className="my-8 w-full">
                  <h6 className="w-full text-center font-bold text-blue-500">
                    {initialAreas.why_us.sub_title}
                  </h6>
                  <h4 className="mt-[13px] w-full text-center text-[36px] font-bold leading-10 text-[#000]">
                    {initialAreas.why_us.title}
                  </h4>
                  <div className="my-4 grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-3">
                    {initialAreas.why_us.pros.map((item) => (
                      <div className="flex gap-2">
                        {/* <div className="h-[52px] w-[52px]">
                          <img src={item.image} />
                        </div> */}
                        <div className="flex flex-col rounded-md border border-gray-400 p-4">
                          <div className="text-center text-[20px] font-[600] text-[#000]">
                            {item.title}
                          </div>
                          <div className="text-center text-[16px]">
                            {item.content}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  <div className="">{initialAreas.footer_1}</div>
                  <div className="">{initialAreas.footer_2}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {loading && <Loading />}
    </section>
  );
};

export default PricingDetailed;
