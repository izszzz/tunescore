import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AlbumIcon from "@mui/icons-material/Album";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import type { SvgIconProps } from "@mui/material/SvgIcon";

export interface ResourceIconProps extends SvgIconProps {
  resource:
    | "artist"
    | "composer"
    | "lyrist"
    | "band"
    | "music"
    | "album"
    | "user"
    | "tag";
}
const ResourceIcon = ({ resource, ...props }: ResourceIconProps) => {
  if (resource === "artist" || resource === "composer" || resource === "lyrist")
    return <PersonIcon {...props} />;
  if (resource === "band") return <GroupIcon {...props} />;
  if (resource === "music") return <MusicNoteIcon {...props} />;
  if (resource === "album") return <AlbumIcon {...props} />;
  if (resource === "user") return <AccountCircleIcon {...props} />;
  if (resource === "tag") return <LocalOfferIcon {...props} />;
  return <>no icon</>;
};
export default ResourceIcon;
