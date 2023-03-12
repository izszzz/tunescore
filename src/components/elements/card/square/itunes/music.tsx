import Album from "@mui/icons-material/Album";
import Group from "@mui/icons-material/Group";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import type { MusicItunesCardProps } from "../../itunes/music";
import MusicSquareCard from "../music";

const MusicItunesSquareCard = ({ data, onClick }: MusicItunesCardProps) => (
  <Tooltip
    title={
      <>
        <Typography variant="subtitle1">{data.trackCensoredName}</Typography>
        <Typography variant="caption">
          <Album fontSize="inherit" /> {data.collectionCensoredName}
        </Typography>
        <br />
        <Typography variant="caption">
          <Group fontSize="inherit" /> {data.artistName}
        </Typography>
      </>
    }
  >
    <Box>
      <MusicSquareCard
        title={
          <Typography variant="caption" display="block" noWrap>
            {data.trackCensoredName}
          </Typography>
        }
        image={data.artworkUrl100}
        size="100px"
        onClick={() => onClick && onClick(data)}
      />
    </Box>
  </Tooltip>
);

export default MusicItunesSquareCard;
