import React from "react";

import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import Fade from "@mui/material/Fade";
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
      width="100%"
      {...props}
    >
      <CardActionArea
        sx={{ borderRadius: "5px", height: "inherit", width: "inherit" }}
      >
        <Fade in={true}>
          <Box
            alignItems="center"
            bgcolor={isDarkMode ? "grey.800" : "grey.300"}
            borderRadius="5px"
            display="flex"
            height="100%"
            justifyContent="center"
            sx={{ aspectRatio: "1 / 1" }}
          >
            {image ? (
              <Image
                alt="image"
                src={image}
                style={{
                  transition: "opacity 0.1s",
                  opacity: 1,
                  borderRadius: "5px",
                }}
                width="100%"
              />
            ) : (
              icon
            )}
          </Box>
        </Fade>
      </CardActionArea>
      {title}
    </Box>
  );
};

export default SquareCard;
