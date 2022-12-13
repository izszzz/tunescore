import React from "react";
import Lists from "./";
import ArtistListItem, { ArtistListItemProps } from "./item/artist";
interface ArtistListProps {
  data: ArtistListItemProps["data"][];
}
const ArtistLists = ({ data }: ArtistListProps) => (
  <Lists data={data} listItem={(props) => <ArtistListItem data={props} />} />
);

export default ArtistLists;
