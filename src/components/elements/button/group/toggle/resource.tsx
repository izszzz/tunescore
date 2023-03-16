import Album from "@mui/icons-material/Album";
import Group from "@mui/icons-material/Group";
import MusicNote from "@mui/icons-material/MusicNote";
import Person from "@mui/icons-material/Person";
import ToggleButton from "@mui/material/ToggleButton";
import type { ToggleButtonGroupProps } from "@mui/material/ToggleButtonGroup";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ResourceToggleGroupButton = (props: ToggleButtonGroupProps) => (
  <ToggleButtonGroup {...props}>
    <ToggleButton value="Music">
      <MusicNote />
    </ToggleButton>
    <ToggleButton value="Album">
      <Album />
    </ToggleButton>
    <ToggleButton value="Artist">
      <Person />
    </ToggleButton>
    <ToggleButton value="Band">
      <Group />
    </ToggleButton>
  </ToggleButtonGroup>
);

export default ResourceToggleGroupButton;
