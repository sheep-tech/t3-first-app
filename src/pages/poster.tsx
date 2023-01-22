import Head from "next/head";
import React, { useReducer } from "react";
import "swiper/css";
import { NavBar } from "../../poster/components/NavBar";
import { PosterLayout } from "../../poster/components/PosterLayout";
import PosterReducer from "../../poster/reducer/poster-reducer";
import { IPoster } from "../../poster/types/Poster";



const data: IPoster[] = [
    {
        title: 'Avatar',
        genre: ['Sci-Fi', 'Action'],
        rating:4,
        posterImgUrl: `public/avatar-poster.avif`,
        trailer: `https://www.youtube.com/watch?v=o5F8MOz_IDw`,
        description: {
            director: {
                firstName: 'James'
            },
            synopsis: `Avatar...`
        }   
    },
    {
        title: 'Avatar',
        genre: ['Sci-Fi', 'Action'],
        rating:4,
        posterImgUrl: `public/avatar-poster.avif`,
        trailer: `https://www.youtube.com/watch?v=o5F8MOz_IDw`,
        description: {
            director: {
                firstName: 'James'
            },
            synopsis: `Avatar...`
        }
    }
]

export default function Poster() {
  const [state, dispatch] = useReducer(PosterReducer, {
    state: "browsing poster",
  });

  return (
    <>
      <Head>
        <title>Movie Posters</title>
      </Head>


      <PosterLayout posters={data} />

      <NavBar></NavBar>
    </>
  );
}
