import Skeleton from "@mui/material/Skeleton";

interface SquareCardProps {
  size: string;
}

const SkeletonSquareCard = ({ size }: SquareCardProps) => (
  <Skeleton height={size} variant="rounded" width={size} />
);

export default SkeletonSquareCard;
