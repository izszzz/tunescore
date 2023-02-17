import React from "react";

import CallMergeIcon from "@mui/icons-material/CallMerge";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import LockIcon from "@mui/icons-material/Lock";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import type { PullStatus } from "@prisma/client";
import { match } from "ts-pattern";
interface PullStatusIconProps {
  status: PullStatus;
}
const PullStatusIcon = ({ status }: PullStatusIconProps) =>
  match(status)
    .with("DRAFT", () => <LockIcon color="disabled" />)
    .with("OPEN", () => <TaskAltIcon color="success" />)
    .with("CLOSE", () => <HighlightOffIcon color="error" />)
    .with("MERGE", () => <CallMergeIcon color="secondary" />)
    .with("VOTE", () => <HowToVoteIcon color="success" />)
    .exhaustive();
export default PullStatusIcon;
