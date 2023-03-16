import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import type { ButtonProps } from "@mui/material/Button";
import Button from "@mui/material/Button";

const ExpandToggleButton = ({
  value,
  ...props
}: Omit<ButtonProps, "value"> & { value: boolean }) => (
  <Button {...props} fullWidth>
    {value ? <ExpandLess /> : <ExpandMore />}
  </Button>
);
export default ExpandToggleButton;
