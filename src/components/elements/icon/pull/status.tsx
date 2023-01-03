import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import LockIcon from "@mui/icons-material/Lock";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import { match } from "ts-pattern";
import type { PullStatus } from "@prisma/client";
interface PullStatusIconProps {
  status: PullStatus;
}
const PullStatusIcon = ({ status }: PullStatusIconProps) =>
  match(status)
    .with("DRAFT", () => <LockIcon color="disabled" />)
    .with("OPEN", () => <TaskAltIcon color="success" />)
    .with("CLOSE", () => <HighlightOffIcon color="error" />)
    .with("MERGE", () => <TaskAltIcon color="disabled" />)
    .with("VOTE", () => <HowToVoteIcon color="success" />)
    .exhaustive();
export default PullStatusIcon;
