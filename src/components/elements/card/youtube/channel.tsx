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
    image={data?.snippet?.thumbnails?.medium?.url || ""}
    onClose={() => onClick?.(data)}
    title={data?.snippet?.title || ""}
  />
);

export default ChannelYoutubeCard;
