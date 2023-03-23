import type { ButtonProps } from "@mui/material/Button";
import Button from "@mui/material/Button";
import { signIn } from "next-auth/react";
import { FaSpotify } from "react-icons/fa";

const SpotifyButton = (props: ButtonProps) => (
  <Button
    {...props}
    color="success"
    onClick={async () => signIn("spotify")}
    startIcon={<FaSpotify />}
    variant="outlined"
  >
    Login with Spotify
  </Button>
);

export default SpotifyButton;
