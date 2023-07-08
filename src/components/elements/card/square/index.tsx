import React from "react";

import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import Fade from "@mui/material/Fade";
import Link from "next/link";
import type { Route } from "nextjs-routes";
import { useDarkMode } from "usehooks-ts";

import Image from "../../image";

export interface SquareCardProps {
  title: string | React.ReactNode;
  image: string | null | undefined;
  icon: React.ReactNode;
  href?: Route;
  onClick?: () => void;
}
const SquareCard = ({ title, image, icon, href, onClick }: SquareCardProps) => {
  const { isDarkMode } = useDarkMode();
  return (
    <Box flex={1} minWidth={0}>
      <CardActionArea
        color="inherit"
        onClick={() => onClick?.()}
        sx={{ borderRadius: "5px" }}
      >
        <Link href={href ?? "/"}>
          <Fade in={true}>
            <Box
              alignItems="center"
              bgcolor={isDarkMode ? "grey.800" : "grey.300"}
              borderRadius="5px"
              display="flex"
              height="100%"
              justifyContent="center"
              sx={{ aspectRatio: "1/1" }}
            >
              {image ? (
                <Image
                  alt="image"
                  src={image}
                  style={{ borderRadius: "5px" }}
                  width="100%"
                />
              ) : (
                icon
              )}
            </Box>
          </Fade>
        </Link>
      </CardActionArea>
      <Box>{title}</Box>
    </Box>
  );
};

export default SquareCard;
