import React from "react";
import ArtistListItem from "./item/artist";
import Lists from ".";
import type { ArtistListItemProps } from "./item/artist";
interface ArtistListProps {
  data: ArtistListItemProps["data"][];
}
const ArtistLists = ({ data }: ArtistListProps) => (
  <Lists data={data} listItem={(props) => <ArtistListItem data={props} />} />
);

export default ArtistLists;
