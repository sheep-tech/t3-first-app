import { Carousel } from "@mantine/carousel";
import { Movie } from "../types/Poster";
import { Image } from "@mantine/core";
import { StarIcon } from "@heroicons/react/24/solid";

interface Props {
  movies: Movie[];
}
export const RecommendedMovies = (props: Props) => {
  return (
    <>
      <h3 className="mb-4 text-base font-bold">Recommended Movies</h3>

      <Carousel
        slideSize="70%"
        align="start"
        slideGap="md"
        dragFree
        loop
        withControls={false}
      >
        {props.movies.map((movie, index) => {
          return (
            <Carousel.Slide key={index} className="max-w-[10rem] ">
              <Image radius="md" src={movie.posterImgUrl} />
              <span className="mt-2 mb-2 flex items-center text-base">
                <StarIcon
                  strokeWidth={1.5}
                  className="mr-1 h-5 w-5"
                  fill="#ecc300"
                ></StarIcon>
                <p className="font-normal font-bold">{`${movie.rating}/10`}</p>
              </span>

              <p className="text-sm">{movie.title}</p>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </>
  );
};
