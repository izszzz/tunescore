import Typography from "@mui/material/Typography";

import type { ChannelItunesCardProps } from "../../itunes/channel";
import ArtistSquareCard from "../artist";

const ChannelItunesSquareCard = ({ data, onClick }: ChannelItunesCardProps) => (
  <ArtistSquareCard
    title={
      <Typography variant="caption" display="block" noWrap>
        {data.artistName}
      </Typography>
    }
    image={null}
    size="100px"
    onClick={() => onClick && onClick(data)}
  />
);

export default ChannelItunesSquareCard;
