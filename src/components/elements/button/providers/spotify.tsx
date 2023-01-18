import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";
import type { ClientSafeProvider } from "next-auth/react";
import { signIn } from "next-auth/react";

import SpotifyIcon from "../../icon/spotify";

interface SpotifyButtonsProps extends ButtonProps {
  provider: Readonly<ClientSafeProvider>;
}
const SpotifyButton = ({ provider, ...props }: SpotifyButtonsProps) => (
  <Button
    {...props}
    variant="outlined"
    startIcon={<SpotifyIcon />}
    onClick={async () => signIn(provider.id)}
    color="success"
  >
    Login with Spotify
  </Button>
);

export default SpotifyButton;
