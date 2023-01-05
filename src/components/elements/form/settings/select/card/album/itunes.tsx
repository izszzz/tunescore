import React, { useEffect, useState } from "react";
import {
  lookupItunesAlbum,
  searchItunesAlbums,
} from "../../../../../../../helpers/itunes";
import CardSelectForm from "..";
import ItunesAlbumCard from "../../../../../card/album/itunes";
import type {
  ItunesResponse,
  ItunesAlbum,
} from "../../../../../../../helpers/itunes";
import type { StreamingLink } from "@prisma/client";

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
  const [options, setOptions] = useState<ItunesResponse<ItunesAlbum>>();
  const [value, setValue] = useState<ItunesAlbum>();
  const [page, setPage] = useState(0);
  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => {
    searchItunesAlbums({ term, offset: 12 * page, limit: 12 }).then((res) => {
      setOptions(res);
      setPage(page);
    });
  };
  useEffect(() => {
    if (streamingLink?.itunes?.id) {
      const id = new URL(streamingLink.itunes.id).pathname.split("/")[4];
      if (id) lookupItunesAlbum({ id }).then((res) => setValue(res.results[0]));
    } else
      searchItunesAlbums({ term, offset: 0, limit: 12 }).then((res) => {
        setValue(undefined);
        setOptions(res);
      });
  }, [streamingLink, term]);
  return (
    <CardSelectForm
      value={value}
      options={options?.results || []}
      largeCard={(value) =>
        value && (
          <ItunesAlbumCard size="large" data={value} onClick={onRemove} />
        )
      }
      smallCard={(value) =>
        value && (
          <ItunesAlbumCard size="small" data={value} onClick={onSelect} />
        )
      }
      gridProps={{
        item: true,
        xs: 6,
        sm: 4,
        md: 2,
      }}
      tablePaginationProps={{
        count: 100,
        rowsPerPage: 12,
        page: page,
        onPageChange: handleChangePage,
      }}
    />
  );
};

export default ItunesAlbumSelectForm;
