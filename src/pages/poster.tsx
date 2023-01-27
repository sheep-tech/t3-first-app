import Head from "next/head";
import React, { useReducer } from "react";
import "swiper/css";
import { NavBar } from "../poster/components/NavBar";
import { PosterLayout } from "../poster/components/PosterLayout";
import type {
  PosterAction,
  PosterState,
} from "../poster/reducer/poster-reducer";
import PosterReducer from "../poster/reducer/poster-reducer";
import type { IPoster } from "../poster/types/Poster";
import { motion } from "framer-motion";

const data: IPoster[] = [
  {
    title: "Avatar",
    genre: ["Sci-Fi", "Action"],
    rating: 8,
    posterImgUrl: `/static/avatar-poster.jpg`,
    trailer: `https://www.youtube.com/watch?v=o5F8MOz_IDw`,
    description: {
      director: {
        firstName: "James",
      },
      synopsis: `Avatar...`,
    },
  },
  {
    title: "Black Panther",
    genre: ["Sci-Fi", "Action", "Marvel"],
    rating: 8,
    posterImgUrl: `/static/black-panther-poster.jpg`,
    trailer: `https://www.youtube.com/watch?v=o5F8MOz_IDw`,
    description: {
      director: {
        firstName: "James",
      },
      synopsis: `Avatar...`,
    },
  },
];

// @ts-ignore
export const StateContext = React.createContext<{
  state: PosterState;
  dispatch: React.Dispatch<PosterAction>;
}>({});

export default function Poster() {
  const [state, dispatch] = useReducer(PosterReducer, {
    state: "browsing poster",
  });

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <motion.div
        key={state.state}
        animate={{ translateY: "-50vh" }}
        className="text-white "
      >
        <Head>
          <title>Movie Posters</title>
        </Head>

        <div>
          <PosterLayout posters={data} />
        </div>

        <NavBar></NavBar>
      </motion.div>
    </StateContext.Provider>
  );
}
