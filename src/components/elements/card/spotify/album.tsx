import Typography from "@mui/material/Typography";

import IndexCard from "..";
export interface AlbumSpotifyCardProps {
  data: SpotifyApi.AlbumObjectFull;
  onClick?: (value: SpotifyApi.AlbumObjectFull) => void;
}

const AlbumSpotifyCard = ({ data, onClick }: AlbumSpotifyCardProps) => (
  <IndexCard
    image={data.images[1]?.url}
    title={data.name}
    body={
      <>
        <Typography variant="caption">
          {data.artists.map((artist) => artist.name)}
        </Typography>
        <br />
        <Typography variant="caption">{data.label}</Typography>
      </>
    }
    onClose={() => onClick && onClick(data)}
  />
);

export default AlbumSpotifyCard;
