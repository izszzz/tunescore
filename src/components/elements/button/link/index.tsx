import type { Link, ResourceUnionType } from "@prisma/client";
import { isNonEmpty } from "ts-array-length";
import { match } from "ts-pattern";

import { convertToAffiliateUrl } from "../../../../helpers/itunes";
import { getSpotifyURL, getYoutubeURL } from "../../../../helpers/link";

import AppleButton from "./itunes";
import SpotifyButton from "./spotify";
import YoutubeButton from "./youtube";

interface LinkButtonsProps {
  data: Link[];
  type: ResourceUnionType;
}
const LinkButtons = ({ data, type }: LinkButtonsProps) => {
  if (!isNonEmpty(data)) return null;
  return (
    <>
      {data.map((link) =>
        match(link)
          .with({ type: "iTunes" }, () => (
            <AppleButton
              href={convertToAffiliateUrl(link.linkId).toString()}
              key={link.linkId}
            />
          ))
          .with({ type: "Spotify" }, () => (
            <SpotifyButton
              href={getSpotifyURL(type, link.linkId)}
              key={link.linkId}
            />
          ))
          .with({ type: "YouTube" }, () => (
            <YoutubeButton
              href={getYoutubeURL(type, link.linkId)}
              key={link.linkId}
            />
          ))
          .with({ type: "Twitter" }, () => null)
          .exhaustive()
      )}
    </>
  );
};

export default LinkButtons;
