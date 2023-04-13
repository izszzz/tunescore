import React, { useEffect, useState } from "react";

import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Box from "@mui/material/Box";
import type { CardProps } from "@mui/material/Card";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import type { IconButtonProps } from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";
import { intervalToDuration, isPast } from "date-fns";

import type { PullShowArgsType } from "../../../paths/musics/[id]/pulls/[pullId]";

interface VoteCardProps extends CardProps {
  data: Prisma.PullGetPayload<PullShowArgsType>;
  badIconButtonProps: IconButtonProps;
  goodIconButtonProps: IconButtonProps;
}
const VoteCard = ({
  data,
  badIconButtonProps,
  goodIconButtonProps,
  ...props
}: VoteCardProps) => {
  const [duration, setDuration] = useState<Duration>();
  const [finished, setFinished] = useState(false);
  useEffect(() => {
    const intervalID = window.setInterval(() => {
      if (!data.vote) return;
      if (isPast(data.vote.end)) {
        setFinished(true);
        clearInterval(intervalID);
      }
      setDuration(
        intervalToDuration({
          start: Date.now(),
          end: data.vote.end,
        })
      );
    }, 1000);
    return () => clearInterval(intervalID);
  }, [data.vote]);
  if (finished) return <>finished</>;
  return (
    <Card {...props}>
      <CardContent>
        <Typography variant="h5">{data.title}</Typography>
        <Typography color="text.secondary" variant="caption">
          <Typography component="span" variant="body1">
            {duration?.days}
          </Typography>{" "}
          Days
          <Typography component="span" variant="body1">
            {duration?.hours}
          </Typography>{" "}
          Hours
          <Typography component="span" variant="body1">
            {duration?.minutes}
          </Typography>{" "}
          Minutes
          <Typography component="span" variant="body1">
            {duration?.seconds}
          </Typography>{" "}
          Seconds
        </Typography>
        <Box alignItems="center" display="flex" width="100%">
          <IconButton {...goodIconButtonProps}>
            <ThumbUpIcon />
          </IconButton>
          {data.vote?._count.proponents}
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress value={80} variant="determinate" />
          </Box>
          {data.vote?._count.opponents}
          <IconButton {...badIconButtonProps}>
            <ThumbDownIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VoteCard;
