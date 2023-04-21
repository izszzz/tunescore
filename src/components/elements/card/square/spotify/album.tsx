import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import type { AlbumSpotifyCardProps } from "../../spotify/album";
import AlbumSquareCard from "../album";

const AlbumSpotifySquareCard = ({ data, onClick }: AlbumSpotifyCardProps) => (
  <Tooltip title={<Typography variant="subtitle1">{data.name}</Typography>}>
    <Box>
      <AlbumSquareCard
        image={data.images[1]?.url || ""}
        onClick={() => onClick?.(data)}
        title={
          <Typography display="block" noWrap variant="caption">
            {data.name}
          </Typography>
        }
      />
    </Box>
  </Tooltip>
);
export default AlbumSpotifySquareCard;
