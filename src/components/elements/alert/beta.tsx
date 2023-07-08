import React from "react";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import { useTranslation } from "next-i18next";

const BetaAlert = () => {
  const { t } = useTranslation("src/components/alert/beta");
  return (
    <Box my={2}>
      <Alert severity="error" variant="outlined">
        {t("alert")}
      </Alert>
    </Box>
  );
};

export default BetaAlert;
