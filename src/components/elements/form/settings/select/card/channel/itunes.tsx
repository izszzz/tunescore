import React from "react";
import {
  lookupItunesArtist,
  searchItunesArtists,
} from "../../../../../../../helpers/itunes";
import ItunesChannelCard from "../../../../../card/channel/itunes";
import ItunesSelectForm from "../itunes";
import type { ItunesArtist } from "../../../../../../../helpers/itunes";
import type { StreamingLink } from "@prisma/client";

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
    search={searchItunesArtists}
    lookup={lookupItunesArtist}
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
