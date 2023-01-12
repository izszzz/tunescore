import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ResourceIcon from "../../icon/resource";
import CloseIconButton from "../../button/icon/close";
import SquareCard from "../square";

interface SpotifyMusicCardProps {
  data: SpotifyApi.TrackObjectFull;
  size: "small" | "large";
  onClick?: (value: SpotifyApi.TrackObjectFull) => void;
}
const MusicSpotifyCard = ({ size, data, onClick }: SpotifyMusicCardProps) => {
  console.log(data);
  if (size === "small")
    return (
      <Tooltip
        title={
          <>
            <Typography variant="subtitle1">{data.name}</Typography>
            <Typography variant="caption">
              <ResourceIcon resource="ALBUM" fontSize="inherit" />{" "}
              {data.album.name}
            </Typography>
            <br />
            <Typography variant="caption">
              <ResourceIcon resource="BAND" fontSize="inherit" />{" "}
              {data.artists[0]?.name}
            </Typography>
          </>
        }
      >
        <Box>
          <SquareCard
            resource="MUSIC"
            title={
              <Typography variant="caption" display="block" noWrap>
                {data.name}
              </Typography>
            }
            image={data.album.images[1]?.url || ""}
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
            image={data.album.images[1]?.url || ""}
            alt="Live from space album cover"
          />
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box>
            <Typography variant="h6">{data.name}</Typography>
            <Typography variant="caption">{data.album.name}</Typography>
            <br />
            <Typography variant="caption">{data.artists[0]?.name}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <CloseIconButton onClick={() => onClick && onClick(data)} />
          </Box>
        </CardContent>
      </Card>
    );
  return <></>;
};

export default MusicSpotifyCard;
