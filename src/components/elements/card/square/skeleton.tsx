import Skeleton from "@mui/material/Skeleton";

const SkeletonSquareCard = () => (
  <Skeleton
    height="100%"
    sx={{ aspectRatio: "1 / 1" }}
    variant="rounded"
    width="100%"
  />
);

export default SkeletonSquareCard;
