import React from "react";

import type { ItunesAlbum } from "@izszzz/itunes-search-api";
import type { StreamingLink } from "@prisma/client";

import { itunes } from "../../../../../../../server/common/itunes";
import AlbumItunesCard from "../../../../../card/itunes/album";
import AlbumItunesSquareCard from "../../../../../card/square/itunes/album";
import ItunesSelectForm from "../itunes";

interface ItunesAlbumSelectFormProps {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  onSelect: (data: ItunesAlbum | undefined) => void;
  onRemove: () => void;
}
const ItunesAlbumSelectForm = ({
  onSelect,
  onRemove,
  ...props
}: ItunesAlbumSelectFormProps) => (
  <ItunesSelectForm<ItunesAlbum>
    {...props}
    largeCard={(value) =>
      value && <AlbumItunesCard data={value} onClick={onRemove} />
    }
    lookup={itunes.lookupAlbum}
    search={itunes.searchAlbums}
    smallCard={(value) => (
      <AlbumItunesSquareCard data={value} onClick={onSelect} />
    )}
  />
);

export default ItunesAlbumSelectForm;
