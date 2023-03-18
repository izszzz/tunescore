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
      image={data.artworkUrl100}
      onClick={() => onClick?.(data)}
      size="100px"
      title={
        <Typography display="block" noWrap variant="caption">
          {data.collectionCensoredName}
        </Typography>
      }
    />
  </Tooltip>
);

export default AlbumItunesSquareCard;
