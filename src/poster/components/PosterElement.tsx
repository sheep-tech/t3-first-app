import Image from "next/image";
import { IPoster } from "../types/Poster";
import image from "/public/avatar-poster.jpeg"
interface PosterElementProps {
  poster: IPoster;
}
export const PosterElement = (props: PosterElementProps) => {
  return (
    <div>{props.poster.rating}
      <img src={props.poster.posterImgUrl}  alt="img" />
    </div>
  )
}
