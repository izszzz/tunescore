import React from "react";
import CardMedia from "@mui/material/CardMedia";
import ResourceIcon from "../../icon/resource";
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";

export interface MusicCardProps {
  title: string | React.ReactNode;
  image: string | null;
  size: string;
  onClick?: () => void;
}
const MusicCard = ({ title, image, size, onClick }: MusicCardProps) => (
  <Box width={size} onClick={() => onClick && onClick()}>
    <CardActionArea>
      {image ? (
        <CardMedia component="img" height="auto" width="100%" image={image} />
      ) : (
        <Box
          borderRadius="medium"
          width={size}
          height={size}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="grey.300"
        >
          <ResourceIcon
            resource="music"
            sx={{ fontSize: "60px", color: "grey" }}
          />
        </Box>
      )}
    </CardActionArea>
    {title}
  </Box>
);

export default MusicCard;
