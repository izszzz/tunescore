import Typography from "@mui/material/Typography";

import type { ChannelItunesCardProps } from "../../itunes/channel";
import ArtistSquareCard from "../artist";

const ChannelItunesSquareCard = ({ data, onClick }: ChannelItunesCardProps) => (
  <ArtistSquareCard
    image={null}
    onClick={() => onClick?.(data)}
    title={
      <Typography display="block" noWrap variant="caption">
        {data.artistName}
      </Typography>
    }
  />
);

export default ChannelItunesSquareCard;
