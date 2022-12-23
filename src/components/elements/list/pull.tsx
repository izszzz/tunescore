import React from "react";
import PullListItem from "./item/pull";
import Lists from ".";
import type { PullListItemProps } from "./item/pull";
interface PullListProps {
  data: PullListItemProps["data"][];
}
const PullLists = ({ data }: PullListProps) => (
  <Lists data={data} listItem={(props) => <PullListItem data={props} />} />
);
export default PullLists;
