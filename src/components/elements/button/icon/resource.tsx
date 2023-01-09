import IconButton from "@mui/material/IconButton";
import ResourceIcon from "../../icon/resource";
import type { ResourceIconProps } from "../../icon/resource";
import type { IconButtonProps } from "@mui/material/IconButton";

interface ResourceIconButtonProps extends IconButtonProps {
  resource: ResourceIconProps["resource"];
}
const ResourceIconButton = ({
  resource,
  ...props
}: ResourceIconButtonProps) => (
  <IconButton {...props}>
    <ResourceIcon resource={resource} />
  </IconButton>
);

export default ResourceIconButton;
