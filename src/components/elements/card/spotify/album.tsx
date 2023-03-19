import Typography from "@mui/material/Typography";

import IndexCard from "..";
export interface AlbumSpotifyCardProps {
  data: SpotifyApi.AlbumObjectFull;
  onClick?: (value: SpotifyApi.AlbumObjectFull) => void;
}

const AlbumSpotifyCard = ({ data, onClick }: AlbumSpotifyCardProps) => (
  <IndexCard
    body={
      <>
        <Typography variant="caption">
          {data.artists.map((artist) => artist.name)}
        </Typography>
        <br />
        <Typography variant="caption">{data.label}</Typography>
      </>
    }
    image={data.images[1]?.url}
    onClose={() => onClick?.(data)}
    title={data.name}
  />
);

export default AlbumSpotifyCard;
