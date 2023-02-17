import React from "react";

import type { StreamingLink } from "@prisma/client";

import type { ItunesArtist } from "../../../../../../../helpers/itunes";
import { itunes } from "../../../../../../../server/common/itunes";
import ItunesChannelCard from "../../../../../card/channel/itunes";
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
    search={itunes.searchArtists}
    lookup={itunes.lookupArtist}
    largeCard={(value) =>
      value && (
        <ItunesChannelCard size="large" data={value} onClick={onRemove} />
      )
    }
    smallCard={(value) => (
      <ItunesChannelCard size="small" data={value} onClick={onSelect} />
    )}
  />
);

export default ItunesArtistSelectForm;
