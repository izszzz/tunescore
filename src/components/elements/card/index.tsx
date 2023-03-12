import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import CloseIconButton from "../button/icon/close";

interface IndexCardProps {
  title: string;
  image?: string;
  body?: React.ReactNode;
  onClose?: () => void;
}
const IndexCard = ({ title, body, image, onClose }: IndexCardProps) => (
  <Card sx={{ display: "flex" }}>
    <CardContent>
      {image && (
        <CardMedia component="img" sx={{ borderRadius: "3px" }} image={image} />
      )}
    </CardContent>
    <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
      <Box>
        <Typography variant="h6">{title}</Typography>
        {body}

        <br />
      </Box>
      <Box display="flex" alignItems="center">
        <CloseIconButton onClick={onClose} />
      </Box>
    </CardContent>
  </Card>
);

export default IndexCard;
