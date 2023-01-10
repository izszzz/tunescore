import Button from "@mui/material/Button";
import { signIn } from "next-auth/react";
import SpotifyIcon from "../../icon/spotify";
import type { ClientSafeProvider } from "next-auth/react";

interface SpotifyButtons {
  provider: ClientSafeProvider;
}
const SpotifyButton = ({ provider }: SpotifyButtons) => {
  return (
    <Button
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
