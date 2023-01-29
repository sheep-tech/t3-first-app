import { StarIcon } from "@heroicons/react/24/solid";
import { Carousel } from "@mantine/carousel";
import type { IReview } from "../types/Poster";
interface ReviewProp {
  reviews: IReview;
}

const css = `
.clip {
  overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
`;
export const Review = (props: ReviewProp) => {
  return (
    <>
      <style>{css}</style>
      <div className="mb-4 flex items-baseline justify-between">
        <h3 className="text-base font-bold">Reviews</h3>

        <p className="text-xs font-light underline underline-offset-2">{`${Math.round(
          props.reviews.totalReviews / 100
        )}K reviews`}</p>
      </div>

      <Carousel
        slideSize="70%"
        align="start"
        slideGap="md"
        dragFree
        withControls={false}
      >
        {props.reviews.comments.map((comment, index) => {
          return (
            <Carousel.Slide
              key={index}
              className="mx-4 rounded-md  border bg-white bg-opacity-20 p-4 shadow-md backdrop-blur-sm backdrop-filter
            "
            >
              <div
                className=" "
                // style={{ backdropFilter: "blur(20px)" }}
              >
                <h3 className="mb-2 text-sm font-bold">{comment.title}</h3>

                <p className="clip mb-2 text-sm">{comment.content}</p>
                <div className="flex justify-between">
                  <span className="text-sm">
                    {`By `}
                    <strong className="underline">
                      {comment.author.firstName}
                    </strong>
                  </span>

                  <span className="flex items-center text-sm">
                    <StarIcon
                      strokeWidth={1.5}
                      className="mr-1 h-5 w-5"
                      fill="#ecc300"
                    ></StarIcon>
                    <p className="font-normal">{`${comment.rating}/10`}</p>
                  </span>
                </div>
              </div>
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </>
  );
};
