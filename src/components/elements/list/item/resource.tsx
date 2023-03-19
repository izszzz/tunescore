import type { Prisma } from "@prisma/client";
import { match, P } from "ts-pattern";

import type { ResourceListArgsType } from "../../../../helpers/resource";

import AlbumListItem from "./album";
import ArtistListItem from "./artist";
import BandListItem from "./band";
import MusicListItem from "./music";
interface ResourceListItemProps {
  data: Prisma.ResourceGetPayload<ResourceListArgsType>;
}
const ResourceListItem = ({ data }: ResourceListItemProps) =>
  match(data)
    .with({ unionType: "Music", music: P.select(P.not(P.nullish)) }, (data) => (
      <MusicListItem data={data} />
    ))
    .with({ unionType: "Album", album: P.select(P.not(P.nullish)) }, (data) => (
      <AlbumListItem data={data} />
    ))
    .with(
      { unionType: "Artist", artist: P.select(P.not(P.nullish)) },
      (data) => <ArtistListItem data={data} />
    )
    .with({ unionType: "Band", band: P.select(P.not(P.nullish)) }, (data) => (
      <BandListItem data={data} />
    ))
    .otherwise(() => <></>);

export default ResourceListItem;
