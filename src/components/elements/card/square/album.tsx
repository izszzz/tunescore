import AlbumIcon from "@mui/icons-material/Album";

import type { SquareCardProps } from ".";
import SquareCard from ".";

const AlbumSquareCard = (props: Omit<SquareCardProps, "icon">) => (
  <SquareCard
    {...props}
    icon={<AlbumIcon sx={{ fontSize: "60px", color: "grey" }} />}
  />
);
export default AlbumSquareCard;
