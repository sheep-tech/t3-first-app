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
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { PosterDescription } from "../poster/components/PosterDescription";

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
        lastName: "Cameron",
        profilePictureUrl: `https://xsgames.co/randomusers/avatar.php?g=male`,
      },
      synopsis: `Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.
      `,
      cast: [
        {
          firstName: "Sam",
          lastName: "Worthington",
          role: "Jake Sully",
          profilePictureUrl: `https://xsgames.co/randomusers/avatar.php?g=male`,
        },
        {
          firstName: "Zoe",
          lastName: "Saldaña",
          role: "Ney'tiri",
          profilePictureUrl: `https://xsgames.co/randomusers/avatar.php?g=female`,
        },
      ],
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
      synopsis: `Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom.
      `,
    },
  },
];

// @ts-ignore
export const StateContext = React.createContext<{
  state: PosterState;
  dispatch: React.Dispatch<PosterAction>;
}>({});

const variants: Variants = {
  openMovieInfo: { translateY: "-50vh" },
  closeMovieInfo: { translateY: "0vh", transition: { duration: 0.5 } },

  showNavBar: {
    translateY: "0vh",
    // opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
    transitionEnd: {
      display: "block",
    },
  },
  hideNavBar: {
    translateY: "60vh",
    // opacity: 0,
    transition: { duration: 0.2 },
    transitionEnd: {
      display: "none",
    },
  },
};
export default function Poster() {
  const [state, dispatch] = useReducer(PosterReducer, {
    state: "browsing poster",
  });

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <motion.div
        // key={state.state}
        variants={variants}
        animate={
          state.state === "reading movie info"
            ? "openMovieInfo"
            : "closeMovieInfo"
        }
        className="text-white "
      >
        <Head>
          <title>Movie Posters</title>
        </Head>

        <PosterLayout posters={data} />

        <motion.div
          variants={variants}
          animate={
            state.state === "reading movie info" ? "hideNavBar" : "showNavBar"
          }
        >
          <NavBar></NavBar>
        </motion.div>
      </motion.div>
    </StateContext.Provider>
  );
}
