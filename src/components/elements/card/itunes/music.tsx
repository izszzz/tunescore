import type { ItunesMusic } from "@izszzz/itunes-search-api";
import Typography from "@mui/material/Typography";

import IndexCard from "..";

export interface MusicItunesCardProps {
  data: ItunesMusic;
  onClick?: (value: ItunesMusic) => void;
}

const MusicItunesCard = ({ data, onClick }: MusicItunesCardProps) => (
  <IndexCard
    title={data.trackCensoredName}
    image={data.artworkUrl100}
    body={
      <>
        <Typography variant="caption">{data.collectionCensoredName}</Typography>
        <br />
        <Typography variant="caption">{data.artistName}</Typography>
      </>
    }
    onClose={() => onClick?.(data)}
  />
);

export default MusicItunesCard;
