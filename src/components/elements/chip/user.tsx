import React from "react";
import IndexChip, { IndexChipProps } from "./";

const BandChip = (props: Omit<IndexChipProps, "resource">) => (
  <IndexChip {...props} resource="user" />
);

export default BandChip;
