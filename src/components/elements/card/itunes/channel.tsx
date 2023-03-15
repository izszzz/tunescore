import type { ItunesArtist } from "@izszzz/itunes-search-api";

import IndexCard from "..";

export interface ChannelItunesCardProps {
  data: ItunesArtist;
  onClick?: (value: ItunesArtist) => void;
}

const ChannelItunesCard = ({ data, onClick }: ChannelItunesCardProps) => (
  <IndexCard title={data.artistName} onClose={() => onClick?.(data)} />
);

export default ChannelItunesCard;
