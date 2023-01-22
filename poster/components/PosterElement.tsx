import { IPoster } from "../types/Poster";

interface PosterElementProps {
  poster: IPoster;
}
export const PosterElement = (props: PosterElementProps) => {
  return (
    <div>{props.poster.rating}</div>
  )
}
