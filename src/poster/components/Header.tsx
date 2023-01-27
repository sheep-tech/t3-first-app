import { IPoster } from "../types/Poster";

import {
  MagnifyingGlassIcon,
  BellIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import { motion, Variants } from "framer-motion";

const Chip = ({ name }: { name: string }) => {
  return (
    <div className="my-2 mt-1">
      <div className="mr-2 flex items-center justify-center rounded-full border border-white py-1 px-2 font-semibold ">
        <div className="max-w-full flex-initial text-xs ">{name}</div>
      </div>
    </div>
  );
};

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
    <div style={{ height: "20vh" }} className="w-full px-4 pt-16">
      <div className="flex items-center justify-between">
        <motion.div
          key={props.poster.title}
          variants={variants}
          animate={"show"}
          initial="hide"
        >
          <h1 className="text-4xl font-bold">{props.poster.title}</h1>
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

        <Button
          onClick={openTrailer}
          variant="light"
          color="dark"
          radius="xl"
          compact
        >
          Watch Trailer
        </Button>
      </div>
    </div>
  );
};
