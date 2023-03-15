import Typography from "@mui/material/Typography";

import type {
  Channel,
  SearchResult,
} from "../../../form/settings/select/card/youtube";
import type { ChannelYoutubeCardProps } from "../../youtube/channel";
import ArtistSquareCard from "../artist";

function ChannelYoutubeSquareCard<
  T extends SearchResult | Channel | undefined
>({ data, onClick }: ChannelYoutubeCardProps<T>) {
  return (
    <ArtistSquareCard
      title={
        <Typography variant="caption" display="block" noWrap>
          {data?.snippet?.title}
        </Typography>
      }
      image={data?.snippet?.thumbnails?.medium?.url}
      size={String(data?.snippet?.thumbnails?.medium?.width) + "px"}
      onClick={() => onClick?.(data)}
    />
  );
}
export default ChannelYoutubeSquareCard;
