import React from "react";

import type { StreamingLink } from "@prisma/client";

import type { ItunesAlbum } from "../../../../../../../helpers/itunes";
import { itunes } from "../../../../../../../server/common/itunes";
import ItunesAlbumCard from "../../../../../card/album/itunes";
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
    search={itunes.searchAlbums}
    lookup={itunes.lookupAlbum}
    largeCard={(value) =>
      value && <ItunesAlbumCard size="large" data={value} onClick={onRemove} />
    }
    smallCard={(value) => (
      <ItunesAlbumCard size="small" data={value} onClick={onSelect} />
    )}
  />
);

export default ItunesAlbumSelectForm;
