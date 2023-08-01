import { Link } from "react-router-dom";

type Props = {};

const Services = ({}: Props) => {
  return (
    <section className="">
      <div className="mx-auto w-5/6 justify-between gap-16 md:flex md:flex-row">
        <div className="flex flex-col pt-6 md:w-1/6">
          <p className="text-md uppercase">Services</p>
          <hr className="my-2 h-[2px] bg-gray-400" />
          <Link className="hover:underline" to={`/corperates`}>
            Corporate Services
          </Link>
          <Link className="hover:underline" to={`/pricing`}>
            Curtain Cleaning
          </Link>
          <Link className="hover:underline" to={`/pricing`}>
            Dry Cleaning
          </Link>
          <Link className="hover:underline" to={`/pricing`}>
            Ironing
          </Link>
          <Link className="hover:underline" to={`/pricing`}>
            Laundry Services
          </Link>
          <Link className="hover:underline" to={`/pricing`}>
            Leather, Fur and Suede
          </Link>
          <Link className="hover:underline" to={`/pricing`}>
            Shirt Service
          </Link>
          <Link className="hover:underline" to={`/pricing`}>
            Shoe Repairs
          </Link>
          <Link className="hover:underline" to={`/pricing`}>
            Specialist items
          </Link>
          <Link className="hover:underline" to={`/pricing`}>
            Tailoring & Repairs
          </Link>
          <Link className="hover:underline" to={`/pricing`}>
            Trainer Cleaning
          </Link>
          <Link className="hover:underline" to={`/pricing`}>
            Wedding Dresses
          </Link>
        </div>
        <div className="flex flex-col pt-6 md:w-1/6">
          <p className="text-md uppercase">About Us</p>
          <hr className="my-2 h-[2px] bg-gray-400" />
          <Link className="hover:underline" to={`#`}>
            Blog
          </Link>
          <Link className="hover:underline" to={`/branches`}>
            Customer Reviews
          </Link>
          <Link className="hover:underline" to={`/login`}>
            Log In
          </Link>
          <Link className="hover:underline" to={`/aboutus`}>
            Our Company
          </Link>
          <Link className="hover:underline" to={`/privacy`}>
            Privacy & Cookies
          </Link>
          <Link className="hover:underline" to={`/terms`}>
            Terms & Conditions
          </Link>
        </div>
        <div className="flex-1 pt-6 md:w-1/2">
          <p className="text-md uppercase">Selected Locations</p>
          <hr className="my-2 h-[2px] bg-gray-400" />
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
