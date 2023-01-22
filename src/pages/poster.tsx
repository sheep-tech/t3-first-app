import Head from "next/head";
import React, { useReducer } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Header } from "../../components/poster/Header";
import { PosterElement } from "../../components/poster/PosterElement";
import { NavBar } from "../../components/poster/NavBar";
import PosterReducer from "../../reducer/poster-reducer";

export default function Poster() {
  const [state, dispatch] = useReducer(PosterReducer, {
    state: "browsing poster",
  });

  return (
    <>
      <Head>
        <title>Movie Posters</title>
      </Head>

      <Header />

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        pagination={false}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <PosterElement />
        </SwiperSlide>
        <SwiperSlide>
          <PosterElement />
        </SwiperSlide>
        <SwiperSlide>
          <PosterElement />
        </SwiperSlide>
        <SwiperSlide>
          <PosterElement />
        </SwiperSlide>
      </Swiper>

      <NavBar></NavBar>
    </>
  );
}
