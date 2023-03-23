import type { Prisma, ResourceUnionType } from "@prisma/client";

import { getSpotifyLink, getYoutubeLink } from "../../../../helpers/link";

import AppleButton from "./itunes";
import SpotifyButton from "./spotify";
import YoutubeButton from "./youtube";

interface LinkButtonsProps {
  data: Prisma.LinkListGetPayload<{
    include: { streaming: true; account: true };
  }>;
  type: ResourceUnionType;
}
const LinkButtons = ({ data, type }: LinkButtonsProps) => {
  if (!data.streaming) return <></>;
  const {
    streaming: { youtube, itunes, spotify },
  } = data;

  return (
    <>
      {itunes?.id && <AppleButton href={itunes.id} />}
      {spotify?.id && <SpotifyButton href={getSpotifyLink(type, spotify.id)} />}
      {youtube?.id && <YoutubeButton href={getYoutubeLink(type, youtube.id)} />}
    </>
  );
};

export default LinkButtons;
