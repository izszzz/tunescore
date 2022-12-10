import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AlbumIcon from "@mui/icons-material/Album";
import { PrismaModelNameLowercase } from "../../../types/common";
import { SvgIconProps } from "@mui/material/SvgIcon";

interface ResourceIconProps extends SvgIconProps {
  resource: PrismaModelNameLowercase;
}
const ResourceIcon = ({ resource, ...props }: ResourceIconProps) => {
  if (resource === "artist") return <PersonIcon {...props} />;
  if (resource === "band") return <GroupIcon {...props} />;
  if (resource === "music") return <MusicNoteIcon {...props} />;
  if (resource === "album") return <AlbumIcon {...props} />;
  return <>no icon</>;
};
export default ResourceIcon;
