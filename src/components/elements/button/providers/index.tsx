import Stack from "@mui/material/Stack";
import type { StackProps } from "@mui/material/Stack";
import GoogleButton from "./google";
import { match } from "ts-pattern";
import { useProviders } from "../../../../hooks/useProvider";
import SpotifyButton from "./spotify";

interface ProviderButtonsProps {
  stackProps?: StackProps;
}
const ProviderButtons = ({ stackProps }: ProviderButtonsProps) => {
  const providers = useProviders();
  return (
    <Stack {...stackProps} spacing={2}>
      {providers.map((provider, i) => {
        const props = { key: i, provider };
        return match(provider)
          .with({ id: "google" }, () => <GoogleButton {...props} />)
          .with({ id: "spotify" }, () => <SpotifyButton {...props} />)
          .otherwise(() => <></>);
      })}
    </Stack>
  );
};

export default ProviderButtons;
