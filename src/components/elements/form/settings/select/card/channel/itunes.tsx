import React from "react";

import type { ItunesArtist } from "@izszzz/itunes-search-api";
import type { Link } from "@prisma/client";
import { useRouter } from "next/router";

import { convertLocaleToLang } from "../../../../../../../helpers/itunes";
import { trpc } from "../../../../../../../utils/trpc";
import ChannelItunesCard from "../../../../../card/itunes/channel";
import ChannelItunesSquareCard from "../../../../../card/square/itunes/channel";
import ItunesSelectForm from "../itunes";

interface ItunesArtistSelectFormProps {
  link: Link | undefined;
  term: string;
  onSelect: (data: ItunesArtist | undefined) => void;
  onRemove: () => void;
}
const ItunesArtistSelectForm = ({
  link,
  term,
  onSelect,
  onRemove,
}: ItunesArtistSelectFormProps) => {
  const lang = convertLocaleToLang(useRouter().locale),
    { data } = trpc.itunes.findUniqueArtist.useQuery({
      id: link?.linkId,
      lang,
    }),
    { data: searchData } = trpc.itunes.searchArtists.useQuery({ term, lang });
  return (
    <ItunesSelectForm<ItunesArtist>
      largeCard={(value) =>
        value && <ChannelItunesCard data={value} onClick={onRemove} />
      }
      link={link}
      lookup={data}
      search={searchData}
      smallCard={(value) => (
        <ChannelItunesSquareCard data={value} onClick={onSelect} />
      )}
      term={term}
    />
  );
};

export default ItunesArtistSelectForm;
