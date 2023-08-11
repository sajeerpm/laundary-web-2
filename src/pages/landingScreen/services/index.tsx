import AboutUs from "./components/AboutUs";
import Locations from "./components/Locations";
import CompanyServices from "./components/CompanyServices";

type Props = {};

const Services = ({}: Props) => {
  return (
    <section className="">
      <div className="mx-auto w-5/6 justify-between gap-16 md:flex md:flex-row">
        <CompanyServices />
        <AboutUs />
        <Locations />
      </div>
    </section>
  );
};

export default Services;
