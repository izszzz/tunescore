import React from "react";
import Lists from "./";
import BandListItem, { BandListItemProps } from "./item/band";
interface BandListProps {
  data: BandListItemProps["data"][];
}
const BandLists = ({ data }: BandListProps) => (
  <Lists data={data} listItem={(props) => <BandListItem data={props} />} />
);

export default BandLists;
