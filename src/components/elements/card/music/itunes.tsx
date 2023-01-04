import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ResourceIcon from "../../icon/resource";
import CloseIconButton from "../../button/icon/close";
import MusicCard from ".";
import type { ItunesMusic } from "../../../../helpers/itunes";

interface MusicItunesCardProps {
  data: ItunesMusic;
  size: "small" | "medium" | "large";
  onClick?: (value: ItunesMusic) => void;
}
const MusicItunesCard = ({ size, data, onClick }: MusicItunesCardProps) => {
  if (size === "small")
    return (
      <Tooltip
        title={
          <>
            <Typography variant="subtitle1">
              {data.trackCensoredName}
            </Typography>
            <Typography variant="caption">
              <ResourceIcon resource="ALBUM" fontSize="inherit" />{" "}
              {data.collectionCensoredName}
            </Typography>
            <br />
            <Typography variant="caption">
              <ResourceIcon resource="BAND" fontSize="inherit" />{" "}
              {data.artistName}
            </Typography>
          </>
        }
      >
        <MusicCard
          title={
            <Typography variant="caption" display="block" noWrap>
              {data.trackCensoredName}
            </Typography>
          }
          image={data.artworkUrl100}
          size="100px"
          onClick={() => onClick && onClick(data)}
        />
      </Tooltip>
    );
  if (size === "large")
    return (
      <Card sx={{ display: "flex" }}>
        <CardContent>
          <CardMedia
            component="img"
            sx={{ width: 100, height: "auto", borderRadius: "3px" }}
            image={data.artworkUrl100}
            alt="Live from space album cover"
          />
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box>
            <Typography variant="h6">{data.trackCensoredName}</Typography>
            <Typography variant="caption">
              {data.collectionCensoredName}
            </Typography>
            <br />
            <Typography variant="caption">{data.artistName}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <CloseIconButton onClick={() => onClick && onClick(data)} />
          </Box>
        </CardContent>
      </Card>
    );
  return <></>;
};

export default MusicItunesCard;
