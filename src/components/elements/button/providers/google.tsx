import Button from "@mui/material/Button";
import { signIn } from "next-auth/react";
import GoogleIcon from "../../icon/google";
import type { ClientSafeProvider } from "next-auth/react";

interface GoogleButtons {
  provider: ClientSafeProvider;
}
const GoogleButton = ({ provider }: GoogleButtons) => {
  return (
    <Button
      variant="outlined"
      startIcon={<GoogleIcon />}
      onClick={() => signIn(provider.id)}
    >
      Login with Google
    </Button>
  );
};

export default GoogleButton;
