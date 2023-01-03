import React from "react";
import IndexChip from "./";
import type { IndexChipProps } from "./";

const BandChip = (props: Omit<IndexChipProps, "resource">) => (
  <IndexChip {...props} resource="USER" />
);

export default BandChip;
