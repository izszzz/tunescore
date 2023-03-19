import type { ItunesMusic } from "@izszzz/itunes-search-api";
import Typography from "@mui/material/Typography";

import IndexCard from "..";

export interface MusicItunesCardProps {
  data: ItunesMusic;
  onClick?: (value: ItunesMusic) => void;
}

const MusicItunesCard = ({ data, onClick }: MusicItunesCardProps) => (
  <IndexCard
    body={
      <>
        <Typography variant="caption">{data.collectionCensoredName}</Typography>
        <br />
        <Typography variant="caption">{data.artistName}</Typography>
      </>
    }
    image={data.artworkUrl100}
    onClose={() => onClick?.(data)}
    title={data.trackCensoredName}
  />
);

export default MusicItunesCard;
