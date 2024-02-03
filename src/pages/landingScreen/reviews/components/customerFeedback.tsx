import Video from "./video";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

type Props = {
  
};

const CustomerFeedback = ({ }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <div className="">
      <div className="flex items-center justify-center px-12 py-8">
        <h4 className="text-[24px] font-[600]">Customer Feedback</h4>
      </div>
      {isAboveMediumScreens && (<div className="flex flex-col items-center justify-center gap-8 py-4 md:flex-row md:px-12">
        <Video
          thumbnailUrl="https://www.masterdrycleaner.co.uk/masterdrycleaners/public/storage/uploads/reviews/th_masterdrycleaner-review.png"
          videoUrl="https://www.masterdrycleaner.co.uk/masterdrycleaners/public/storage/uploads/reviews/masterdrycleaner-review.mp4"
        />
        <Video
          thumbnailUrl="https://www.masterdrycleaner.co.uk/masterdrycleaners/public/storage/uploads/reviews/th_masterdrycleaner-review-2.png"
          videoUrl="https://www.masterdrycleaner.co.uk/masterdrycleaners/public/storage/uploads/reviews/masterdrycleaner-review-2.mp4"
        />
      </div>)}
      {!isAboveMediumScreens && (<div className="flex items-center justify-center">
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <Video
                thumbnailUrl="https://www.masterdrycleaner.co.uk/masterdrycleaners/public/storage/uploads/reviews/th_masterdrycleaner-review.png"
                videoUrl="https://www.masterdrycleaner.co.uk/masterdrycleaners/public/storage/uploads/reviews/masterdrycleaner-review.mp4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Video
                thumbnailUrl="https://www.masterdrycleaner.co.uk/masterdrycleaners/public/storage/uploads/reviews/th_masterdrycleaner-review-2.png"
                videoUrl="https://www.masterdrycleaner.co.uk/masterdrycleaners/public/storage/uploads/reviews/masterdrycleaner-review-2.mp4"
              />
            </SwiperSlide>
        </Swiper>
      </div>)}
    </div>
  );
};

export default CustomerFeedback;
