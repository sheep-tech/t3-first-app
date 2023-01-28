import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/solid";
import { StarIcon, Button, Divider } from "@mantine/core";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import type { IPoster } from "../types/Poster";
import { People } from "./People";
import { Chip } from "./Chip";

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
  return (
    <div className="px-4">
      ciaos
      {props.poster.title}
      {/* <div>{props.poster.description}</div> */}
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
    </div>
  );
};
