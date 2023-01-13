import React from "react";
import {
  lookupItunesAlbum,
  searchItunesAlbums,
} from "../../../../../../../helpers/itunes";
import ItunesAlbumCard from "../../../../../card/album/itunes";
import ItunesSelectForm from "../itunes";
import type { ItunesAlbum } from "../../../../../../../helpers/itunes";
import type { StreamingLink } from "@prisma/client";

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
    search={searchItunesAlbums}
    lookup={lookupItunesAlbum}
    largeCard={(value) =>
      value && <ItunesAlbumCard size="large" data={value} onClick={onRemove} />
    }
    smallCard={(value) =>
      value && <ItunesAlbumCard size="small" data={value} onClick={onSelect} />
    }
  />
);

export default ItunesAlbumSelectForm;
