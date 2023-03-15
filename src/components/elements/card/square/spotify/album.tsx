import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import type { AlbumSpotifyCardProps } from "../../spotify/album";
import AlbumSquareCard from "../album";

const AlbumSpotifySquareCard = ({ data, onClick }: AlbumSpotifyCardProps) => (
  <Tooltip title={<Typography variant="subtitle1">{data.name}</Typography>}>
    <Box>
      <AlbumSquareCard
        title={
          <Typography variant="caption" display="block" noWrap>
            {data.name}
          </Typography>
        }
        image={data.images[1]?.url || ""}
        size="100px"
        onClick={() => onClick?.(data)}
      />
    </Box>
  </Tooltip>
);
export default AlbumSpotifySquareCard;
