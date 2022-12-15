import React from "react";
import IndexChip, { IndexChipProps } from "./";

const ArtistChip = (props: Omit<IndexChipProps, "resource">) => (
  <IndexChip {...props} resource="artist" />
);

export default ArtistChip;
