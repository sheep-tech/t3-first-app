import { StateContext } from "../../pages/poster";
import { IPoster } from "../types/Poster";
import { useContext, useState } from "react";

interface PosterElementProps {
  poster: IPoster;
}
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
    <div>
      {context.state.state}
      {/* @next/next/no-img-element */}
      <img
        onClick={toggleMovieDescription}
        className="scale-110 rounded-[5rem] p-4"
        src={props.poster.posterImgUrl}
        alt="img"
      />
    </div>
  );
};
