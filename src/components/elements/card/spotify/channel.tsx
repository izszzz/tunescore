import IndexCard from "..";

export interface ChannelSpotifyCardProps {
  data: SpotifyApi.ArtistObjectFull;
  onClick?: (value: SpotifyApi.ArtistObjectFull) => void;
}

const ChannelSpotifyCard = ({ data, onClick }: ChannelSpotifyCardProps) => (
  <IndexCard
    image={data.images[1]?.url}
    onClose={() => onClick?.(data)}
    title={data.name}
  />
);

export default ChannelSpotifyCard;
