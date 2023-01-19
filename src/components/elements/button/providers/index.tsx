import Stack from "@mui/material/Stack";
import type { StackProps } from "@mui/material/Stack";
import { useSession } from "next-auth/react";
import { match } from "ts-pattern";

import { useProviders } from "../../../../hooks/useProvider";

import GoogleButton from "./google";
import SpotifyButton from "./spotify";

interface ProviderButtonsProps {
  stackProps?: StackProps;
}
const ProviderButtons = ({ stackProps }: ProviderButtonsProps) => {
  const { data: session } = useSession(),
    providers = useProviders();
  return (
    <Stack {...stackProps} spacing={2}>
      {providers.map((provider, i) => {
        const props = {
          key: i,
          disabled: session?.user?.providers.includes(provider.id),
        };
        return match(provider)
          .with({ id: "google" }, () => <GoogleButton {...props} />)
          .with({ id: "spotify" }, () => <SpotifyButton {...props} />)
          .otherwise(() => <></>);
      })}
    </Stack>
  );
};

export default ProviderButtons;
