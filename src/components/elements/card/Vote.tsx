import React, { useEffect, useState } from "react";
import { formatDuration, intervalToDuration } from "date-fns";
import Box from "@mui/material/Box";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import LinearProgress from "@mui/material/LinearProgress";
import { Pull, Vote } from "@prisma/client";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface VoteCardProps {
  pull: Pull;
  data: Vote;
  onGood: () => void;
  onBad: () => void;
}
const VoteCard = ({ pull, data, onGood, onBad }: VoteCardProps) => {
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
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {pull.title}
        </Typography>
        <Box>{time}</Box>
        <Box display="flex" alignItems="center">
          <IconButton onClick={onGood}>
            <ThumbUpIcon />
          </IconButton>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress
              variant="determinate"
              value={data.good ? (data.good + data.bad / data.good) * 100 : 50}
            />
          </Box>
          <IconButton onClick={onBad}>
            <ThumbDownIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VoteCard;
