import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AlbumIcon from "@mui/icons-material/Album";
import GroupIcon from "@mui/icons-material/Group";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PersonIcon from "@mui/icons-material/Person";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import { match } from "ts-pattern";

export interface ResourceIconProps extends SvgIconProps {
  type: "ARTIST" | "BAND" | "MUSIC" | "ALBUM" | "USER";
}
const ResourceIcon = ({ type, ...props }: ResourceIconProps) =>
  match(type)
    .with("ARTIST", () => <PersonIcon {...props} />)
    .with("BAND", () => <GroupIcon {...props} />)
    .with("MUSIC", () => <MusicNoteIcon {...props} />)
    .with("ALBUM", () => <AlbumIcon {...props} />)
    .with("USER", () => <AccountCircleIcon {...props} />)
    .exhaustive();

export default ResourceIcon;
