import React from "react";

import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import { useDarkMode } from "usehooks-ts";

import ResourceIcon from "../../icon/resource";
import type { ResourceIconProps } from "../../icon/resource";
import Image from "../../image";

export interface SquareCardProps {
  title: string | React.ReactNode;
  image: string | null | undefined;
  size: string;
  resource: ResourceIconProps["resource"];
  onClick?: () => void;
}
const SquareCard = ({
  title,
  image,
  size,
  resource,
  onClick,
}: SquareCardProps) => {
  const { isDarkMode } = useDarkMode();
  return (
    <Box width={size} onClick={() => onClick && onClick()}>
      <CardActionArea sx={{ borderRadius: "5px" }}>
        {image ? (
          <Image
            width={size}
            alt="image"
            src={image}
            style={{ borderRadius: "5px" }}
          />
        ) : (
          <Box
            width={size}
            height={size}
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor={isDarkMode ? "grey.800" : "grey.300"}
            borderRadius="5px"
          >
            <ResourceIcon
              resource={resource}
              sx={{ fontSize: "60px", color: "grey" }}
            />
          </Box>
        )}
      </CardActionArea>
      {title}
    </Box>
  );
};

export default SquareCard;
