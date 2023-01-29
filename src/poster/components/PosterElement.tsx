import { StateContext } from "../../pages/poster";
import { IPoster } from "../types/Poster";
import { useContext, useState } from "react";
import { motion, Variants } from "framer-motion";

interface PosterElementProps {
  poster: IPoster;
}
const variants: Variants = {
  zoom: {
    transform: "scale(1.1)",
    // transitionEnd: {
    //   "--tw-translate-y": "28vh",
    // },
  },
  reset: { transform: "scale(1)" },
};
export const PosterElement = (props: PosterElementProps) => {
  const context = useContext(StateContext);

  const [openMovieDescription, setOpenMovieDescription] = useState(false);

  const toggleMovieDescription = () => {
    if (!openMovieDescription) {
      context.dispatch({
        type: "set poster flow state",
        payload: "reading movie info",
      });
    } else {
      context.dispatch({
        type: "set poster flow state",
        payload: "browsing poster",
      });
    }
    setOpenMovieDescription((state) => {
      return !state;
    });
  };
  return (
    <motion.div
      variants={variants}
      animate={openMovieDescription ? "zoom" : "reset"}
      className="my-4 overflow-hidden rounded-[5rem] px-4"
    >
      <div className="rounded-[5rem]">
        {/* @next/next/no-img-element */}
        <img
          style={{ height: "70vh" }}
          onClick={toggleMovieDescription}
          className="h-full scale-100 rounded-[5rem] object-cover object-top"
          src={props.poster.posterImgUrl}
          alt="img"
        />
      </div>
    </motion.div>
  );
};
