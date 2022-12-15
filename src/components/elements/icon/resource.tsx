import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AlbumIcon from "@mui/icons-material/Album";
import { SvgIconProps } from "@mui/material/SvgIcon";

export interface ResourceIconProps extends SvgIconProps {
  resource: "artist" | "band" | "music" | "album";
}
const ResourceIcon = ({ resource, ...props }: ResourceIconProps) => {
  if (resource === "artist") return <PersonIcon {...props} />;
  if (resource === "band") return <GroupIcon {...props} />;
  if (resource === "music") return <MusicNoteIcon {...props} />;
  if (resource === "album") return <AlbumIcon {...props} />;
  return <>no icon</>;
};
export default ResourceIcon;
