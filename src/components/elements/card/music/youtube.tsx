import React from "react";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Close";
import ResourceIcon from "../../icon/resource";
import MusicCard from ".";

interface MusicYoutubeCardProps<T> {
  data: T;
  size: "small" | "medium" | "large";
  onClick: (value: T) => void;
}
function MusicYoutubeCard<
  T extends
    | gapi.client.youtube.SearchResult
    | gapi.client.youtube.Video
    | undefined
>({ data, size, onClick }: MusicYoutubeCardProps<T>) {
  if (size === "small")
    return (
      <Tooltip
        title={
          <>
            <Typography variant="subtitle1">{data?.snippet?.title}</Typography>
            <Typography variant="caption">
              <ResourceIcon resource="BAND" fontSize="inherit" />{" "}
              {data?.snippet?.channelTitle}
            </Typography>
          </>
        }
      >
        <Box>
          <MusicCard
            title={
              <Typography variant="caption" display="block" noWrap>
                {data?.snippet?.title}
              </Typography>
            }
            image={data?.snippet?.thumbnails?.medium?.url || ""}
            size={String(data?.snippet?.thumbnails?.medium?.width) + "px"}
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
            sx={{
              width: data?.snippet?.thumbnails?.medium?.width,
              height: "auto",
              borderRadius: "3px",
            }}
            image={data?.snippet?.thumbnails?.medium?.url}
            alt="Live from space album cover"
          />
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box>
            <Typography variant="h6">{data?.snippet?.title}</Typography>
            <Typography variant="caption">
              {data?.snippet?.channelTitle}
            </Typography>
            <br />
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton onClick={() => onClick && onClick(data)}>
              <Close />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    );
  return <></>;
}

export default MusicYoutubeCard;
