import type { Link, ResourceUnionType } from "@prisma/client";
import { isNonEmpty } from "ts-array-length";
import { match } from "ts-pattern";

import { getSpotifyLink, getYoutubeLink } from "../../../../helpers/link";

import AppleButton from "./itunes";
import SpotifyButton from "./spotify";
import YoutubeButton from "./youtube";

interface LinkButtonsProps {
  data: Link[];
  type: ResourceUnionType;
}
const LinkButtons = ({ data, type }: LinkButtonsProps) => {
  if (isNonEmpty(data)) return <></>;
  return (
    <>
      {data.map((link) =>
        match(link)
          .with({ type: "iTunes" }, () => <AppleButton href={link.linkId} />)
          .with({ type: "Spotify" }, () => (
            <SpotifyButton href={getSpotifyLink(type, link.linkId)} />
          ))
          .with({ type: "YouTube" }, () => (
            <YoutubeButton href={getYoutubeLink(type, link.linkId)} />
          ))
          .with({ type: "Twitter" }, () => <></>)
          .exhaustive()
      )}
    </>
  );
};

export default LinkButtons;
