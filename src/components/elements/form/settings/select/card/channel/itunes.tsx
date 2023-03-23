import React from "react";

import type { ItunesArtist } from "@izszzz/itunes-search-api";
import type { StreamingLink } from "@prisma/client";

import { trpc } from "../../../../../../../utils/trpc";
import ChannelItunesCard from "../../../../../card/itunes/channel";
import ChannelItunesSquareCard from "../../../../../card/square/itunes/channel";
import ItunesSelectForm from "../itunes";

interface ItunesArtistSelectFormProps {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  onSelect: (data: ItunesArtist | undefined) => void;
  onRemove: () => void;
}
const ItunesArtistSelectForm = ({
  streamingLink,
  term,
  onSelect,
  onRemove,
}: ItunesArtistSelectFormProps) => {
  const { data } = trpc.itunes.findUniqueArtist.useQuery(
      streamingLink?.itunes?.id
    ),
    { data: searchData } = trpc.itunes.searchArtists.useQuery(term);
  return (
    <ItunesSelectForm<ItunesArtist>
      largeCard={(value) =>
        value && <ChannelItunesCard data={value} onClick={onRemove} />
      }
      lookup={data}
      search={searchData}
      smallCard={(value) => (
        <ChannelItunesSquareCard data={value} onClick={onSelect} />
      )}
      streamingLink={streamingLink}
      term={term}
    />
  );
};

export default ItunesArtistSelectForm;
