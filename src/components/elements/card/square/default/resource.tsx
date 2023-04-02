import type { Prisma } from "@prisma/client";
import { match, P } from "ts-pattern";

import type { ResourceListArgsType } from "../../../../../helpers/resource";

import AlbumDefaultSquareCard from "./album";
import ArtistDefaultSquareCard from "./artist";
import BandDefaultSquareCard from "./band";
import MusicDefaultSquareCard from "./music";

interface ResourceDefaultSquareCardProps {
  data: Prisma.ResourceGetPayload<ResourceListArgsType>;
}
const ResourceDefaultSquareCard = ({ data }: ResourceDefaultSquareCardProps) =>
  match(data)
    .with({ unionType: "Music", music: P.not(P.nullish) }, (data) => (
      <MusicDefaultSquareCard data={data} />
    ))
    .with({ unionType: "Album", album: P.not(P.nullish) }, (data) => (
      <AlbumDefaultSquareCard data={data} />
    ))
    .with({ unionType: "Band", band: P.not(P.nullish) }, (data) => (
      <BandDefaultSquareCard data={data} />
    ))
    .with({ unionType: "Artist", artist: P.not(P.nullish) }, (data) => (
      <ArtistDefaultSquareCard data={data} />
    ))
    .otherwise(() => <></>);
export default ResourceDefaultSquareCard;
