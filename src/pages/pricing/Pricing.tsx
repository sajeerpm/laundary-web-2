import { useState } from "react";
import PricingImage from "@/assets/images/dry-cleaning.jpg";
import HowItWorks from "../landingScreen/howitworks";

const Pricing = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [activeTabName, setActiveTabName] = useState("Clothes (per item)");

    const handleTabClick = (tabNumber: number, tabName: string) => {
        setActiveTab(tabNumber);
        setActiveTabName(tabName);
    };

    return (
        <section id="home" className="flex flex-col bg-[#edecef] md:pb-8">
            <div className="items-center justify-center md:flex">
                <div
                    className="h-[70vh] w-full"
                    style={{
                        backgroundImage:
                            "url(/src/assets/images/dry-cleaning.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* <img className="w-full" src={PricingImage} /> */}
                </div>
            </div>
            <div className="mx-auto w-5/6 py-8">
                <div className="grid w-full grid-cols-1 gap-4 pb-16 sm:grid-cols-2 md:grid-cols-4">
                    <button
                        className={`rounded-none border border-black py-4 px-4 text-xs uppercase ${
                            activeTab === 1
                                ? "text bg-black text-white"
                                : "bg-white text-black"
                        }`}
                        onClick={() => handleTabClick(1, "Clothes (per item)")}
                    >
                        Clothes (per item)
                    </button>
                    <button
                        className={`rounded-none border border-black py-4 px-4 text-xs uppercase ${
                            activeTab === 2
                                ? "text bg-black text-white"
                                : "bg-white text-black"
                        }`}
                        onClick={() =>
                            handleTabClick(2, "Mixed wash (Per load)")
                        }
                    >
                        Mixed wash (Per load)
                    </button>
                    <button
                        className={`rounded-none border border-black py-4 px-4 text-xs uppercase ${
                            activeTab === 3
                                ? "text bg-black text-white"
                                : "bg-white text-black"
                        }`}
                        onClick={() => handleTabClick(3, "Household & Bedding")}
                    >
                        Household & Bedding
                    </button>
                    <button
                        className={`rounded-none border border-black py-4 px-4 text-xs uppercase ${
                            activeTab === 4
                                ? "text bg-black text-white"
                                : "bg-white text-black"
                        }`}
                        onClick={() =>
                            handleTabClick(4, "Repairs & Alterations")
                        }
                    >
                        Repairs & Alterations
                    </button>
                </div>

                <div className="w-full">
                    <p className="w-full text-center uppercase">
                        {activeTabName}
                    </p>
                    {activeTab === 1 && (
                        <div className="mx-auto max-w-[650px] py-8 text-center text-xl">
                            <p>
                                Your clothes are individually inspected, cleaned
                                (stains treated and then dry cleaned or
                                laundered as appropriate) and ironed. Each item
                                is quality checked and then packed by our master
                                cleaners and can be returned to you within 24
                                hours.
                            </p>
                        </div>
                    )}
                    {activeTab === 2 && (
                        <div className="mx-auto max-w-[650px] py-8 text-center text-xl">
                            <p>
                                Enjoy machine washed, tumble dried, and neatly
                                folded garments when opting for our time saving
                                service wash. All clothes will be washed at 30°C
                                and your order will be charged based on total
                                weight.
                            </p>
                        </div>
                    )}
                    {activeTab === 3 && (
                        <div className="mx-auto max-w-[650px] py-8 text-center text-xl">
                            <p>
                                Relax in a clean home with our specialized
                                household items cleaning service. We clean a
                                range of items including curtains, cushion
                                covers, rugs, and more. Our hotel-quality
                                bedding service can also take care of your bed
                                sets, duvets, pillows, and blankets with a 48
                                hour turnaround.
                            </p>
                        </div>
                    )}
                    {activeTab === 4 && (
                        <div className="mx-auto max-w-[650px] py-8 text-center text-xl">
                            <p>
                                Repairs and adjustments are undertaken by our
                                expert tailors and cobblers. We offer a range of
                                services from suit repairs and zip replacements
                                to dress re-hemming, trouser lengthening, and
                                most shoe repairs. Usually these can all be
                                completed in 48 hours.
                            </p>
                        </div>
                    )}
                </div>

                <div className="mx-auto w-4/6">
                    {activeTab === 1 && (
                        <div>
                            <div className="w-full py-6">
                                <p className="uppercase">Full Body:</p>
                            </div>
                            <div className="flex w-full flex-col">
                                <div className="flex w-full justify-between">
                                    <p>Dress</p>
                                    <p>£11.50</p>
                                </div>
                                <hr className="my-4 w-full border-black" />
                            </div>
                            <div className="flex w-full flex-col">
                                <div className="flex w-full justify-between">
                                    <p>Evening/Delicate Dress</p>
                                    <p>£11.50</p>
                                </div>
                                <hr className="my-4 w-full border-black" />
                            </div>
                            <div className="flex w-full flex-col">
                                <div className="flex w-full justify-between">
                                    <p>Two-Piece Suit</p>
                                    <p>£11.50</p>
                                </div>
                                <hr className="my-4 w-full border-black" />
                            </div>
                        </div>
                    )}

                    {activeTab === 2 && (
                        <div>
                            <div className="w-full py-6">
                                <p className="uppercase">Mixed Wash:</p>
                            </div>
                            <div className="flex w-full flex-col">
                                <div className="flex w-full justify-between">
                                    <p>
                                        Service Wash (Wash, Dry & Fold) -
                                        Additional kg above 5kg
                                    </p>
                                    <p>£11.50</p>
                                </div>
                                <hr className="my-4 w-full border-black" />
                            </div>
                            <div className="flex w-full flex-col">
                                <div className="flex w-full justify-between">
                                    <p>
                                        Service Wash (Wash, Dry & Fold) - Up to
                                        5kg
                                    </p>
                                    <p>£11.50</p>
                                </div>
                                <hr className="my-4 w-full border-black" />
                            </div>
                        </div>
                    )}

                    {activeTab === 3 && (
                        <div>
                            <div className="w-full py-6">
                                <p className="uppercase">Mixed Wash:</p>
                            </div>
                            <div className="flex w-full flex-col">
                                <div className="flex w-full justify-between">
                                    <p>
                                        Service Wash (Wash, Dry & Fold) -
                                        Additional kg above 5kg
                                    </p>
                                    <p>£11.50</p>
                                </div>
                                <hr className="my-4 w-full border-black" />
                            </div>
                            <div className="flex w-full flex-col">
                                <div className="flex w-full justify-between">
                                    <p>
                                        Service Wash (Wash, Dry & Fold) - Up to
                                        5kg
                                    </p>
                                    <p>£11.50</p>
                                </div>
                                <hr className="my-4 w-full border-black" />
                            </div>
                        </div>
                    )}

                    {activeTab === 4 && (
                        <div>
                            <div className="w-full py-6">
                                <p className="uppercase">Mixed Wash:</p>
                            </div>
                            <div className="flex w-full flex-col">
                                <div className="flex w-full justify-between">
                                    <p>
                                        Service Wash (Wash, Dry & Fold) -
                                        Additional kg above 5kg
                                    </p>
                                    <p>£11.50</p>
                                </div>
                                <hr className="my-4 w-full border-black" />
                            </div>
                            <div className="flex w-full flex-col">
                                <div className="flex w-full justify-between">
                                    <p>
                                        Service Wash (Wash, Dry & Fold) - Up to
                                        5kg
                                    </p>
                                    <p>£11.50</p>
                                </div>
                                <hr className="my-4 w-full border-black" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="w-full">
                <ul className="flex justify-center gap-16 whitespace-nowrap">
                    <li className="flex flex-col items-center justify-center">
                        <svg
                            className="h-[65px]"
                            height="145px"
                            x-width="153px"
                            x-height="192px"
                            viewBox="0 0 153 192"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <g
                                id="Page-1"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <g
                                    id="desktop-example-3-"
                                    transform="translate(-555.000000, -3302.000000)"
                                    stroke="#000000"
                                    stroke-width="2.90999991"
                                >
                                    <g
                                        id="Group-2"
                                        transform="translate(557.000000, 3304.000000)"
                                    >
                                        <path
                                            d="M41.6194756,34.8865979 L16.2430635,34.8865979 C13.1595609,34.8948985 10.6596041,37.3781506 10.6428571,40.4493838 L10.6428571,182.422015 C10.651241,185.499186 13.1536343,187.991649 16.2430635,188 L143.399794,188 C146.489223,187.991649 148.991616,185.499186 149,182.422015 L149,40.4493838 C148.983253,37.3781506 146.483296,34.8948985 143.399794,34.8865979 L121.105784,34.8865979"
                                            id="Shape-Copy"
                                            fill="#FFFFFF"
                                        ></path>
                                        <line
                                            x1="83.2077922"
                                            y1="31.0103093"
                                            x2="83.2077922"
                                            y2="188"
                                            id="Shape-Copy-2"
                                        ></line>
                                        <path
                                            d="M30.9766185,24.2268041 L5.6002064,24.2268041 C2.51670377,24.2351047 0.0167469662,26.7183568 0,29.78959 L0,171.762221 C0.00838384335,174.839392 2.51077717,177.331856 5.6002064,177.340206 L132.756936,177.340206 C135.846366,177.331856 138.348759,174.839392 138.357143,171.762221 L138.357143,29.78959 C138.340396,26.7183568 135.840439,24.2351047 132.756936,24.2268041 L110.462927,24.2268041"
                                            id="Shape-Copy-3"
                                            fill="#FFFFFF"
                                        ></path>
                                        <line
                                            x1="71.5974026"
                                            y1="22.2886598"
                                            x2="71.5974026"
                                            y2="179.278351"
                                            id="Shape-Copy-4"
                                        ></line>
                                        <path
                                            d="M44.162598,0 L31.9285714,24.7481202 L51.5183065,51.3608247 L71.5974026,21.7432114 C71.5974026,21.7432114 43.8108697,13.4681551 44.162598,0 Z"
                                            id="Shape-Copy-5"
                                            fill="#FFFFFF"
                                        ></path>
                                        <path
                                            d="M99.0322072,0 L111.266234,24.7481202 L91.6764987,51.3608247 L71.5974026,21.7432114 C71.5974026,21.7432114 99.3839355,13.4681551 99.0322072,0 Z"
                                            id="Shape-Copy-6"
                                            fill="#FFFFFF"
                                        ></path>
                                        <line
                                            x1="44.5064935"
                                            y1="0"
                                            x2="98.6883117"
                                            y2="0"
                                            id="Shape-Copy-7"
                                        ></line>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <div className="">
                            <p className="py-2 text-center uppercase">SHIRTS</p>
                            <p className="py-2 text-center">
                                Washed and Pressed
                            </p>
                            <p className="py-2 text-center font-extrabold">
                                From £2.50
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-col items-center justify-center">
                        <svg
                            className="h-[65px]"
                            height="145px"
                            x-width="153px"
                            x-height="200px"
                            viewBox="0 0 153 200"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <g
                                id="Page-1"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                            >
                                <g
                                    id="desktop-example-3-"
                                    transform="translate(-984.000000, -3289.000000)"
                                    stroke-width="2.69999993"
                                >
                                    <g
                                        id="Group-3"
                                        transform="translate(986.000000, 3291.000000)"
                                    >
                                        <line
                                            x1="97.8842868"
                                            y1="67.0608519"
                                            x2="52.2932692"
                                            y2="67.0608519"
                                            id="Path-54"
                                            stroke="#000000"
                                        ></line>
                                        <line
                                            x1="101.680722"
                                            y1="72.9697038"
                                            x2="48.7115385"
                                            y2="72.9697038"
                                            id="Path-54-Copy"
                                            stroke="#000000"
                                        ></line>
                                        <path
                                            d="M12.0717593,171.5 L0,164.123656 C7.42877493,153.981183 11.9169931,147.373208 13.4646546,144.299731 C15.7861467,139.689516 27.3936075,103.268817 33.4294872,91.2822581 C37.4534069,83.2912186 43.7988189,75.9148746 52.4657229,69.1532258 C40.3939637,44.8727599 35.5962132,32.578853 38.0724715,32.2715054 C41.786859,31.8104839 44.5726496,30.4274194 46.8941417,25.3561828 C48.4418032,21.9753584 49.2156339,13.5232975 49.2156339,0 L56.1801104,0 C59.8944979,12.2939068 66.2399098,18.4408602 75.2163462,18.4408602"
                                            id="Path-7"
                                            stroke="#010101"
                                        ></path>
                                        <path
                                            d="M85.8554131,171.5 L73.7836538,164.123656 C81.2124288,153.981183 85.700647,147.373208 87.2483084,144.299731 C89.5698006,139.689516 101.177261,103.268817 107.213141,91.2822581 C111.237061,83.2912186 117.582473,75.9148746 126.249377,69.1532258 C114.177618,44.8727599 109.379867,32.578853 111.856125,32.2715054 C115.570513,31.8104839 118.356303,30.4274194 120.677796,25.3561828 C122.225457,21.9753584 122.999288,13.5232975 122.999288,0 L129.963764,0 C133.678152,12.2939068 140.023564,18.4408602 149,18.4408602"
                                            id="Path-7-Copy"
                                            stroke="#010101"
                                            transform="translate(111.391827, 85.750000) scale(-1, 1) translate(-111.391827, -85.750000) "
                                        ></path>
                                        <polyline
                                            id="Path-8"
                                            stroke="#000000"
                                            stroke-linecap="round"
                                            points="34.4344495 109.529412 11.4615385 180.850283 35.8173077 185.911765"
                                        ></polyline>
                                        <polyline
                                            id="Path-8-Copy"
                                            stroke="#000000"
                                            stroke-linecap="round"
                                            transform="translate(128.225962, 149.161765) scale(-1, 1) translate(-128.225962, -149.161765) "
                                            points="139.020988 110.970588 116.048077 182.29146 140.403846 187.352941"
                                        ></polyline>
                                        <path
                                            d="M37.25,186.632353 C51.1689712,192.661825 64.2431735,195.78062 76.4726069,195.988736 C88.7020402,196.196853 101.655082,193.520981 115.331731,187.961121"
                                            id="Path-9"
                                            stroke="#000000"
                                            stroke-linecap="round"
                                        ></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <div className="">
                            <p className="py-2 text-center uppercase">
                                Day Dress
                            </p>
                            <p className="py-2 text-center">Dry Clean</p>
                            <p className="py-2 text-center font-extrabold">
                                From £11.50
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-col items-center justify-center">
                        <svg
                            className="h-[65px]"
                            height="145px"
                            x-width="141px"
                            x-height="178px"
                            viewBox="0 0 141 178"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <g
                                id="Page-1"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                            >
                                <g
                                    id="desktop-example-3-"
                                    transform="translate(-1410.000000, -3303.000000)"
                                    stroke="#000000"
                                    stroke-width="2.99999982"
                                >
                                    <g
                                        id="Group-4"
                                        transform="translate(1412.000000, 3305.000000)"
                                    >
                                        <path
                                            d="M69.7971199,27 L118.20288,27 C119.195402,27 120,27.804598 120,28.7971199 L120,66.5359999 C120,66.9598484 119.850192,67.3700571 119.577043,67.6941517 L108.058526,81.3610319 C107.717063,81.7661818 107.214214,82 106.684363,82 L85.323836,82 C84.8833514,82 84.4582069,81.838225 84.1291474,81.5453998 L68.6024313,67.7284025 C68.2192173,67.387386 68,66.8988596 68,66.3858828 L68,28.7971199 C68,27.804598 68.804598,27 69.7971199,27 Z"
                                            id="Path-53-Copy"
                                            fill="#FFFFFF"
                                        ></path>
                                        <line
                                            x1="100"
                                            y1="38"
                                            x2="48"
                                            y2="38"
                                            id="Path-54-Copy-4"
                                        ></line>
                                        <path
                                            d="M41,66 L3.32103956,81.0068322 C0.612288403,82.0856804 -0.747955722,85.1225654 0.250587361,87.8619372 C21.1830181,145.287312 34.7661557,174 41,174"
                                            id="Path-52-Copy"
                                            fill="#FFFFFF"
                                        ></path>
                                        <path
                                            d="M40,174 L40,1.79711986 C40,0.804597969 40.804598,8.3979737e-15 41.7971199,0 L116.269141,0 C117.261663,1.81607813e-15 118.066261,0.804597969 118.066261,1.79711986 L118.066261,12.5783133 L118.066261,12.5783133 L136.915385,70.8444478 C137.007248,71.1284134 137.026942,71.4307869 136.97269,71.7242693 L118.338083,172.529556 C118.180567,173.38165 117.437435,174 116.570904,174 L40,174 L40,174 Z"
                                            id="Path-51-Copy"
                                            fill="#FFFFFF"
                                        ></path>
                                        <path
                                            d="M55.7971199,39 L104.20288,39 C105.195402,39 106,39.804598 106,40.7971199 L106,78.5359999 C106,78.9598484 105.850192,79.3700571 105.577043,79.6941517 L94.0585256,93.3610319 C93.7170632,93.7661818 93.2142144,94 92.6843625,94 L71.323836,94 C70.8833514,94 70.4582069,93.838225 70.1291474,93.5453998 L54.6024313,79.7284025 C54.2192173,79.387386 54,78.8988596 54,78.3858828 L54,40.7971199 C54,39.804598 54.804598,39 55.7971199,39 Z"
                                            id="Path-53-Copy-2"
                                            fill="#FFFFFF"
                                        ></path>
                                        <line
                                            x1="107"
                                            y1="50"
                                            x2="55"
                                            y2="50"
                                            id="Path-54-Copy-5"
                                        ></line>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <div className="">
                            <p className="py-2 text-center uppercase">
                                Service Wash
                            </p>
                            <p className="py-2 text-center">
                                Wash, Dry and Fold
                            </p>
                            <p className="py-2 text-center font-extrabold">
                                From £16.95
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-col items-center justify-center">
                        <svg
                            className="h-[65px]"
                            height="145px"
                            x-width="222px"
                            x-height="156px"
                            viewBox="0 0 222 156"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <g
                                id="Page-1"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                            >
                                <g
                                    id="desktop-example-3-"
                                    transform="translate(-1847.000000, -3324.000000)"
                                    stroke="#000000"
                                    stroke-width="2.8"
                                >
                                    <polyline
                                        id="Path-32-Copy-2"
                                        points="1858 3455 1858 3478 1865 3478 1865 3455"
                                    ></polyline>
                                    <polyline
                                        id="Path-32-Copy-3"
                                        points="2003 3455 2003 3478 2010 3478 2010 3455"
                                    ></polyline>
                                    <polyline
                                        id="Path-30-Copy"
                                        points="1901 3384 2065 3384 2016.21399 3428.14033 2015.36842 3461"
                                    ></polyline>
                                    <polyline
                                        id="Path-31-Copy"
                                        points="2018 3462 2067 3414.4246 2067 3383.47693 2067 3326 2060.94546 3326 2060.94546 3384.35064"
                                    ></polyline>
                                    <polyline
                                        id="Path-35-Copy-2"
                                        points="1908 3384 1908 3328 1902 3328 1902 3384"
                                    ></polyline>
                                    <path
                                        d="M1908,3341 C1952.18565,3325 2003.51899,3325 2062,3341"
                                        id="Path-36-Copy"
                                    ></path>
                                    <line
                                        x1="1902.1765"
                                        y1="3384"
                                        x2="1850.08"
                                        y2="3431.75615"
                                        id="Path-38-Copy"
                                    ></line>
                                    <path
                                        d="M1849,3462 L2017,3462 L2017,3427.37991 C1970.73678,3423.12664 1937.81655,3421 1918.23931,3421 C1888.87346,3421 1858.56098,3424.95991 1849,3430.54089 C1849,3437.9822 1849,3448.46857 1849,3462 Z"
                                        id="Path-29-Copy"
                                        fill="#FFFFFF"
                                    ></path>
                                    <path
                                        d="M1978.38095,3358.70318 C1959.39683,3356.30035 1945.77778,3355.49941 1937.52381,3356.30035 C1925.14286,3357.50177 1914,3371.91873 1914,3383.93286 C1914,3391.94229 1932.15873,3393.1437 1968.47619,3387.5371 C1974.25397,3379.52768 1977.55556,3373.92108 1978.38095,3370.71731 C1979.20635,3367.51355 1979.20635,3363.50883 1978.38095,3358.70318 Z"
                                        id="Path-33-Copy-2"
                                        fill="#FFFFFF"
                                    ></path>
                                    <path
                                        d="M2037.38095,3358.70318 C2018.39683,3356.30035 2004.77778,3355.49941 1996.52381,3356.30035 C1984.14286,3357.50177 1973,3371.91873 1973,3383.93286 C1973,3391.94229 1991.15873,3393.1437 2027.47619,3387.5371 C2033.25397,3379.52768 2036.55556,3373.92108 2037.38095,3370.71731 C2038.20635,3367.51355 2038.20635,3363.50883 2037.38095,3358.70318 Z"
                                        id="Path-33-Copy-3"
                                        fill="#FFFFFF"
                                    ></path>
                                    <path
                                        d="M1977,3359 C1968.33333,3368.6 1964,3376.6 1964,3383"
                                        id="Path-34-Copy-2"
                                    ></path>
                                    <path
                                        d="M2035,3359 C2026.33333,3368.6 2022,3376.6 2022,3383"
                                        id="Path-34-Copy-3"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                        <div className="">
                            <p className="py-2 text-center uppercase">
                                Bedding
                            </p>
                            <p className="py-2 text-center">
                                Bed Set (Wash and Press)
                            </p>
                            <p className="py-2 text-center font-extrabold">
                                From £14.00
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Pricing;
