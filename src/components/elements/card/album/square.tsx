import React from "react";
import SquareCard from "../square";
import type { SquareCardProps } from "../square";

const SquareAlbumCard = (props: Omit<SquareCardProps, "resource">) => (
  <SquareCard {...props} resource="ALBUM" />
);

export default SquareAlbumCard;
