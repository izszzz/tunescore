import React from "react";

import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import { useDarkMode } from "usehooks-ts";

import Image from "../../image";

export interface SquareCardProps {
  title: string | React.ReactNode;
  image: string | null | undefined;
  size: string;
  icon: React.ReactNode;
  onClick?: () => void;
}
const SquareCard = ({ title, image, size, icon, onClick }: SquareCardProps) => {
  const { isDarkMode } = useDarkMode();
  return (
    <Box onClick={onClick} width={size}>
      <CardActionArea sx={{ height: size, borderRadius: "5px" }}>
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
