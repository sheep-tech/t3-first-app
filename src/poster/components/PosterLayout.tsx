import { Button } from "@mantine/core";
import { motion, Variants } from "framer-motion";
import { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { StateContext } from "../../pages/poster";
import { IPoster } from "../types/Poster";
import { Header } from "./Header";
import { PosterDescription } from "./PosterDescription";
import { PosterElement } from "./PosterElement";

interface PosterLayoutProps {
  posters: IPoster[];
}
const variants: Variants = {
  show: {
    opacity: 1,
    transitionEnd: {
      display: "block",
    },
  },
  hide: {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  },
};
export const PosterLayout = (props: PosterLayoutProps) => {
  const { state } = useContext(StateContext);

  const [swiperIndex, setSwiperIndex] = useState(0);

  const isReadingMovieInfo = () => {
    if (state.state === "reading movie info") {
      return true;
    } else {
      return false;
    }
  };
  const isChoosingSeats = () => {
    if (state.state === "choosing seat") {
      return true;
    } else {
      return false;
    }
  };

  // const css = `
  //   .bg {
  //     background-image: url("./../../..${
  //       props.posters[swiperIndex]!.posterImgUrl
  //     }");
  //     background-size:     cover;
  //     background-repeat:   no-repeat;
  //     background-position: center center;
  //     filter: blur(10px);

  //   }
  // `;
  return (
    <>
      {/* <style>{css}</style> */}

      <div className=" absolute top-0 -z-10 h-full w-full"></div>

      <motion.div
        variants={variants}
        animate={!isReadingMovieInfo() ? "show" : "hide"}
        className="mt-4"
      >
        <Header poster={props.posters[swiperIndex]!} />
      </motion.div>
      <Swiper
        className="sticky top-0"
        style={{ height: "70vh" }}
        spaceBetween={50}
        draggable
        slidesPerView={1}
        onSlideChange={(swiper) => setSwiperIndex(swiper.activeIndex)}
        pagination={false}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {props.posters.map((item, index) => {
          return (
            <>
              <SwiperSlide key={index}>
                <PosterElement poster={item} />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>

      <motion.div
        variants={variants}
        animate={isReadingMovieInfo() ? "show" : "hide"}
        className="mt-4"
      >
        <PosterDescription poster={props.posters[swiperIndex]!} />
      </motion.div>
    </>
  );
};
