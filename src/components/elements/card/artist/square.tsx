import React from "react";
import SquareCard from "../square";
import type { SquareCardProps } from "../square";

const SquareArtistCard = (props: Omit<SquareCardProps, "resource">) => (
  <SquareCard {...props} resource="ARTIST" />
);

export default SquareArtistCard;
