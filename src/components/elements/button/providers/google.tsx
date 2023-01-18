import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";
import type { ClientSafeProvider } from "next-auth/react";
import GoogleIcon from "../../icon/google";
import { signIn } from "next-auth/react";

interface GoogleButtons extends ButtonProps {
  provider: ClientSafeProvider;
}
const GoogleButton = ({ provider, ...props }: GoogleButtons) => (
  <Button
    {...props}
    variant="outlined"
    startIcon={<GoogleIcon />}
    onClick={async () => await signIn(provider.id)}
  >
    Login with Google
  </Button>
);

export default GoogleButton;
