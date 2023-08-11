import { Link } from "react-router-dom";

type Props = {};

const CompanyServices = ({}: Props) => {
  return (
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
  );
};

export default CompanyServices;
