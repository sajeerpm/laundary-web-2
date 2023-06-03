import { useEffect } from "react";
import SHText from "@/shared/SHText";
import HText from "@/shared/HText";
import { useParams } from "react-router-dom";

const PricingDetailed = () => {
  const { name } = useParams();
  const categoryName = name;
  const priceList1 = [
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
  ];

  const priceList2 = [
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
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="home" className="flex flex-col bg-[#edecef] md:pb-0">
      <div className="items-center justify-center md:flex">
        <div
          className="top-0 flex h-[90vh] w-full flex-col items-center justify-center"
          style={{
            backgroundImage: "url(/src/assets/images/unsplash-1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <HText textAlign="text-center">
            <p className="w-full uppercase">{categoryName}</p>
          </HText>
          <SHText textAlign="text-center">
            <p className="w-full">COLLECTED AND DELIVERED</p>
            <p className="w-full">TO YOUR DOOR</p>
          </SHText>
        </div>
      </div>
      <div className="mx-auto flex w-5/6 flex-col items-center">
        <div className="py-16">
          <SHText textAlign="text center">{categoryName} PRICES</SHText>
        </div>
        <div className="flex w-full flex-col justify-between gap-16 py-8 md:flex-row">
          <div className="w-full md:w-1/2">
            {priceList1.map((price) => (
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <p className="text-[16px] font-semibold">{price.name}</p>
                  <p>{price.price}</p>
                </div>
                <hr className="my-4 border-black" />
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2">
            {priceList2.map((price) => (
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <p className="text-[16px] font-semibold">{price.name}</p>
                  <p>{price.price}</p>
                </div>
                <hr className="my-4 border-black" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingDetailed;
