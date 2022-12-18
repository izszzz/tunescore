import React from "react";
import Lists from "./";
import AlbumListItem, { AlbumListItemProps } from "./item/album";
interface AlbumListProps {
  data: AlbumListItemProps["data"][];
}
const AlbumLists = ({ data }: AlbumListProps) => (
  <Lists data={data} listItem={(props) => <AlbumListItem data={props} />} />
);

export default AlbumLists;
