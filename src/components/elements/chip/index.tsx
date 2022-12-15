import React from "react";
import Chip, { ChipProps } from "@mui/material/Chip";
import ResourceIcon, { ResourceIconProps } from "../icon/resource";

export interface IndexChipProps extends Omit<ChipProps, "icon"> {
  resource: ResourceIconProps["resource"];
}

const IndexChip = ({ resource, ...props }: IndexChipProps) => (
  <Chip {...props} icon={<ResourceIcon resource={resource} />} />
);

export default IndexChip;
