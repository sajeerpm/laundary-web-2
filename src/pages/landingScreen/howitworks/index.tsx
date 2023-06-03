import SHText from "@/shared/SHText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const HowItWorks = ({ setSelectedPage }: Props) => {
    return (
        <section id="howitworks" className="mx-auto w-5/6 py-16">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.HowItWorks)}
            >
                <div>
                    <SHText textAlign="text-center">
                        <p className="text-4">How It Works</p>
                    </SHText>
                    <hr className="m-auto mt-[12px] h-[2px] w-[20%] bg-gray-400" />
                </div>
                <div className="flex justify-between py-[139px]">
                    <div className="flex flex-col items-center">
                        <svg
                            className="how-step-image h-[119px] w-[79px]"
                            viewBox="0 0 67.74 118.92"
                            role="img"
                            aria-label="[title + description]"
                        >
                            <title>Mobile app icon</title>
                            <desc>On demand dry cleaning</desc>
                            <rect
                                fill="none"
                                height="116.92"
                                rx="3.67"
                                stroke="#000"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                width="65.74"
                                x="1"
                                y="1"
                            ></rect>
                            <circle
                                cx="33.87"
                                cy="107.7"
                                fill="#c32a2e"
                                r="3.6"
                            ></circle>
                            <g
                                fill="none"
                                stroke="#000"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            >
                                <path d="m27.5 11.21h12.73"></path>
                                <path d="m1 21.42h65.74"></path>
                                <path d="m66.74 97.49h-65.74"></path>
                                <path d="m43.06 45.54-18.35 23.66"></path>
                                <path d="m27.94 50.72h13.28l2.91 13.28h-20.8c0-3.13 2.48-6.82 8.52-6.82h10.5"></path>
                                <circle
                                    cx="33.87"
                                    cy="57.38"
                                    r="23.08"
                                ></circle>
                            </g>
                        </svg>
                        <div className="my-6 w-3/6 text-center">
                            <p className="text-[18px]">1.</p>
                            <p className="text-[18px]">
                                Choose <strong>when</strong> and{" "}
                                <strong>where</strong> you wish us to collect &
                                deliver your laundry
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg
                            className="how-step-image h-[119px]  w-[157px]"
                            viewBox="0 0 180.2 89.79"
                            role="img"
                            aria-label="[title + description]"
                        >
                            <title>Van icon</title>
                            <desc>
                                Dry cleaning and laundry pickup and delivery
                            </desc>
                            <g
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            >
                                <g stroke="#000">
                                    <path d="m168.5 40.2c-4.05-1.2-20.5-5.54-24.59-6.68-7.37-2.06-7.94-2-10.58-4.88-7.16-7.82-9.61-10.58-18.72-19.7-4.15-4.15-13-7.94-23-7.94h-78.21c-2.94 0-4.49 2.22-5.32 5.34l-6.89 32.15a8.49 8.49 0 0 0 -.19 1.74v25.16a8.79 8.79 0 0 0 8.79 8.79h.21v-1.89c0-10.17 8.83-18.42 19.72-18.42s19.73 8.25 19.73 18.42v1.89h77.14v-1.89c0-10.17 8.83-18.42 19.72-18.42s19.72 8.25 19.72 18.42v1.89h3.58c7 0 9.53-3.7 9.53-9.4v-12.86c.06-7-2.67-9.44-10.64-11.72z"></path>
                                    <path d="m91.66 8.75h-5v17.81.22a8.92 8.92 0 0 0 8.61 7.22l29.8.07a1.21 1.21 0 0 0 .86-2.06c-.2-.21-.37-.38-.44-.47-5.55-6.05-8.33-9.1-16.37-17.13-2.74-2.74-9.8-5.66-17.46-5.66z"></path>
                                    <ellipse
                                        cx="29.75"
                                        cy="74.26"
                                        rx="14.24"
                                        ry="14.53"
                                    ></ellipse>
                                    <ellipse
                                        cx="29.75"
                                        cy="74.26"
                                        rx="5.27"
                                        ry="5.37"
                                    ></ellipse>
                                    <ellipse
                                        cx="146.37"
                                        cy="74.26"
                                        rx="14.24"
                                        ry="14.53"
                                    ></ellipse>
                                    <ellipse
                                        cx="146.37"
                                        cy="74.26"
                                        rx="5.27"
                                        ry="5.37"
                                    ></ellipse>
                                    <path d="m1 57.77h16.57"></path>
                                    <path d="m158.47 57.77h20.73"></path>
                                    <path d="m178.8 48h-8.53a4.74 4.74 0 0 0 -4.48 3.19l-2.26 6.57"></path>
                                </g>
                                <path
                                    d="m5.16 40.37v13.67"
                                    stroke="#c32a2e"
                                ></path>
                                <path
                                    d="m84.94 44.31h10.42"
                                    stroke="#000"
                                ></path>
                            </g>
                        </svg>
                        <div className="my-6 w-3/6 text-center">
                            <p className="text-[18px]">2.</p>
                            <p className="text-[18px]">
                                We <strong>collect</strong> your bag,{" "}
                                <strong>invoice</strong> and{" "}
                                <strong>clean</strong> your items according to
                                <strong> your requirements</strong>.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg
                            className="how-step-image h-[119px] w-[79px]"
                            viewBox="0 0 92.68 118.91"
                            role="img"
                            aria-label="[title + description]"
                        >
                            <title>Shirt icon</title>
                            <desc>
                                Professional dry cleaners for shirts, dresses,
                                suits
                            </desc>
                            <path
                                d="m26.14 48.59a2.25 2.25 0 0 0 -1.94 1.17 2.25 2.25 0 0 0 -1.94-1.17 2.37 2.37 0 0 0 -2.26 2.41 2.61 2.61 0 0 0 .45 1.47 18.14 18.14 0 0 0 2.07 2.14l1.69 1.59 2-1.88a16 16 0 0 0 1.79-1.81 2.53 2.53 0 0 0 .41-1.51 2.36 2.36 0 0 0 -2.27-2.41z"
                                fill="#c32a2e"
                            ></path>
                            <circle
                                cx="54.49"
                                cy="40.54"
                                fill="#000"
                                r="1.93"
                            ></circle>
                            <circle
                                cx="54.49"
                                cy="71.69"
                                fill="#000"
                                r="1.93"
                            ></circle>
                            <circle
                                cx="54.49"
                                cy="102.83"
                                fill="#000"
                                r="1.93"
                            ></circle>
                            <g
                                fill="none"
                                stroke="#000"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            >
                                <path d="m21.3 17.17h-16.63a3.68 3.68 0 0 0 -3.67 3.66v93.41a3.68 3.68 0 0 0 3.67 3.67h83.33a3.68 3.68 0 0 0 3.67-3.67v-93.41a3.68 3.68 0 0 0 -3.67-3.66h-14.61"></path>
                                <path d="m47.4 15.11v102.8"></path>
                                <path d="m29.45 1-8 16.06 12.81 17.27 13.13-19.22s-18.17-5.37-17.94-14.11z"></path>
                                <path d="m65.34 1 8 16.06-12.81 17.27-13.13-19.22s18.17-5.37 17.94-14.11z"></path>
                                <path d="m29.45 1h35.89"></path>
                            </g>
                        </svg>
                        <div className="my-6 w-3/6 text-center">
                            <p className="text-[18px]">3.</p>
                            <p className="text-[18px]">
                                We <strong>deliver</strong> your items cleaned
                                within
                                <strong> 24 hours</strong> and at the time
                                required.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex w-full justify-center">
                    <AnchorLink
                        className="rounded-none border border-gray-700 bg-white px-10 py-2 text-center"
                        onClick={() => setSelectedPage(SelectedPage.Home)}
                        href={`#${SelectedPage.Home}`}
                    >
                        ORDER NOW
                    </AnchorLink>
                </div>
            </motion.div>
        </section>
    );
};

export default HowItWorks;
