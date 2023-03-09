import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { match } from "ts-pattern";

import type { ItunesArtist } from "../../../../helpers/itunes";
import CloseIconButton from "../../button/icon/close";
import SquareCard from "../square";

interface ItunesChannelCardProps {
  data: ItunesArtist;
  size: "small" | "large";
  onClick?: (value: ItunesArtist) => void;
}
const ItunesChannelCard = ({ size, data, onClick }: ItunesChannelCardProps) =>
  match(size)
    .with("small", () => (
      <SquareCard
        resource="ARTIST"
        title={
          <Typography variant="caption" display="block" noWrap>
            {data.artistName}
          </Typography>
        }
        image={null}
        size="100px"
        onClick={() => onClick && onClick(data)}
      />
    ))
    .with("large", () => (
      <Card sx={{ display: "flex" }}>
        <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box>
            <Typography variant="h6">{data.artistName}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <CloseIconButton onClick={() => onClick && onClick(data)} />
          </Box>
        </CardContent>
      </Card>
    ))
    .exhaustive();

export default ItunesChannelCard;
