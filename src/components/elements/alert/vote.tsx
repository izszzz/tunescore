import React, { useEffect, useState } from "react";
import { intervalToDuration, isPast } from "date-fns";
import Box from "@mui/material/Box";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import LinearProgress from "@mui/material/LinearProgress";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { getRouterId } from "../../../helpers/router";
import type { Prisma } from "@prisma/client";
import type { IconButtonProps } from "@mui/material/IconButton";

export interface VoteAlertProps {
  data: Prisma.PullGetPayload<{
    include: {
      vote: true;
    };
  }>;
  badIconButtonProps: IconButtonProps;
  goodIconButtonProps: IconButtonProps;
}
const VoteAlert = ({
  data,
  badIconButtonProps,
  goodIconButtonProps,
}: VoteAlertProps) => {
  const [duration, setDuration] = useState<Duration>();
  const [finished, setFinished] = useState(false);
  const router = useRouter();
  const id = getRouterId(router);
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
    <Alert
      severity="info"
      action={
        <Button
          color="inherit"
          size="small"
          onClick={() =>
            router.push({
              pathname: "/musics/[id]/pulls/[pullId]",
              query: { id, pullId: data.id },
            })
          }
        >
          Watch PullRequest
        </Button>
      }
    >
      <AlertTitle>{data.title}</AlertTitle>
      <Typography variant="caption" color="text.secondary">
        <Typography variant="body1" component="span">
          {duration?.days}
        </Typography>{" "}
        Days
        <Typography variant="body1" component="span">
          {duration?.hours}
        </Typography>{" "}
        Hours
        <Typography variant="body1" component="span">
          {duration?.minutes}
        </Typography>{" "}
        Minutes
        <Typography variant="body1" component="span">
          {duration?.seconds}
        </Typography>{" "}
        Seconds
      </Typography>
      <Box display="flex" alignItems="center">
        <IconButton {...goodIconButtonProps}>
          <ThumbUpIcon />
        </IconButton>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            value={
              data.vote && data.vote.good
                ? (data.vote.good + data.vote.bad / data.vote.good) * 100
                : 50
            }
          />
        </Box>
        <IconButton {...badIconButtonProps}>
          <ThumbDownIcon />
        </IconButton>
      </Box>
    </Alert>
  );
};

export default VoteAlert;
