import { FilmIcon, TicketIcon, UserIcon } from "@heroicons/react/24/outline";

export const NavBar = () => {
  return (
    <div
      className="mx-auto mt-4 flex w-11/12 justify-between rounded-t-[4rem] bg-[#403b59] py-6 px-12"
      style={{ height: "calc(10vh - 1em)" }}
    >
      <FilmIcon className=" h-6 w-6" />
      <TicketIcon className=" h-6 w-6" />
      <UserIcon className=" h-6 w-6" />
    </div>
  );
};
