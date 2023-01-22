
interface PosterElementProps {
  movie: string
}
export const PosterElement = (props: PosterElementProps) => {
  return (
    <div>{props.movie}</div>
  )
}
