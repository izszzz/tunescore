import React from "react";

import type { ItunesAlbum } from "@izszzz/itunes-search-api";
import type { StreamingLink } from "@prisma/client";

import { trpc } from "../../../../../../../utils/trpc";
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
  streamingLink,
  term,
  onSelect,
  onRemove,
}: ItunesAlbumSelectFormProps) => {
  const { data } = trpc.itunes.findUniqueAlbum.useQuery(
      streamingLink?.itunes?.id
    ),
    { data: searchData } = trpc.itunes.searchAlbums.useQuery(term);
  return (
    <ItunesSelectForm<ItunesAlbum>
      largeCard={(value) =>
        value && <AlbumItunesCard data={value} onClick={onRemove} />
      }
      lookup={data}
      search={searchData}
      smallCard={(value) => (
        <AlbumItunesSquareCard data={value} onClick={onSelect} />
      )}
      streamingLink={streamingLink}
      term={term}
    />
  );
};

export default ItunesAlbumSelectForm;
