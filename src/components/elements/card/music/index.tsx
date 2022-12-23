import React from "react";
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import ResourceIcon from "../../icon/resource";

export interface MusicCardProps {
  title: string | React.ReactNode;
  image: string | null | undefined;
  size: string;
  onClick?: () => void;
}
const MusicCard = ({ title, image, size, onClick }: MusicCardProps) => (
  <Box width={size} onClick={() => onClick && onClick()}>
    <CardActionArea>
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img width={size} height={size} alt="image" src={image} />
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
