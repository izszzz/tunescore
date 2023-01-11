import Button from "@mui/material/Button";
import { signIn } from "next-auth/react";
import SpotifyIcon from "../../icon/spotify";
import type { ButtonProps } from "@mui/material/Button";
import type { ClientSafeProvider } from "next-auth/react";

interface SpotifyButtons extends ButtonProps {
  provider: ClientSafeProvider;
}
const SpotifyButton = ({ provider, ...props }: SpotifyButtons) => {
  return (
    <Button
      {...props}
      variant="outlined"
      startIcon={<SpotifyIcon />}
      onClick={() => signIn(provider.id)}
      color="success"
    >
      Login with Spotify
    </Button>
  );
};

export default SpotifyButton;
