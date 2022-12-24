import React from "react";
import AlbumIcon from "@mui/icons-material/Album";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import type { SvgIconProps } from "@mui/material/SvgIcon";

export interface ResourceIconProps extends SvgIconProps {
  resource: "open" | "close";
}
const ResourceIcon = ({ resource, ...props }: ResourceIconProps) => {
  if (resource === "open") return <AlbumIcon {...props} />;
  if (resource === "close") return <AccountCircleIcon {...props} />;
};
export default ResourceIcon;
