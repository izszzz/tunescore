import React from "react";
import IndexChip, { IndexChipProps } from ".";

const MusicChip = (props: Omit<IndexChipProps, "resource">) => (
  <IndexChip {...props} resource="MUSIC" />
);

export default MusicChip;
