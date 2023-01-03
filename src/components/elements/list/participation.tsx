import React from "react";
import Lists from ".";
import ParticipationListItem, {
  ParticipatedArtist,
  ParticipatedMusic,
  ParticipationListItemProps,
} from "./item/participation";
interface ParticipationListProps<
  T extends ParticipatedArtist | ParticipatedMusic
> {
  data: ParticipationListItemProps<T>["data"][];
  children: ParticipationListItemProps<T>["children"];
}
function ParticipationLists<T extends ParticipatedMusic | ParticipatedArtist>({
  data,
  children,
}: ParticipationListProps<T>) {
  return (
    <Lists
      data={data}
      listItem={(props) => (
        <ParticipationListItem data={props}>
          {(data) => children(data)}
        </ParticipationListItem>
      )}
    />
  );
}
export default ParticipationLists;
