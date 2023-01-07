import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import router from "next/router";

const LocaleAlert = () => (
  <Alert
    severity="warning"
    action={
      <Button onClick={() => router.push(router.pathname + "/settings")}>
        ロケールを追加
      </Button>
    }
  >
    <AlertTitle>指定された言語の曲タイトルが登録されてねえ</AlertTitle>
    登録しろ
  </Alert>
);

export default LocaleAlert;
