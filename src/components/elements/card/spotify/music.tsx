import Typography from "@mui/material/Typography";

import IndexCard from "..";

export interface MusicSpotifyCardProps {
  data: SpotifyApi.TrackObjectFull;
  onClick?: (value: SpotifyApi.TrackObjectFull) => void;
}

const MusicSpotifyCard = ({ data, onClick }: MusicSpotifyCardProps) => (
  <IndexCard
    title={data.name}
    image={data.album.images[1]?.url}
    onClose={() => onClick?.(data)}
    body={
      <>
        <Typography variant="caption">{data.album.name}</Typography>
        <br />
        <Typography variant="caption">{data.artists[0]?.name}</Typography>
      </>
    }
  />
);

export default MusicSpotifyCard;
