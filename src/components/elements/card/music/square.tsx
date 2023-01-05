import React from "react";
import SquareCard from "../square";
import type { SquareCardProps } from "../square";

const SquareMusicCard = (props: Omit<SquareCardProps, "resource">) => (
  <SquareCard {...props} resource="MUSIC" />
);

export default SquareMusicCard;
