import React from "react";

import type { ItunesAlbum } from "@izszzz/itunes-search-api";
import type { Link } from "@prisma/client";

import { trpc } from "../../../../../../../utils/trpc";
import AlbumItunesCard from "../../../../../card/itunes/album";
import AlbumItunesSquareCard from "../../../../../card/square/itunes/album";
import ItunesSelectForm from "../itunes";

interface ItunesAlbumSelectFormProps {
  link: Link | undefined;
  term: string;
  onSelect: (data: ItunesAlbum | undefined) => void;
  onRemove: () => void;
}
const ItunesAlbumSelectForm = ({
  link,
  term,
  onSelect,
  onRemove,
}: ItunesAlbumSelectFormProps) => {
  const { data } = trpc.itunes.findUniqueAlbum.useQuery(link?.linkId),
    { data: searchData } = trpc.itunes.searchAlbums.useQuery(term);
  return (
    <ItunesSelectForm<ItunesAlbum>
      largeCard={(value) =>
        value && <AlbumItunesCard data={value} onClick={onRemove} />
      }
      link={link}
      lookup={data}
      search={searchData}
      smallCard={(value) => (
        <AlbumItunesSquareCard data={value} onClick={onSelect} />
      )}
      term={term}
    />
  );
};

export default ItunesAlbumSelectForm;
