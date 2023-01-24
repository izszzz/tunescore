import type { Prisma } from "@prisma/client";

import AppleButton from "./itunes";
import SpotifyButton from "./spotify";
import YoutubeButton from "./youtube";

interface LinkProps {
  data: Prisma.LinkListGetPayload<{
    include: { streaming: true; account: true };
  }>;
}
const LinkButtons = ({ data }: LinkProps) => {
  if (!data.streaming) return <></>;
  const {
    streaming: { youtube, itunes, spotify },
  } = data;

  return (
    <>
      {itunes?.id && <AppleButton href={itunes.id} />}
      {spotify?.id && <SpotifyButton href={spotify.id} />}
      {youtube?.id && <YoutubeButton href={youtube.id} />}
    </>
  );
};

export default LinkButtons;
