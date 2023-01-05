import React from "react";
import SquareCard from "../square";
import type { SquareCardProps } from "../square";

const SquareBandCard = (props: Omit<SquareCardProps, "resource">) => (
  <SquareCard {...props} resource="BAND" />
);

export default SquareBandCard;
