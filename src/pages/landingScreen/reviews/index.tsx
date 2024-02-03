import { useEffect } from "react";
import { Helmet } from "react-helmet";
import 'swiper/css';
import 'swiper/css/navigation';
import CustomerFeedback from "./components/customerFeedback";

type Props = {
  placeId: string;
};

const GoogleReviews = ({ placeId }: Props) => {
  useEffect(() => {}, [placeId]);

  return (
    <div className="mx-auto w-5/6 py-8">
      <Helmet>
        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></script>
      </Helmet>
      <div
        className="elfsight-app-5414afd0-be98-4216-9e06-6695d59aae84"
        data-elfsight-app-lazy
      ></div>
      <CustomerFeedback />
    </div>
  );
};

export default GoogleReviews;
