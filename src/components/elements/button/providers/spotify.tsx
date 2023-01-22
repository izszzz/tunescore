import type { ButtonProps } from "@mui/material/Button";
import Button from "@mui/material/Button";
import { signIn } from "next-auth/react";

import SpotifyIcon from "../../icon/spotify";

const SpotifyButton = (props: ButtonProps) => (
  <Button
    {...props}
    variant="outlined"
    startIcon={<SpotifyIcon />}
    onClick={async () => signIn("spotify")}
    color="success"
  >
    Login with Spotify
  </Button>
);

export default SpotifyButton;
