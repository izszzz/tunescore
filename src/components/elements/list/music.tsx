import React from "react";
import MusicListItem, { MusicListItemProps } from "./item/music";
import Lists from ".";
interface MusicListProps {
  data: MusicListItemProps["data"][];
}
const MusicLists = ({ data }: MusicListProps) => (
  <Lists data={data} listItem={(props) => <MusicListItem data={props} />} />
);
export default MusicLists;
