import React from "react";
import ParticipationListItem from "./item/participation";
import Lists from ".";
import type { Prisma } from "@prisma/client";
import type {
  ParticipatedArtistArgs,
  ParticipatedMusicArgs,
} from "../../../helpers/participation";
import type { ParticipationListItemProps } from "./item/participation";
interface ParticipationListProps<
  T extends Prisma.ParticipationGetPayload<
    ParticipatedMusicArgs | ParticipatedArtistArgs
  >
> {
  data: ParticipationListItemProps<T>["data"][];
  children: ParticipationListItemProps<T>["children"];
}
function ParticipationLists<
  T extends Prisma.ParticipationGetPayload<
    ParticipatedMusicArgs | ParticipatedArtistArgs
  >
>({ data, children }: ParticipationListProps<T>) {
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
