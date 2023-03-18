import type { ItunesAlbum } from "@izszzz/itunes-search-api";
import Typography from "@mui/material/Typography";

import IndexCard from "..";

export interface AlbumItunesCardProps {
  data: ItunesAlbum;
  onClick?: (value: ItunesAlbum) => void;
}

const AlbumItunesCard = ({ data, onClick }: AlbumItunesCardProps) => (
  <IndexCard
    body={
      <>
        <Typography variant="caption">{data.collectionCensoredName}</Typography>
        <Typography variant="caption">{data.artistName}</Typography>
      </>
    }
    image={data.artworkUrl100}
    onClose={() => onClick?.(data)}
    title={data.collectionCensoredName}
  />
);
export default AlbumItunesCard;
