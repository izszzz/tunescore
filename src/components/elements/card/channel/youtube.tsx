import React from "react";

import Close from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { match } from "ts-pattern";

import type {
  Channel,
  SearchResult,
} from "../../form/settings/select/card/youtube";
import SquareCard from "../square";

interface ChannelYoutubeCardProps<T> {
  data: T;
  size: "small" | "large";
  onClick: (value: T) => void;
}
function ChannelYoutubeCard<T extends SearchResult | Channel | undefined>({
  data,
  size,
  onClick,
}: ChannelYoutubeCardProps<T>) {
  return match(size)
    .with("small", () => (
      <SquareCard
        resource="ARTIST"
        title={
          <Typography variant="caption" display="block" noWrap>
            {data?.snippet?.title}
          </Typography>
        }
        image={data?.snippet?.thumbnails?.medium?.url || ""}
        size={String(data?.snippet?.thumbnails?.medium?.width) + "px"}
        onClick={() => onClick && onClick(data)}
      />
    ))
    .with("large", () => (
      <Card sx={{ display: "flex" }}>
        <CardContent>
          <CardMedia
            component="img"
            sx={{
              width: data?.snippet?.thumbnails?.medium?.width,
              height: "auto",
              borderRadius: "3px",
            }}
            image={data?.snippet?.thumbnails?.medium?.url || ""}
            alt="Live from space album cover"
          />
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
          <Typography variant="h6">{data?.snippet?.title}</Typography>
          <Box display="flex" alignItems="center">
            <IconButton onClick={() => onClick && onClick(data)}>
              <Close />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    ))
    .exhaustive();
}

export default ChannelYoutubeCard;
