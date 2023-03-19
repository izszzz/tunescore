import PersonIcon from "@mui/icons-material/Person";

import type { SquareCardProps } from ".";
import SquareCard from ".";

const ArtistSquareCard = (props: Omit<SquareCardProps, "icon">) => (
  <SquareCard
    {...props}
    icon={<PersonIcon sx={{ fontSize: "60px", color: "grey" }} />}
  />
);
export default ArtistSquareCard;
