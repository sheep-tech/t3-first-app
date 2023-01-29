import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/solid";
import { StarIcon, Button, Divider } from "@mantine/core";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import type { IPoster } from "../types/Poster";
import { People } from "./People";
import { Chip } from "./Chip";
import { Review } from "./Review";
import { RecommendedMovies } from "./RecommendedMovies";
import { useContext } from "react";
import { StateContext } from "../../pages/poster";

interface PosterDescriptionProps {
  poster: IPoster;
}
const variants: Variants = {
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  hide: {
    opacity: 0,
  },
};
export const PosterDescription = (props: PosterDescriptionProps) => {
  const { dispatch } = useContext(StateContext);

  const chooseSeats = () => {
    dispatch({ type: "set poster flow state", payload: "choosing seat" });
  };

  return (
    <div className="relative px-4">
      <div className="flex items-center justify-between">
        {/* title */}
        <motion.div
          key={props.poster.title}
          variants={variants}
          animate={"show"}
          initial="hide"
        >
          <h1 className="text-4xl font-bold">{props.poster.title}</h1>
        </motion.div>
      </div>
      {/* chips */}
      <div className="flex flex-wrap justify-start">
        {props.poster.genre.map((item) => {
          return (
            <motion.div
              key={item}
              variants={variants}
              animate={"show"}
              initial="hide"
            >
              <Chip name={item} />{" "}
            </motion.div>
          );
        })}
      </div>
      <div className="my-2 flex flex-wrap justify-between">
        {/* rating */}
        <span className="flex items-center text-sm">
          <StarIcon
            strokeWidth={1.5}
            className="mr-1 h-5 w-5"
            fill="#ecc300"
          ></StarIcon>
          <p className="underline decoration-2 underline-offset-2">
            <strong>{`${props.poster.rating}/10`}</strong>
            {` 58k votes`}
          </p>
        </span>
      </div>
      <Divider className="my-8" size="sm" />
      <h3 className="text-base font-bold">About the movie</h3>
      <div className="mb-6">
        <p className="text-sm">{props.poster.description.synopsis}</p>
      </div>
      {props.poster.description.cast && (
        <People people={props.poster.description.cast} header={"Cast"} />
      )}
      <People people={[props.poster.description.director]} header={"Crew"} />
      <Divider className="my-8" size="sm" />
      {props.poster.reviews && (
        <>
          <Review reviews={props.poster.reviews} />
          <Divider className="my-10 " size="sm" />
        </>
      )}

      <div className="mb-6">
        {props.poster.recommendedMovies && (
          <RecommendedMovies movies={props.poster.recommendedMovies} />
        )}
      </div>

      <div className="sticky bottom-[-47vh] z-10 mx-auto w-fit">
        <Button
          onClick={chooseSeats}
          size="lg"
          variant="filled"
          className=" bg-[#ecc300] px-16 font-normal text-black hover:bg-[#ecc300]"
          radius="md"
        >
          Select seats
        </Button>
      </div>
    </div>
  );
};
