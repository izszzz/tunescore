import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import type { ChannelSpotifyCardProps } from "../../spotify/channel";
import ArtistSquareCard from "../artist";

const ChannelSpotifySquareCard = ({
  data,
  onClick,
}: ChannelSpotifyCardProps) => (
  <Tooltip title={<Typography variant="subtitle1">{data.name}</Typography>}>
    <Box>
      <ArtistSquareCard
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

export default ChannelSpotifySquareCard;
