import type { ItunesArtist } from "@izszzz/itunes-search-api";

import IndexCard from "..";

export interface ChannelItunesCardProps {
  data: ItunesArtist;
  onClick?: (value: ItunesArtist) => void;
}

const ChannelItunesCard = ({ data, onClick }: ChannelItunesCardProps) => (
  <IndexCard onClose={() => onClick?.(data)} title={data.artistName} />
);

export default ChannelItunesCard;
