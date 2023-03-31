import type { Link, ResourceUnionType } from "@prisma/client";
import { isNonEmpty } from "ts-array-length";
import { match } from "ts-pattern";

import { getSpotifyURL, getYoutubeURL } from "../../../../helpers/link";

import AppleButton from "./itunes";
import SpotifyButton from "./spotify";
import YoutubeButton from "./youtube";

interface LinkButtonsProps {
  data: Link[];
  type: ResourceUnionType;
}
const LinkButtons = ({ data, type }: LinkButtonsProps) => {
  if (!isNonEmpty(data)) return <></>;
  return (
    <>
      {data.map((link) =>
        match(link)
          .with({ type: "iTunes" }, () => <AppleButton href={link.linkId} />)
          .with({ type: "Spotify" }, () => (
            <SpotifyButton href={getSpotifyURL(type, link.linkId)} />
          ))
          .with({ type: "YouTube" }, () => (
            <YoutubeButton href={getYoutubeURL(type, link.linkId)} />
          ))
          .with({ type: "Twitter" }, () => <></>)
          .exhaustive()
      )}
    </>
  );
};

export default LinkButtons;
