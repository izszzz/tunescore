import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import type { ItunesMusic } from "../../../../helpers/itunes";
import CloseIconButton from "../../button/icon/close";
import ResourceIcon from "../../icon/resource";
import SquareCard from "../square";

interface ItunesMusicCardProps {
  data: ItunesMusic;
  size: "small" | "large";
  onClick?: (value: ItunesMusic) => void;
}
const ItunesMusicCard = ({ size, data, onClick }: ItunesMusicCardProps) => {
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
        <Box>
          <SquareCard
            resource="MUSIC"
            title={
              <Typography variant="caption" display="block" noWrap>
                {data.trackCensoredName}
              </Typography>
            }
            image={data.artworkUrl100}
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

export default ItunesMusicCard;
