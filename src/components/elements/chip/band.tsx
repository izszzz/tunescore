import React from "react";
import Chip, { ChipProps } from "@mui/material/Chip";
import ResourceIcon from "../icon/resource";

const BandChip = (props: ChipProps) => {
  return <Chip {...props} icon={<ResourceIcon resource="band" />} />;
};

export default BandChip;
