import type { ButtonProps } from "@mui/material/Button";
import Button from "@mui/material/Button";
import { signIn } from "next-auth/react";

import GoogleIcon from "../../icon/google";

const GoogleButton = (props: ButtonProps) => (
  <Button
    {...props}
    onClick={async () => await signIn("google")}
    startIcon={<GoogleIcon />}
    variant="outlined"
  >
    Login with Google
  </Button>
);

export default GoogleButton;
