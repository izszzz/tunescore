import React from "react";
import BandListItem from "./item/band";
import Lists from ".";
import type { BandListItemProps } from "./item/band";
interface BandListProps {
  data: BandListItemProps["data"][];
}
const BandLists = ({ data }: BandListProps) => (
  <Lists data={data} listItem={(props) => <BandListItem data={props} />} />
);

export default BandLists;
