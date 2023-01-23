import { IPoster } from "../types/Poster";

interface PosterElementProps {
  poster: IPoster;
}
export const PosterElement = (props: PosterElementProps) => {
  return (
    <div>{props.poster.rating}
      <img className="p-4 rounded-[5rem]" src={props.poster.posterImgUrl}  alt="img" />
    </div>
  )
}
