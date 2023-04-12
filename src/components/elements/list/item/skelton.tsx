import Skeleton from "@mui/material/Skeleton";

import ListItem from ".";

const SkeletonListItem = () => (
  <ListItem
    icon={<Skeleton variant="circular" />}
    listItemTextProps={{
      primary: <Skeleton variant="text" />,
      secondary: <Skeleton variant="text" />,
    }}
  />
);
export default SkeletonListItem;
