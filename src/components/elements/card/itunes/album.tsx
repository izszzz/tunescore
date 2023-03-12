import type { ItunesAlbum } from "@izszzz/itunes-search-api";
import Typography from "@mui/material/Typography";

import IndexCard from "..";

export interface AlbumItunesCardProps {
  data: ItunesAlbum;
  onClick?: (value: ItunesAlbum) => void;
}

const AlbumItunesCard = ({ data, onClick }: AlbumItunesCardProps) => (
  <IndexCard
    title={data.collectionCensoredName}
    image={data.artworkUrl100}
    body={
      <>
        <Typography variant="caption">{data.collectionCensoredName}</Typography>
        <Typography variant="caption">{data.artistName}</Typography>
      </>
    }
    onClose={() => onClick && onClick(data)}
  />
);
export default AlbumItunesCard;
