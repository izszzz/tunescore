import React from "react";
import { PullStatus } from "@prisma/client";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import LockIcon from "@mui/icons-material/Lock";
interface PullStatusIconProps {
  status: PullStatus;
}
const PullStatusIcon = ({ status }: PullStatusIconProps) => {
  if (status === "DRAFT") return <LockIcon color="disabled" />;
  if (status === "OPEN") return <TaskAltIcon color="success" />;
  if (status === "CLOSED") return <HighlightOffIcon color="error" />;
  if (status === "MERGED") return <TaskAltIcon color="disabled" />;
  return <>no status</>;
};
export default PullStatusIcon;
