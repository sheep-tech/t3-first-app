import { IPoster } from "../types/Poster";
import { BeakerIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

interface HeaderProps {
  poster: IPoster;
}
export const Header = (props: HeaderProps) => {
  return (
    <div style={{height: '20vh'}} className="w-full">
      <div className="flex justify-end">
        <h1>{props.poster.title}</h1>
        <span>
          ss
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg> */}

          <MagnifyingGlassIcon strokeWidth={1.5} className="w-6 h-6"></MagnifyingGlassIcon>
        </span>
      </div>

    </div>
  )
}
