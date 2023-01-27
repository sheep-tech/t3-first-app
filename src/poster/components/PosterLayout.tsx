import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IPoster } from "../types/Poster";
import { Header } from "./Header";
import { PosterElement } from "./PosterElement";

interface PosterLayoutProps {
  posters: IPoster[];
}
export const PosterLayout = (props: PosterLayoutProps) => {
  const [swiperIndex, setSwiperIndex] = useState(0);

  const css = `
    .bg {
      background-image: url("./../../..${
        props.posters[swiperIndex]!.posterImgUrl
      }");
      background-size:     cover;                      
      background-repeat:   no-repeat;
      background-position: center center;         
      filter: blur(10px);
  
    }
  `;
  return (
    <>
      {/* <style>{css}</style> */}

      <div className="duration-300 ease-in-out">
        <div className=" absolute top-0 -z-10 h-full w-full"></div>
        <Header poster={props.posters[swiperIndex]!} />

        <Swiper
          style={{ height: "70vh" }}
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
    </>
  );
};
