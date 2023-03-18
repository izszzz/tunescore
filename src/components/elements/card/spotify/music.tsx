import Typography from "@mui/material/Typography";

import IndexCard from "..";

export interface MusicSpotifyCardProps {
  data: SpotifyApi.TrackObjectFull;
  onClick?: (value: SpotifyApi.TrackObjectFull) => void;
}

const MusicSpotifyCard = ({ data, onClick }: MusicSpotifyCardProps) => (
  <IndexCard
    body={
      <>
        <Typography variant="caption">{data.album.name}</Typography>
        <br />
        <Typography variant="caption">{data.artists[0]?.name}</Typography>
      </>
    }
    image={data.album.images[1]?.url}
    onClose={() => onClick?.(data)}
    title={data.name}
  />
);

export default MusicSpotifyCard;
