import { IPoster } from "../types/Poster";

import {
  MagnifyingGlassIcon,
  BellIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import { motion, Variants } from "framer-motion";
import { Chip } from "./Chip";
import { PlayCircleIcon, PlayIcon } from "@heroicons/react/24/outline";

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
interface HeaderProps {
  poster: IPoster;
}

export const Header = (props: HeaderProps) => {
  const openTrailer = () => {
    window.open(props.poster.trailer, "_blank");
  };
  return (
    <div style={{ height: "20vh" }} className="w-full px-4 pt-16  ">
      <div className="flex items-center justify-between">
        <motion.div
          key={props.poster.title}
          variants={variants}
          animate={"show"}
          initial="hide"
        >
          <h1 className="max-w-[18rem] truncate text-4xl font-bold">
            {props.poster.title}
          </h1>
        </motion.div>

        <div className="flex">
          <MagnifyingGlassIcon
            strokeWidth={1.5}
            className="mr-4 h-6 w-6"
          ></MagnifyingGlassIcon>
          <BellIcon className="h-6 w-6"></BellIcon>
        </div>
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

        <Button onClick={openTrailer} variant="filled" radius="xl" compact>
          <PlayCircleIcon className="mr-1 h-6 w-6"></PlayCircleIcon>
          Watch Trailer
        </Button>
      </div>
    </div>
  );
};
