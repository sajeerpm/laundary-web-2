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
      <Link
        className="hover:underline"
        to={`/pricing/curtain-cleaning-london-near-me`}
      >
        Curtain Cleaning
      </Link>
      <Link
        className="hover:underline"
        to={`/pricing/dry-cleaning-london-near-me`}
      >
        Dry Cleaning
      </Link>
      <Link className="hover:underline" to={`/pricing/ironing-near-me-london`}>
        Ironing
      </Link>
      <Link
        className="hover:underline"
        to={`/pricing/laundry-services-london-near-me`}
      >
        Laundry Services
      </Link>
      <Link className="hover:underline" to={`/pricing/leather-fur-and-suede`}>
        Leather, Fur and Suede
      </Link>
      <Link
        className="hover:underline"
        to={`/pricing/shirt-service-london-near-me`}
      >
        Shirt Service
      </Link>
      <Link
        className="hover:underline"
        to={`/pricing/shoe-repair-london-near-me`}
      >
        Shoe Repairs
      </Link>
      <Link
        className="hover:underline"
        to={`/pricing/designer-clothes-near-me-london`}
      >
        Specialist items
      </Link>
      <Link
        className="hover:underline"
        to={`/pricing/alteration-and-repair-london`}
      >
        Tailoring & Repairs
      </Link>
      <Link
        className="hover:underline"
        to={`/pricing/trainer-cleaning-near-me-london`}
      >
        Trainer Cleaning
      </Link>
      <Link
        className="hover:underline"
        to={`/pricing/wedding-dresses-london-near-me`}
      >
        Wedding Dresses
      </Link>
    </div>
  );
};

export default CompanyServices;
