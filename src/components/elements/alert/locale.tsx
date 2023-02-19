import { useModal } from "@ebay/nice-modal-react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import router from "next/router";
import { useSession } from "next-auth/react";

const LocaleAlert = () => {
  const { show } = useModal("auth-dialog"),
    { status } = useSession();

  return (
    <Alert
      severity="warning"
      action={
        <Button
          onClick={() => {
            if (status === "authenticated")
              router.push(router.pathname + "/settings");
            else show();
          }}
        >
          Add Locale
        </Button>
      }
    >
      <AlertTitle>Not Found your langage </AlertTitle>
      please register
    </Alert>
  );
};

export default LocaleAlert;
