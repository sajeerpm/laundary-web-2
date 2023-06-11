import { Link } from "react-router-dom";

type Props = {};

const Services = ({}: Props) => {
  return (
    <section className="">
      <div className="mx-auto w-5/6 justify-between gap-16 md:flex md:flex-row">
        <div className="flex flex-col pt-6 md:w-1/6">
          <p className="text-md uppercase">Services</p>
          <hr className="my-2 h-[2px] bg-gray-700" />
          <Link className="hover:underline" to={`#`}>
            Corporate Services
          </Link>
          <Link className="hover:underline" to={`#`}>
            Curtain Cleaning
          </Link>
          <Link className="hover:underline" to={`#`}>
            Dry Cleaning
          </Link>
          <Link className="hover:underline" to={`#`}>
            Gift Vouchers
          </Link>
          <Link className="hover:underline" to={`#`}>
            Ironing
          </Link>
          <Link className="hover:underline" to={`#`}>
            Laundry Services
          </Link>
          <Link className="hover:underline" to={`#`}>
            Leather, Fur and Suede
          </Link>
          <Link className="hover:underline" to={`#`}>
            Shirt Service
          </Link>
          <Link className="hover:underline" to={`#`}>
            Shoe Repairs
          </Link>
          <Link className="hover:underline" to={`#`}>
            Specialist items
          </Link>
          <Link className="hover:underline" to={`#`}>
            Tailoring & Repairs
          </Link>
          <Link className="hover:underline" to={`#`}>
            Trainer Cleaning
          </Link>
          <Link className="hover:underline" to={`#`}>
            Wedding Dresses
          </Link>
        </div>
        <div className="flex flex-col pt-6 md:w-1/6">
          <p className="text-md uppercase">About Us</p>
          <hr className="my-2 h-[2px] bg-gray-700" />
          <Link className="hover:underline" to={`#`}>
            Blog
          </Link>
          <Link className="hover:underline" to={`#`}>
            Careers
          </Link>
          <Link className="hover:underline" to={`#`}>
            Customer Reviews
          </Link>
          <Link className="hover:underline" to={`#`}>
            Log In
          </Link>
          <Link className="hover:underline" to={`#`}>
            Our Company
          </Link>
          <Link className="hover:underline" to={`#`}>
            Press Informations
          </Link>
          <Link className="hover:underline" to={`#`}>
            Privacy & Cookies
          </Link>
          <Link className="hover:underline" to={`#`}>
            Terms & Conditions
          </Link>
          <Link className="hover:underline" to={`#`}>
            Why Us?
          </Link>
          <Link className="hover:underline" to={`#`}>
            Work With Us
          </Link>
        </div>
        <div className="flex-1 pt-6 md:w-1/2">
          <p className="text-md uppercase">Selected Locations</p>
          <hr className="my-2 h-[2px] bg-gray-700" />
          <div className="w-full justify-between gap-8 md:flex">
            <div className="flex flex-col md:w-1/4">
              <Link className="hover:underline" to={`#`}>
                Abbey road
              </Link>
              <Link className="hover:underline" to={`#`}>
                Baker street
              </Link>
              <Link className="hover:underline" to={`#`}>
                Chiswick
              </Link>
              <Link className="hover:underline" to={`#`}>
                Earls court
              </Link>
              <Link className="hover:underline" to={`#`}>
                Finchley
              </Link>
            </div>
            <div className="flex flex-col md:w-1/4">
              <Link className="hover:underline" to={`#`}>
                Golders green
              </Link>
              <Link className="hover:underline" to={`#`}>
                Hammersmith
              </Link>
              <Link className="hover:underline" to={`#`}>
                Islington
              </Link>
              <Link className="hover:underline" to={`#`}>
                Kensington
              </Link>
              <Link className="hover:underline" to={`#`}>
                Lancaster gate
              </Link>
            </div>
            <div className="flex flex-col md:w-1/4">
              <Link className="hover:underline" to={`#`}>
                Marble arch
              </Link>
              <Link className="hover:underline" to={`#`}>
                Neasden
              </Link>
              <Link className="hover:underline" to={`#`}>
                Paddington
              </Link>
              <Link className="hover:underline" to={`#`}>
                Queens park
              </Link>
              <Link className="hover:underline" to={`#`}>
                Regents park
              </Link>
            </div>
            <div className="flex flex-col md:w-1/4">
              <Link className="hover:underline" to={`#`}>
                Shepherds bush
              </Link>
              <Link className="hover:underline" to={`#`}>
                Victoria
              </Link>
              <Link className="hover:underline" to={`#`}>
                Willesden green
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
