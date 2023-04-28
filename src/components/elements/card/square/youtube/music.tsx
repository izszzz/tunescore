import Group from "@mui/icons-material/Group";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import type {
  SearchResult,
  Video,
} from "../../../form/settings/select/card/youtube";
import type { MusicYoutubeCardProps } from "../../youtube/music";
import MusicSquareCard from "../music";

function MusicYoutubeSquareCard<T extends SearchResult | Video | undefined>({
  data,
  onClick,
}: MusicYoutubeCardProps<T>) {
  return (
    <Tooltip
      title={
        <>
          <Typography variant="subtitle1">{data?.snippet?.title}</Typography>
          <Typography variant="caption">
            <Group fontSize="inherit" /> {data?.snippet?.channelTitle}
          </Typography>
        </>
      }
    >
      <Box>
        <MusicSquareCard
          image={data?.snippet?.thumbnails?.medium?.url}
          onClick={() => onClick?.(data)}
          title={
            <Typography display="block" noWrap variant="caption">
              {data?.snippet?.title}
            </Typography>
          }
        />
      </Box>
    </Tooltip>
  );
}
export default MusicYoutubeSquareCard;
