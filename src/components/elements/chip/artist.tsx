import React from "react";

import IndexChip from ".";
import type { IndexChipProps } from ".";

const ArtistChip = (props: Omit<IndexChipProps, "resource">) => (
  <IndexChip {...props} resource="ARTIST" />
);

export default ArtistChip;
