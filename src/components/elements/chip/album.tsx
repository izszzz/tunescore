import React from "react";

import IndexChip from ".";
import type { IndexChipProps } from ".";

const AlbumChip = (props: Omit<IndexChipProps, "resource">) => (
  <IndexChip {...props} resource="ALBUM" />
);

export default AlbumChip;
