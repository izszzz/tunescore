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
      body={<Typography>{data?.snippet?.channelTitle}</Typography>}
      image={data?.snippet?.thumbnails?.medium?.url || ""}
      onClose={() => onClick?.(data)}
      title={data?.snippet?.title || ""}
    />
  );
}
export default MusicYoutubeCard;
