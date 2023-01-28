import { Avatar } from "@mantine/core";
import { Person } from "../types/Poster";

interface PeopleProps {
  header: string;
  people: Person[];
}
export const People = (props: PeopleProps) => {
  return (
    <>
      <h2 className="text-lg font-bold">{props.header}</h2>
      <div className="my-4 flex gap-4">
        {props.people &&
          props.people.map((person) => {
            return (
              <div className="text-center" key={person.lastName}>
                <Avatar
                  className="mx-auto my-auto mb-2"
                  src={person.profilePictureUrl}
                  radius={"xl"}
                  size={"lg"}
                  alt={`${person.firstName} ${person.lastName}`}
                />
                <p className="text-xs" key={person.lastName}>
                  {`${person.firstName} ${person.lastName}`} <br />
                  {person.role && (
                    <span>
                      as <strong>{`${person.role}`}</strong>
                    </span>
                  )}
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
};
