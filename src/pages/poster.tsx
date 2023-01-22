import Head from "next/head";
import React, { useReducer } from "react";
import "swiper/css";
import { Header } from "../../poster/components/Header";
import { NavBar } from "../../poster/NavBar";
import { PosterLayout } from "../../poster/PosterLayout";
import PosterReducer from "../../poster/components/reducer/poster-reducer";

export interface Person {
    firstName: string
    lastName?: string
    profilePictureUrl?: string

}
export interface Poster {
    title: string
    genre: string[]
    rating: number
    trailer: string
    posterImgUrl: string
    description: {
        director: Person
        cast?: Person[]
        synopsis: string
    }
    // seats: 
}

const data: Poster[] = [
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

      <Header />

      <PosterLayout></PosterLayoiut>

      <NavBar></NavBar>
    </>
  );
}
