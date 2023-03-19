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
      image={data?.snippet?.thumbnails?.medium?.url}
      onClick={() => onClick?.(data)}
      size={String(data?.snippet?.thumbnails?.medium?.width) + "px"}
      title={
        <Typography display="block" noWrap variant="caption">
          {data?.snippet?.title}
        </Typography>
      }
    />
  );
}
export default ChannelYoutubeSquareCard;
