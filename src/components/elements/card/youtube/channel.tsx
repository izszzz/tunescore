import IndexCard from "..";
import type {
  Channel,
  SearchResult,
} from "../../form/settings/select/card/youtube";

export interface ChannelYoutubeCardProps<T> {
  data: T;
  onClick: (value: T) => void;
}
const ChannelYoutubeCard = ({
  data,
  onClick,
}: ChannelYoutubeCardProps<SearchResult | Channel | undefined>) => (
  <IndexCard
    title={data?.snippet?.title || ""}
    image={data?.snippet?.thumbnails?.medium?.url || ""}
    onClose={() => onClick?.(data)}
  />
);

export default ChannelYoutubeCard;
