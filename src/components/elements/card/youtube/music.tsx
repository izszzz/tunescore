import Typography from "@mui/material/Typography";

import IndexCard from "..";
import type {
  SearchResult,
  Video,
} from "../../form/settings/select/card/youtube";

export interface MusicYoutubeCardProps<
  T extends SearchResult | Video | undefined
> {
  data: T;
  onClick: (value: T) => void;
}

function MusicYoutubeCard<T extends SearchResult | Video | undefined>({
  data,
  onClick,
}: MusicYoutubeCardProps<T>) {
  return (
    <IndexCard
      title={data?.snippet?.title || ""}
      image={data?.snippet?.thumbnails?.medium?.url || ""}
      body={<Typography>{data?.snippet?.channelTitle}</Typography>}
      onClose={() => onClick?.(data)}
    />
  );
}
export default MusicYoutubeCard;
