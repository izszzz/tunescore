import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import LockIcon from "@mui/icons-material/Lock";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import type { PullStatus } from "@prisma/client";
interface PullStatusIconProps {
  status: PullStatus;
}
const PullStatusIcon = ({ status }: PullStatusIconProps) => {
  switch (status) {
    case "DRAFT":
      return <LockIcon color="disabled" />;
    case "OPEN":
      return <TaskAltIcon color="success" />;
    case "CLOSED":
      return <HighlightOffIcon color="error" />;
    case "MERGED":
      return <TaskAltIcon color="disabled" />;
    case "VOTE":
      return <HowToVoteIcon color="success" />;
  }
};
export default PullStatusIcon;
