import Button from "@mui/material/Button";
import { signIn } from "next-auth/react";
import GoogleIcon from "../../icon/google";
import type { ButtonProps } from "@mui/material/Button";
import type { ClientSafeProvider } from "next-auth/react";

interface GoogleButtons extends ButtonProps {
  provider: ClientSafeProvider;
}
const GoogleButton = ({ provider, ...props }: GoogleButtons) => {
  return (
    <Button
      {...props}
      variant="outlined"
      startIcon={<GoogleIcon />}
      onClick={() => signIn(provider.id)}
    >
      Login with Google
    </Button>
  );
};

export default GoogleButton;
