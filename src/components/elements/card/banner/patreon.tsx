import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import { FaPatreon } from "react-icons/fa";

const PatreonBannerCard = () => {
  const { t } = useTranslation("src/components/card/banner/patreon");
  return (
    <Card variant="outlined">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography variant="h5">{t("title")}</Typography>
          <Typography variant="body1">{t("body")}</Typography>
        </CardContent>
      </Box>
      <CardActions>
        <Button
          color="primary"
          component="a"
          href="patreon.com/user?u=89182047"
          size="small"
          startIcon={<FaPatreon />}
        >
          {t("button")}
        </Button>
      </CardActions>
    </Card>
  );
};

export default PatreonBannerCard;
