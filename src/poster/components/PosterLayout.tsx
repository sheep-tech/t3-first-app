import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IPoster } from "../types/Poster";
import { Header } from "./Header";
import { PosterElement } from "./PosterElement";

interface PosterLayoutProps {
  posters: IPoster[];
}
export const PosterLayout = (props: PosterLayoutProps) => {
const [swiperIndex, setSwiperIndex] = useState(0)
  return (
    <div>
            <Header poster={props.posters[swiperIndex]!} />

      <Swiper
        style={{height: '70vh'}}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => setSwiperIndex(swiper.activeIndex)}
        pagination={false}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {props.posters.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <PosterElement poster={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
