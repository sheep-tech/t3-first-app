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
import type { IPoster, Movie } from "../poster/types/Poster";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { Button } from "@mantine/core";

const recommendedMovies: Movie[] = [
  {
    title: `Indiana Jones and the Last
    Crusade (1989)`,
    posterImgUrl: "https://randommer.io/images/movies/89.webp",
    rating: 4.3,
  },
  {
    title: `The Lord of the Rings`,
    posterImgUrl: "https://randommer.io/images/movies/88.webp",
    rating: 8,
  },
  {
    title: `The Lord of the Rings`,
    posterImgUrl: "https://randommer.io/images/movies/87.webp",
    rating: 8,
  },
  {
    title: `Goldfinger 3`,
    posterImgUrl: "https://randommer.io/images/movies/90.webp",
    rating: 8,
  },
];

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
    reviews: {
      totalReviews: 104000,
      comments: [
        {
          title: `Blockbuster #inspiring`,
          content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, omnis exercitationem? Ut, illo? Natus quas dolor fugit nulla, modi delectus deserunt placeat non saepe tempora aspernatur nam vero omnis ipsum maiores nihil veritatis magni doloremque rerum tempore aut dolorum ut iste dolore! Blanditiis tenetur placeat nobis amet quia. Corporis, omnis cumque dolorum, quia recusandae nesciunt temporibus architecto pariatur nisi sint ipsam soluta. Sed adipisci repellat similique itaque in voluptatibus magnam rerum optio quam perspiciatis earum, molestiae veniam accusamus nulla quae vero deserunt? Esse iusto veritatis officia voluptatem, reprehenderit tempore architecto asperiores fugit deleniti vero? Consequuntur nostrum maxime mollitia suscipit repudiandae.`,
          rating: 8,
          author: {
            firstName: "Danny R.",
          },
        },
        {
          title: `Superdirection #inspiring`,
          content: `Lorem ipsum Natus quas dolor fugit nulla, modi delectus deserunt placeat non saepe tempora aspernatur nam vero omnis ipsum maiores nihil veritatis magni doloremque rerum tempore aut dolorum ut iste dolore! Blanditiis tenetur placeat nobis amet quia. Corporis, omnis cumque dolorum, quia recusandae nesciunt temporibus architecto pariatur nisi sint ipsam soluta. Sed adipisci repellat similique itaque in voluptatibus magnam rerum optio quam perspiciatis earum, molestiae veniam accusamus nulla quae vero deserunt? Esse iusto veritatis officia voluptatem, reprehenderit tempore architecto asperiores fugit deleniti vero? Consequuntur nostrum maxime mollitia suscipit repudiandae.`,
          rating: 9,
          author: {
            firstName: "Rahul S.",
          },
        },
        {
          title: `#Onetimewatch`,
          content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore magnam sit commodi vero amet velit labore necessitatibus sequi iure eaque dolore quasi repellendus modi consequuntur alias excepturi enim ex itaque eligendi, tenetur animi voluptas aliquam rerum. Iste delectus voluptatibus labore autem sequi, vitae ut corrupti ex quidem. Voluptatem, quisquam ut!`,
          rating: 6,
          author: {
            firstName: "Stella A.",
          },
        },
      ],
    },
    recommendedMovies: recommendedMovies,
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
    // reviews: {
    //   totalReviews: 104000,
    //   comments: [
    //     {
    //       title: `Blockbuster #inspiring`,
    //       rating: 8,
    //       author: {
    //         firstName: "Danny R.",
    //       },
    //     },
    //   ],
    // },
    recommendedMovies: recommendedMovies,
  },
];

export const StateContext = React.createContext<any>({
  state: {
    state: "browsing poster",
  },
  dispatch: PosterReducer,
});

const variants: Variants = {
  openMovieInfo: { translateY: "-50vh" },

  closeMovieInfo: { translateY: "0vh", transition: { duration: 0.5 } },

  showCinema: { transform: "rotate3d(1, 0, 0, 65deg)" },

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

  function getAnimationState() {
    if (state.state === "choosing seat") {
      return "showCinema";
    } else if (state.state === "browsing poster") {
      return "closeMovieInfo";
    } else return "openMovieInfo";
  }

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <motion.div
        // key={state.state}
        variants={variants}
        animate={getAnimationState()}
        className=""
      >
        <Head>
          <title>Movie Posters</title>
        </Head>

        <PosterLayout posters={data} />

        <motion.div
          variants={variants}
          animate={
            state.state !== "browsing poster" ? "hideNavBar" : "showNavBar"
          }
        >
          <NavBar></NavBar>
        </motion.div>
      </motion.div>
    </StateContext.Provider>
  );
}
