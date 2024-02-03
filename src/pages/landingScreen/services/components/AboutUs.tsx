import { Link } from "react-router-dom";

type Props = {};

const AboutUs = ({}: Props) => {
  return (
    <div className="flex flex-col">
      {/* <p className="text-md uppercase">About Us</p>
      <hr className="my-2 h-[2px] bg-gray-400" /> */}
      <Link className="hover:underline" to={`/blogs`}>
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
  );
};

export default AboutUs;
