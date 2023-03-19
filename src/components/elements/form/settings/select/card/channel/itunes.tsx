import React from "react";

import type { ItunesArtist } from "@izszzz/itunes-search-api";
import type { StreamingLink } from "@prisma/client";

import { itunes } from "../../../../../../../server/common/itunes";
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
  onSelect,
  onRemove,
  ...props
}: ItunesArtistSelectFormProps) => (
  <ItunesSelectForm<ItunesArtist>
    {...props}
    largeCard={(value) =>
      value && <ChannelItunesCard data={value} onClick={onRemove} />
    }
    lookup={itunes.lookupArtist}
    search={itunes.searchArtists}
    smallCard={(value) => (
      <ChannelItunesSquareCard data={value} onClick={onSelect} />
    )}
  />
);

export default ItunesArtistSelectForm;
