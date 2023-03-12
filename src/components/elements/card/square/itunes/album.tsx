import Album from "@mui/icons-material/Album";
import Group from "@mui/icons-material/Group";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import type { AlbumItunesCardProps } from "../../itunes/album";
import AlbumSquareCard from "../album";

const AlbumItunesSquareCard = ({ data, onClick }: AlbumItunesCardProps) => (
  <Tooltip
    title={
      <>
        <Typography variant="subtitle1">{data.collectionName}</Typography>
        <Typography variant="caption">
          <Album fontSize="inherit" /> {data.collectionCensoredName}
        </Typography>
        <br />
        <Typography variant="caption">
          <Group fontSize="inherit" /> {data.artistName}
        </Typography>
      </>
    }
  >
    <AlbumSquareCard
      title={
        <Typography variant="caption" display="block" noWrap>
          {data.collectionCensoredName}
        </Typography>
      }
      image={data.artworkUrl100}
      size="100px"
      onClick={() => onClick && onClick(data)}
    />
  </Tooltip>
);

export default AlbumItunesSquareCard;
