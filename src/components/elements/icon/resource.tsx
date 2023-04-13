import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AlbumIcon from "@mui/icons-material/Album";
import GroupIcon from "@mui/icons-material/Group";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PersonIcon from "@mui/icons-material/Person";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import type { ResourceUnionType } from "@prisma/client";
import { match } from "ts-pattern";

interface ResourceIconProps extends SvgIconProps {
  type: ResourceUnionType | "User";
}
const ResourceIcon = ({ type, ...props }: ResourceIconProps) =>
  match(type)
    .with("Artist", () => <PersonIcon {...props} />)
    .with("Band", () => <GroupIcon {...props} />)
    .with("Music", () => <MusicNoteIcon {...props} />)
    .with("Album", () => <AlbumIcon {...props} />)
    .with("User", () => <AccountCircleIcon {...props} />)
    .exhaustive();

export default ResourceIcon;
