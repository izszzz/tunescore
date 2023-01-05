import React from "react";
import ParticipationListItem from "./item/participation";
import Lists from ".";
import type {
  ParticipatedArtist,
  ParticipatedMusic,
} from "../../../helpers/participation";
import type { ParticipationListItemProps } from "./item/participation";
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
        <ParticipationListItem data={props}>{children}</ParticipationListItem>
      )}
    />
  );
}
export default ParticipationLists;
