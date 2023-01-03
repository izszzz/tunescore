import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { match } from "ts-pattern";
import type { SvgIconProps } from "@mui/material/SvgIcon";

export interface StatusProps extends SvgIconProps {
  resource: "OPEN" | "CLOSE";
}
const StatusIcon = ({ resource, ...props }: StatusProps) =>
  match(resource)
    .with("OPEN", () => <TaskAltIcon color="success" {...props} />)
    .with("CLOSE", () => <HighlightOffIcon color="error" {...props} />)
    .exhaustive();

export default StatusIcon;
