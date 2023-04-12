import React from "react";

import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import type { Route } from "nextjs-routes";
import { useDarkMode } from "usehooks-ts";

import Image from "../../image";
import { NextLinkComposed } from "../../link";

export interface SquareCardProps {
  title: string | React.ReactNode;
  image: string | null | undefined;
  size: string;
  icon: React.ReactNode;
  to?: Route;
  onClick?: () => void;
}
const SquareCard = ({
  title,
  image,
  size,
  icon,
  onClick,
  ...props
}: SquareCardProps) => {
  const { isDarkMode } = useDarkMode();
  return (
    <Box
      color="inherit"
      component={NextLinkComposed}
      onClick={() => onClick?.()}
      sx={{ textDecoration: "none" }}
      width={size}
      {...props}
    >
      <CardActionArea sx={{ width: size, height: size, borderRadius: "5px" }}>
        {image ? (
          <>
            <Image
              alt="image"
              src={image}
              style={{ borderRadius: "5px" }}
              width={size}
            />
          </>
        ) : (
          <Box
            alignItems="center"
            bgcolor={isDarkMode ? "grey.800" : "grey.300"}
            borderRadius="5px"
            display="flex"
            height={size}
            justifyContent="center"
            width={size}
          >
            {icon}
          </Box>
        )}
      </CardActionArea>
      {title}
    </Box>
  );
};

export default SquareCard;
