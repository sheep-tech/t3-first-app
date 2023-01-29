interface ChipProps {
  name: string;
}

export const Chip = (props: ChipProps) => {
  return (
    <div className="my-2 mt-1">
      <div className="mr-2 flex items-center justify-center rounded-full border border-white py-1 px-2 font-semibold ">
        <div className="max-w-full flex-initial text-xs ">{props.name}</div>
      </div>
    </div>
  );
};
