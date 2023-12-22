import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Video from "./components/video";

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
      <div className="flex items-center justify-center px-12 py-8">
        <h4 className="text-[24px] font-[600]">Customer Feedback</h4>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 py-4 md:flex-row md:px-12">
        <Video
          thumbnailUrl="https://www.masterdrycleaner.co.uk/masterdrycleaners/public/storage/uploads/reviews/th_masterdrycleaner-review.png"
          videoUrl="https://www.masterdrycleaner.co.uk/masterdrycleaners/public/storage/uploads/reviews/masterdrycleaner-review.mp4"
        />
        <Video
          thumbnailUrl="https://www.masterdrycleaner.co.uk/masterdrycleaners/public/storage/uploads/reviews/th_masterdrycleaner-review-2.png"
          videoUrl="https://www.masterdrycleaner.co.uk/masterdrycleaners/public/storage/uploads/reviews/masterdrycleaner-review-2.mp4"
        />
      </div>
    </div>
  );
};

export default GoogleReviews;
