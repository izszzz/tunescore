import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import CloseIconButton from "../../button/icon/close";
import SquareCard from "../square";

interface SpotifyAlbumCardProps {
  data: SpotifyApi.AlbumObjectFull;
  size: "small" | "large";
  onClick?: (value: SpotifyApi.AlbumObjectFull) => void;
}
const SpotifyAlbumCard = ({ size, data, onClick }: SpotifyAlbumCardProps) => {
  if (size === "small")
    return (
      <Tooltip title={<Typography variant="subtitle1">{data.name}</Typography>}>
        <Box>
          <SquareCard
            resource="ALBUM"
            title={
              <Typography variant="caption" display="block" noWrap>
                {data.name}
              </Typography>
            }
            image={data.images[1]?.url || ""}
            size="100px"
            onClick={() => onClick && onClick(data)}
          />
        </Box>
      </Tooltip>
    );
  if (size === "large")
    return (
      <Card sx={{ display: "flex" }}>
        <CardContent>
          <CardMedia
            component="img"
            sx={{ width: 100, height: "auto", borderRadius: "3px" }}
            image={data.images[1]?.url || ""}
            alt="Live from space album cover"
          />
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box display="flex" alignItems="center">
            <CloseIconButton onClick={() => onClick && onClick(data)} />
          </Box>
        </CardContent>
      </Card>
    );
  return <></>;
};

export default SpotifyAlbumCard;
