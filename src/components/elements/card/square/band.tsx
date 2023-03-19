import GroupIcon from "@mui/icons-material/Group";

import type { SquareCardProps } from ".";
import SquareCard from ".";

const BandSquareCard = (props: Omit<SquareCardProps, "icon">) => (
  <SquareCard
    {...props}
    icon={<GroupIcon sx={{ fontSize: "60px", color: "grey" }} />}
  />
);
export default BandSquareCard;
