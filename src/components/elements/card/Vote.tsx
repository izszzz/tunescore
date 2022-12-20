import React, { useEffect, useState } from "react";
import { formatDuration, intervalToDuration } from "date-fns";
import Box from "@mui/material/Box";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import LinearProgress from "@mui/material/LinearProgress";
import { Vote } from "@prisma/client";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";

interface VoteCardProps {
  data: Vote;
  onGood: () => void;
  onBad: () => void;
}
const VoteCard = ({ data }: VoteCardProps) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const intervalID = window.setInterval(() => {
      const duration = intervalToDuration({
        start: Date.now(),
        end: data.end,
      });
      setTime(
        formatDuration(duration, {
          format: ["weeks", "days", "hours", "minutes", "seconds"],
          zero: true,
        })
      );
    }, 1000);
    return () => clearInterval(intervalID);
  }, [data.end]);
  return (
    <Card variant="outlined">
      <CardContent>
        <Box>{time}</Box>
        <Box display="flex" alignItems="center">
          <IconButton>
            <ThumbUpIcon />
          </IconButton>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress
              variant="determinate"
              value={data.good ? (data.good + data.bad / data.good) * 100 : 50}
            />
          </Box>
          <IconButton>
            <ThumbDownIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VoteCard;
