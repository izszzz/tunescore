import React from "react";

import AlbumListItem from "./item/album";
import type { AlbumListItemProps } from "./item/album";

import Lists from ".";
interface AlbumListProps {
  data: AlbumListItemProps["data"][];
}
const AlbumLists = ({ data }: AlbumListProps) => (
  <Lists data={data} listItem={(props) => <AlbumListItem data={props} />} />
);

export default AlbumLists;
