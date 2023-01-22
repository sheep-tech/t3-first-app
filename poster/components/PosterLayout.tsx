import { Swiper, SwiperSlide } from "swiper/react";
import { PosterElement } from "./PosterElement";

interface PosterLayoutProps {
  movies: string[];
}
export const PosterLayout = (props: PosterLayoutProps) => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        pagination={false}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {props.movies.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <PosterElement movie={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
