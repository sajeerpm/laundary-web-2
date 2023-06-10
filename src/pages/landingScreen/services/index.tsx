import { Link } from "react-router-dom";

type Props = {};

const Services = (props: Props) => {
  return (
    <section className="">
      <div className="mx-auto w-5/6 justify-between gap-16 md:flex md:flex-row">
        <div className="flex flex-col pt-6 md:w-1/6">
          <p className="text-md uppercase">Services</p>
          <hr className="my-2 h-[2px] bg-gray-700" />
          <Link to={`#`}>Corporate Services</Link>
          <Link to={`#`}>Curtain Cleaning</Link>
          <Link to={`#`}>Dry Cleaning</Link>
          <Link to={`#`}>Gift Vouchers</Link>
          <Link to={`#`}>Ironing</Link>
          <Link to={`#`}>Laundry Services</Link>
          <Link to={`#`}>Leather, Fur and Suede</Link>
          <Link to={`#`}>Shirt Service</Link>
          <Link to={`#`}>Shoe Repairs</Link>
          <Link to={`#`}>Specialist items</Link>
          <Link to={`#`}>Tailoring & Repairs</Link>
          <Link to={`#`}>Trainer Cleaning</Link>
          <Link to={`#`}>Wedding Dresses</Link>
        </div>
        <div className="flex flex-col pt-6 md:w-1/6">
          <p className="text-md uppercase">About Us</p>
          <hr className="my-2 h-[2px] bg-gray-700" />
          <Link to={`#`}>Blog</Link>
          <Link to={`#`}>Careers</Link>
          <Link to={`#`}>Customer Reviews</Link>
          <Link to={`#`}>Log In</Link>
          <Link to={`#`}>Our Company</Link>
          <Link to={`#`}>Press Informations</Link>
          <Link to={`#`}>Privacy & Cookies</Link>
          <Link to={`#`}>Terms & Conditions</Link>
          <Link to={`#`}>Why Us?</Link>
          <Link to={`#`}>Work With Us</Link>
        </div>
        <div className="flex-1 pt-6 md:w-1/2">
          <p className="text-md uppercase">Selected Locations</p>
          <hr className="my-2 h-[2px] bg-gray-700" />
          <div className="w-full justify-between gap-8 md:flex">
            <div className="flex flex-col md:w-1/4">
              <Link to={`#`}>Abbey road</Link>
              <Link to={`#`}>Baker street</Link>
              <Link to={`#`}>Chiswick</Link>
              <Link to={`#`}>Earls court</Link>
              <Link to={`#`}>Finchley</Link>
            </div>
            <div className="flex flex-col md:w-1/4">
              <Link to={`#`}>Golders green</Link>
              <Link to={`#`}>Hammersmith</Link>
              <Link to={`#`}>Islington</Link>
              <Link to={`#`}>Kensington</Link>
              <Link to={`#`}>Lancaster gate</Link>
            </div>
            <div className="flex flex-col md:w-1/4">
              <Link to={`#`}>Marble arch</Link>
              <Link to={`#`}>Neasden</Link>
              <Link to={`#`}>Paddington</Link>
              <Link to={`#`}>Queens park</Link>
              <Link to={`#`}>Regents park</Link>
            </div>
            <div className="flex flex-col md:w-1/4">
              <Link to={`#`}>Shepherds bush</Link>
              <Link to={`#`}>Victoria</Link>
              <Link to={`#`}>Willesden green</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
