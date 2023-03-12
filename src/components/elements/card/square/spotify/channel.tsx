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
        title={
          <Typography variant="caption" display="block" noWrap>
            {data.name}
          </Typography>
        }
        image={data.images[1]?.url || ""}
        size="100px"
        onClick={() => onClick && onClick(data)}
      />
    </Box>
  </Tooltip>
);

export default ChannelSpotifySquareCard;