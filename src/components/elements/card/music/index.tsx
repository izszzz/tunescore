import React from "react";
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import { useDarkMode } from "usehooks-ts";
import ResourceIcon from "../../icon/resource";

export interface MusicCardProps {
  title: string | React.ReactNode;
  image: string | null | undefined;
  size: string;
  onClick?: () => void;
}
const MusicCard = ({ title, image, size, onClick }: MusicCardProps) => {
  const { isDarkMode } = useDarkMode();
  return (
    <Box width={size} onClick={() => onClick && onClick()}>
      <CardActionArea sx={{ borderRadius: "5px" }}>
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
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
              resource="MUSIC"
              sx={{ fontSize: "60px", color: "grey" }}
            />
          </Box>
        )}
      </CardActionArea>
      {title}
    </Box>
  );
};

export default MusicCard;
