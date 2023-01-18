import React from "react";

import IndexChip from ".";
import type { IndexChipProps } from ".";

const MusicChip = (props: Omit<IndexChipProps, "resource">) => (
  <IndexChip {...props} resource="MUSIC" />
);

export default MusicChip;
