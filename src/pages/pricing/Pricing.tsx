import { useEffect, useState } from "react";
import DryCleaningBackground from "@/assets/images/dry-cleaning.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HText from "@/shared/HText";
import SHText from "@/shared/SHText";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeTabName, setActiveTabName] = useState("Dry Cleaning");
  const categories = [
    {
      id: 1,
      name: "Dry Cleaning",
      description:
        "Your clothes are individually inspected, cleaned (stains treated and then dry cleaned or laundered as appropriate) and ironed. Each item is quality checked and then packed by our master cleaners and can be returned to you within 24 hours.",
      prices: [
        { id: 1, name: "2pc Suit", price: "£13.95" },
        { id: 2, name: "Burberry Coat", price: "£39.99" },
        { id: 3, name: "Cardigan", price: "£7.95" },
        { id: 4, name: "Cotton Blouse Iron Only", price: "£3.95" },
        { id: 5, name: "Dinner suit", price: "£15.00" },
        { id: 6, name: "Dry Clean Shirt", price: "£4.95" },
        { id: 7, name: "Folded Cotton Blouse", price: "£5.50" },
        { id: 8, name: "Jump Suit", price: "£13.95" },
        { id: 9, name: "Long Silk Dress", price: "£24.95" },
        { id: 10, name: "Moncler jacket", price: "£39.99" },
        { id: 11, name: "Padded Coat", price: "£24.95" },
        { id: 12, name: "Pashmina Scarf", price: "£9.00" },
        { id: 13, name: "Plain scarf", price: "£5.95" },
        { id: 14, name: "Raincoat", price: "£16.50" },
        { id: 15, name: "Silk Dress", price: "£19.95" },
        { id: 16, name: "Silk Skirt", price: "£7.95" },
        { id: 17, name: "Silk Waistcoat", price: "£8.95" },
        { id: 18, name: "Suit Jacket Or Blazer", price: "£8.50" },
        { id: 19, name: "Top", price: "£6.95" },
        { id: 20, name: "Trousers Iron Only", price: "£5.50" },
        { id: 21, name: "Waistcoat", price: "£5.95" },
      ],
    },
    {
      id: 2,
      name: "Shirt Service",
      description:
        "Your clothes are individually inspected, cleaned (stains treated and then dry cleaned or laundered as appropriate) and ironed. Each item is quality checked and then packed by our master cleaners and can be returned to you within 24 hours.",
      prices: [
        { id: 22, name: "3pc Suit", price: "£16.00" },
        { id: 23, name: "Canada Goose Jacket ", price: "£39.99" },
        { id: 24, name: "Cotton Blouse ", price: "£4.95" },
        { id: 25, name: "Designer Jumper ", price: "£11.95" },
        { id: 26, name: "Dress with Trim", price: "£13.95" },
        { id: 27, name: "Evening Dress", price: "£35.00" },
        { id: 28, name: "Jacket Iron Only", price: "£6.25" },
        { id: 29, name: "Jumper", price: "£6.95" },
        { id: 30, name: "Maxmara Coat", price: "£39.99" },
        { id: 31, name: "Overcoat (From)", price: "£22.00" },
        { id: 32, name: "Padded Jacket", price: "£19.50" },
        { id: 33, name: "Plain Dress", price: "£11.50" },
        { id: 34, name: "Plain Skirt", price: "£6.95" },
        { id: 35, name: "Silk Blouse", price: "£6.95" },
        { id: 36, name: "Silk Jacket", price: "£9.95" },
        { id: 37, name: "Silk Trouser", price: "£9.50" },
        { id: 38, name: "Skirt with Trim", price: "£8.95" },
        { id: 39, name: "Tie", price: "£4.00" },
        { id: 40, name: "Trousers", price: "£6.95" },
        { id: 41, name: "Trousers with Trim", price: "£8.50" },
        { id: 42, name: "Winter Jackets", price: "£16.50" },
      ],
    },
    {
      id: 3,
      name: "Laundry Services",
      description:
        "Your clothes are individually inspected, cleaned (stains treated and then dry cleaned or laundered as appropriate) and ironed. Each item is quality checked and then packed by our master cleaners and can be returned to you within 24 hours.",
      prices: [
        { id: 22, name: "3pc Suit", price: "£16.00" },
        { id: 23, name: "Canada Goose Jacket ", price: "£39.99" },
        { id: 24, name: "Cotton Blouse ", price: "£4.95" },
      ],
    },
    {
      id: 4,
      name: "wash and fold services",
      description:
        "Your clothes are individually inspected, cleaned (stains treated and then dry cleaned or laundered as appropriate) and ironed. Each item is quality checked and then packed by our master cleaners and can be returned to you within 24 hours.",
      prices: [
        { id: 22, name: "3pc Suit", price: "£16.00" },
        { id: 23, name: "Canada Goose Jacket ", price: "£39.99" },
        { id: 24, name: "Cotton Blouse ", price: "£4.95" },
        { id: 25, name: "Designer Jumper ", price: "£11.95" },
        { id: 26, name: "Dress with Trim", price: "£13.95" },
        { id: 27, name: "Evening Dress", price: "£35.00" },
        { id: 28, name: "Jacket Iron Only", price: "£6.25" },
        { id: 29, name: "Jumper", price: "£6.95" },
        { id: 30, name: "Maxmara Coat", price: "£39.99" },
        { id: 31, name: "Overcoat (From)", price: "£22.00" },
        { id: 32, name: "Padded Jacket", price: "£19.50" },
      ],
    },
    {
      id: 5,
      name: "Curtain Cleaning",
      description:
        "Your clothes are individually inspected, cleaned (stains treated and then dry cleaned or laundered as appropriate) and ironed. Each item is quality checked and then packed by our master cleaners and can be returned to you within 24 hours.",
      prices: [
        { id: 22, name: "3pc Suit", price: "£16.00" },
        { id: 35, name: "Silk Blouse", price: "£6.95" },
        { id: 36, name: "Silk Jacket", price: "£9.95" },
        { id: 37, name: "Silk Trouser", price: "£9.50" },
        { id: 38, name: "Skirt with Trim", price: "£8.95" },
        { id: 39, name: "Tie", price: "£4.00" },
        { id: 40, name: "Trousers", price: "£6.95" },
        { id: 41, name: "Trousers with Trim", price: "£8.50" },
        { id: 42, name: "Winter Jackets", price: "£16.50" },
      ],
    },
    {
      id: 6,
      name: "SHOE REPAIR AND COMPLIMENT POLISH",
      description:
        "Your clothes are individually inspected, cleaned (stains treated and then dry cleaned or laundered as appropriate) and ironed. Each item is quality checked and then packed by our master cleaners and can be returned to you within 24 hours.",
      prices: [
        { id: 22, name: "3pc Suit", price: "£16.00" },
        { id: 23, name: "Canada Goose Jacket ", price: "£39.99" },
        { id: 24, name: "Cotton Blouse ", price: "£4.95" },
        { id: 25, name: "Designer Jumper ", price: "£11.95" },
        { id: 26, name: "Dress with Trim", price: "£13.95" },
        { id: 33, name: "Plain Dress", price: "£11.50" },
        { id: 34, name: "Plain Skirt", price: "£6.95" },
        { id: 35, name: "Silk Blouse", price: "£6.95" },
        { id: 36, name: "Silk Jacket", price: "£9.95" },
        { id: 37, name: "Silk Trouser", price: "£9.50" },
        { id: 38, name: "Skirt with Trim", price: "£8.95" },
        { id: 39, name: "Tie", price: "£4.00" },
        { id: 40, name: "Trousers", price: "£6.95" },
        { id: 41, name: "Trousers with Trim", price: "£8.50" },
        { id: 42, name: "Winter Jackets", price: "£16.50" },
      ],
    },
    {
      id: 7,
      name: "Trainer Cleaning",
      description:
        "Your clothes are individually inspected, cleaned (stains treated and then dry cleaned or laundered as appropriate) and ironed. Each item is quality checked and then packed by our master cleaners and can be returned to you within 24 hours.",
      prices: [
        { id: 22, name: "3pc Suit", price: "£16.00" },
        { id: 23, name: "Canada Goose Jacket ", price: "£39.99" },
        { id: 24, name: "Cotton Blouse ", price: "£4.95" },
        { id: 25, name: "Designer Jumper ", price: "£11.95" },
        { id: 26, name: "Dress with Trim", price: "£13.95" },
        { id: 27, name: "Evening Dress", price: "£35.00" },
        { id: 28, name: "Jacket Iron Only", price: "£6.25" },
        { id: 29, name: "Jumper", price: "£6.95" },
        { id: 30, name: "Maxmara Coat", price: "£39.99" },
        { id: 31, name: "Overcoat (From)", price: "£22.00" },
        { id: 32, name: "Padded Jacket", price: "£19.50" },
        { id: 33, name: "Plain Dress", price: "£11.50" },
        { id: 34, name: "Plain Skirt", price: "£6.95" },
      ],
    },
    {
      id: 8,
      name: "Wedding Dresses",
      description:
        "Your clothes are individually inspected, cleaned (stains treated and then dry cleaned or laundered as appropriate) and ironed. Each item is quality checked and then packed by our master cleaners and can be returned to you within 24 hours.",
      prices: [
        { id: 22, name: "3pc Suit", price: "£16.00" },
        { id: 23, name: "Canada Goose Jacket ", price: "£39.99" },
        { id: 24, name: "Cotton Blouse ", price: "£4.95" },
        { id: 25, name: "Designer Jumper ", price: "£11.95" },
        { id: 26, name: "Dress with Trim", price: "£13.95" },
        { id: 27, name: "Evening Dress", price: "£35.00" },
        { id: 28, name: "Jacket Iron Only", price: "£6.25" },
        { id: 29, name: "Jumper", price: "£6.95" },
        { id: 30, name: "Maxmara Coat", price: "£39.99" },
        { id: 31, name: "Overcoat (From)", price: "£22.00" },
        { id: 32, name: "Padded Jacket", price: "£19.50" },
      ],
    },
    {
      id: 9,
      name: "Alterations & Repairs",
      description:
        "Your clothes are individually inspected, cleaned (stains treated and then dry cleaned or laundered as appropriate) and ironed. Each item is quality checked and then packed by our master cleaners and can be returned to you within 24 hours.",
      prices: [
        { id: 33, name: "Plain Dress", price: "£11.50" },
        { id: 34, name: "Plain Skirt", price: "£6.95" },
        { id: 35, name: "Silk Blouse", price: "£6.95" },
        { id: 36, name: "Silk Jacket", price: "£9.95" },
        { id: 37, name: "Silk Trouser", price: "£9.50" },
        { id: 38, name: "Skirt with Trim", price: "£8.95" },
        { id: 39, name: "Tie", price: "£4.00" },
        { id: 40, name: "Trousers", price: "£6.95" },
        { id: 41, name: "Trousers with Trim", price: "£8.50" },
        { id: 42, name: "Winter Jackets", price: "£16.50" },
      ],
    },
    {
      id: 10,
      name: "Leather, Fur and Suede",
      description:
        "Your clothes are individually inspected, cleaned (stains treated and then dry cleaned or laundered as appropriate) and ironed. Each item is quality checked and then packed by our master cleaners and can be returned to you within 24 hours.",
      prices: [
        { id: 22, name: "3pc Suit", price: "£16.00" },
        { id: 23, name: "Canada Goose Jacket ", price: "£39.99" },
        { id: 24, name: "Cotton Blouse ", price: "£4.95" },
        { id: 25, name: "Designer Jumper ", price: "£11.95" },
        { id: 26, name: "Dress with Trim", price: "£13.95" },
        { id: 27, name: "Evening Dress", price: "£35.00" },
        { id: 38, name: "Skirt with Trim", price: "£8.95" },
        { id: 39, name: "Tie", price: "£4.00" },
        { id: 40, name: "Trousers", price: "£6.95" },
        { id: 41, name: "Trousers with Trim", price: "£8.50" },
        { id: 42, name: "Winter Jackets", price: "£16.50" },
      ],
    },
    {
      id: 11,
      name: "Specialist",
      description:
        "Your clothes are individually inspected, cleaned (stains treated and then dry cleaned or laundered as appropriate) and ironed. Each item is quality checked and then packed by our master cleaners and can be returned to you within 24 hours.",
      prices: [
        { id: 22, name: "3pc Suit", price: "£16.00" },
        { id: 23, name: "Canada Goose Jacket ", price: "£39.99" },
        { id: 24, name: "Cotton Blouse ", price: "£4.95" },
        { id: 25, name: "Designer Jumper ", price: "£11.95" },
        { id: 26, name: "Dress with Trim", price: "£13.95" },
      ],
    },
    {
      id: 12,
      name: "Ironing",
      description:
        "Your clothes are individually inspected, cleaned (stains treated and then dry cleaned or laundered as appropriate) and ironed. Each item is quality checked and then packed by our master cleaners and can be returned to you within 24 hours.",
      prices: [
        { id: 22, name: "3pc Suit", price: "£16.00" },
        { id: 23, name: "Canada Goose Jacket ", price: "£39.99" },
        { id: 24, name: "Cotton Blouse ", price: "£4.95" },
        { id: 25, name: "Designer Jumper ", price: "£11.95" },
        { id: 26, name: "Dress with Trim", price: "£13.95" },
        { id: 27, name: "Evening Dress", price: "£35.00" },
        { id: 28, name: "Jacket Iron Only", price: "£6.25" },
        { id: 29, name: "Jumper", price: "£6.95" },
        { id: 30, name: "Maxmara Coat", price: "£39.99" },
        { id: 31, name: "Overcoat (From)", price: "£22.00" },
        { id: 32, name: "Padded Jacket", price: "£19.50" },
      ],
    },
  ];

  const handleTabClick = (tabNumber: number, tabName: string) => {
    setActiveTab(tabNumber);
    setActiveTabName(tabName);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="home" className="flex flex-col bg-[#edecef] md:pb-8">
      <div className="items-center justify-center md:flex">
        <div
          className="top-0 flex h-[60vh] w-full flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${DryCleaningBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <HText textAlign="text-center">
            <p className="w-full uppercase">Price List</p>
          </HText>
          <SHText textAlign="text-center">
            <p className="w-full">COLLECTED AND DELIVERED</p>
            <p className="w-full">TO YOUR DOOR</p>
          </SHText>
        </div>
      </div>
      <div className="mx-auto w-5/6 py-8">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {categories.map((category) => (
            <AnchorLink
              className={`rounded-none border border-black px-4 py-4 text-center text-xs uppercase md:tracking-[1.8px] ${
                activeTab === category.id
                  ? "text bg-black text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleTabClick(category.id, category.name)}
              href={`#price-list`}
            >
              {category.name}
            </AnchorLink>
          ))}
        </div>
        <div id="price-list" className="h-6"></div>
        <div className="w-full py-12">
          <p className="w-full py-4 text-center text-lg uppercase">
            {activeTabName}
          </p>
          {categories.map(
            (category) =>
              activeTab === category.id && (
                <div className="mx-auto max-w-[650px] text-center text-xl">
                  <p>{category.description}</p>
                </div>
              )
          )}
        </div>

        <div className="mx-auto md:w-5/6">
          {categories.map(
            (category) =>
              activeTab === category.id && (
                <div className="grid gap-8 md:grid-cols-2">
                  {category.prices.map((price) => (
                    <div className="flex w-full flex-col">
                      <div className="flex w-full justify-between">
                        <p>{price.name}</p>
                        <p>{price.price}</p>
                      </div>
                      <hr className="mt-2 w-full border-black" />
                    </div>
                  ))}
                </div>
              )
          )}
        </div>
      </div>
      <div className="mx-auto w-5/6 items-center justify-center justify-items-center gap-10 py-16 md:flex">
        <div className="flex flex-col items-center md:w-3/12">
          <svg
            className="how-step-image h-[99px] w-[59px]"
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
            <circle cx="33.87" cy="107.7" fill="#c32a2e" r="3.6"></circle>
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
              <circle cx="33.87" cy="57.38" r="23.08"></circle>
            </g>
          </svg>
          <div className="my-6 w-3/6 text-center">
            <p className="text-[18px]">1.</p>
            <p className="text-[18px]">
              Choose <strong>when</strong> and <strong>where</strong> you wish
              us to collect & deliver your laundry
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:w-3/12">
          <svg
            className="how-step-image h-[99px]  w-[137px]"
            viewBox="0 0 180.2 89.79"
            role="img"
            aria-label="[title + description]"
          >
            <title>Van icon</title>
            <desc>Dry cleaning and laundry pickup and delivery</desc>
            <g
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <g stroke="#000">
                <path d="m168.5 40.2c-4.05-1.2-20.5-5.54-24.59-6.68-7.37-2.06-7.94-2-10.58-4.88-7.16-7.82-9.61-10.58-18.72-19.7-4.15-4.15-13-7.94-23-7.94h-78.21c-2.94 0-4.49 2.22-5.32 5.34l-6.89 32.15a8.49 8.49 0 0 0 -.19 1.74v25.16a8.79 8.79 0 0 0 8.79 8.79h.21v-1.89c0-10.17 8.83-18.42 19.72-18.42s19.73 8.25 19.73 18.42v1.89h77.14v-1.89c0-10.17 8.83-18.42 19.72-18.42s19.72 8.25 19.72 18.42v1.89h3.58c7 0 9.53-3.7 9.53-9.4v-12.86c.06-7-2.67-9.44-10.64-11.72z"></path>
                <path d="m91.66 8.75h-5v17.81.22a8.92 8.92 0 0 0 8.61 7.22l29.8.07a1.21 1.21 0 0 0 .86-2.06c-.2-.21-.37-.38-.44-.47-5.55-6.05-8.33-9.1-16.37-17.13-2.74-2.74-9.8-5.66-17.46-5.66z"></path>
                <ellipse cx="29.75" cy="74.26" rx="14.24" ry="14.53"></ellipse>
                <ellipse cx="29.75" cy="74.26" rx="5.27" ry="5.37"></ellipse>
                <ellipse cx="146.37" cy="74.26" rx="14.24" ry="14.53"></ellipse>
                <ellipse cx="146.37" cy="74.26" rx="5.27" ry="5.37"></ellipse>
                <path d="m1 57.77h16.57"></path>
                <path d="m158.47 57.77h20.73"></path>
                <path d="m178.8 48h-8.53a4.74 4.74 0 0 0 -4.48 3.19l-2.26 6.57"></path>
              </g>
              <path d="m5.16 40.37v13.67" stroke="#c32a2e"></path>
              <path d="m84.94 44.31h10.42" stroke="#000"></path>
            </g>
          </svg>
          <div className="my-6 w-3/6 text-center">
            <p className="text-[18px]">2.</p>
            <p className="text-[18px]">
              We <strong>collect</strong> your bag, <strong>invoice</strong> and{" "}
              <strong>clean</strong> your items according to
              <strong> your requirements</strong>.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:w-3/12">
          <svg
            className="how-step-image h-[99px] w-[59px]"
            viewBox="0 0 92.68 118.91"
            role="img"
            aria-label="[title + description]"
          >
            <title>Shirt icon</title>
            <desc>Professional dry cleaners for shirts, dresses, suits</desc>
            <path
              d="m26.14 48.59a2.25 2.25 0 0 0 -1.94 1.17 2.25 2.25 0 0 0 -1.94-1.17 2.37 2.37 0 0 0 -2.26 2.41 2.61 2.61 0 0 0 .45 1.47 18.14 18.14 0 0 0 2.07 2.14l1.69 1.59 2-1.88a16 16 0 0 0 1.79-1.81 2.53 2.53 0 0 0 .41-1.51 2.36 2.36 0 0 0 -2.27-2.41z"
              fill="#c32a2e"
            ></path>
            <circle cx="54.49" cy="40.54" fill="#000" r="1.93"></circle>
            <circle cx="54.49" cy="71.69" fill="#000" r="1.93"></circle>
            <circle cx="54.49" cy="102.83" fill="#000" r="1.93"></circle>
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
              We <strong>deliver</strong> your items cleaned within
              <strong> 24 hours</strong> and at the time required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
