import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AlbumIcon from "@mui/icons-material/Album";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { match } from "ts-pattern";
import type { SvgIconProps } from "@mui/material/SvgIcon";

export interface ResourceIconProps extends SvgIconProps {
  resource: "ARTIST" | "BAND" | "MUSIC" | "ALBUM" | "USER" | "TAG";
}
const ResourceIcon = ({ resource, ...props }: ResourceIconProps) =>
  match(resource)
    .with("ARTIST", () => <PersonIcon {...props} />)
    .with("BAND", () => <GroupIcon {...props} />)
    .with("MUSIC", () => <MusicNoteIcon {...props} />)
    .with("ALBUM", () => <AlbumIcon {...props} />)
    .with("USER", () => <AccountCircleIcon {...props} />)
    .with("TAG", () => <LocalOfferIcon {...props} />)
    .exhaustive();

export default ResourceIcon;
