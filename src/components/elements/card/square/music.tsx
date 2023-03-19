import MusicNote from "@mui/icons-material/MusicNote";

import type { SquareCardProps } from ".";
import SquareCard from ".";

const MusicSquareCard = (props: Omit<SquareCardProps, "icon">) => (
  <SquareCard
    {...props}
    icon={<MusicNote sx={{ fontSize: "60px", color: "grey" }} />}
  />
);
export default MusicSquareCard;
