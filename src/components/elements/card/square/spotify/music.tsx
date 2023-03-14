import Album from "@mui/icons-material/Album";
import Group from "@mui/icons-material/Group";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import type { MusicSpotifyCardProps } from "../../spotify/music";
import MusicSquareCard from "../music";

const MusicSpotifySquareCard = ({ data, onClick }: MusicSpotifyCardProps) => (
  <Tooltip
    title={
      <>
        <Typography variant="subtitle1">{data.name}</Typography>
        <Typography variant="caption">
          <Album fontSize="inherit" /> {data.album.name}
        </Typography>
        <br />
        <Typography variant="caption">
          <Group fontSize="inherit" /> {data.artists[0]?.name}
        </Typography>
      </>
    }
  >
    <Box>
      <MusicSquareCard
        image={data.album.images[1]?.url}
        size="100px"
        title={
          <Typography variant="caption" display="block" noWrap>
            {data.name}
          </Typography>
        }
        onClick={() => onClick?.(data)}
      />
    </Box>
  </Tooltip>
);

export default MusicSpotifySquareCard;
