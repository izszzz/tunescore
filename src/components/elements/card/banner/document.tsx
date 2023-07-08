import Article from "@mui/icons-material/Article";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const DocumentBannerCard = () => {
  const { t } = useTranslation("src/components/card/banner/document");
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
          component={Link}
          href="/docs"
          size="small"
          startIcon={<Article />}
        >
          {t("button")}
        </Button>
      </CardActions>
    </Card>
  );
};

export default DocumentBannerCard;
