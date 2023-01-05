import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CloseIconButton from "../../button/icon/close";
import SquareArtistCard from "../artist/square";
import type { ItunesArtist } from "../../../../helpers/itunes";

interface ItunesChannelCardProps {
  data: ItunesArtist;
  size: "small" | "medium" | "large";
  onClick?: (value: ItunesArtist) => void;
}
const ItunesChannelCard = ({ size, data, onClick }: ItunesChannelCardProps) => {
  if (size === "small")
    return (
      <SquareArtistCard
        title={
          <Typography variant="caption" display="block" noWrap>
            {data.artistName}
          </Typography>
        }
        image={null}
        size="100px"
        onClick={() => onClick && onClick(data)}
      />
    );
  if (size === "large")
    return (
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
    );
  return <></>;
};

export default ItunesChannelCard;
