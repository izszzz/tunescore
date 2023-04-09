import React from "react";

import Alert from "@mui/material/Alert";
import { useRouter } from "next/router";

const BetaAlert = () => {
  const router = useRouter();
  return (
    <Alert severity="error" variant="outlined">
      {router.locale === "ja"
        ? "このサービスはベータ版です。予告なくデータが削除される場合があります。"
        : router.locale === "en"
        ? "This service is in beta. Data may be deleted without notice."
        : ""}
    </Alert>
  );
};

export default BetaAlert;
