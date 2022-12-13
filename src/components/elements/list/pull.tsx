import React from "react";
import Lists from ".";
import PullListItem, { PullListItemProps } from "./item/pull";
interface PullListProps {
  data: PullListItemProps["data"][];
}
const PullLists = ({ data }: PullListProps) => (
  <Lists data={data} listItem={(props) => <PullListItem data={props} />} />
);
export default PullLists;
