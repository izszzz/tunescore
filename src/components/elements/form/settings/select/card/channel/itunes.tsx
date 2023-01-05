import React, { useEffect, useState } from "react";
import {
  lookupItunesArtist,
  searchItunesArtists,
} from "../../../../../../../helpers/itunes";
import CardSelectForm from "..";
import ItunesChannelCard from "../../../../../card/channel/itunes";
import type {
  ItunesResponse,
  ItunesArtist,
} from "../../../../../../../helpers/itunes";
import type { StreamingLink } from "@prisma/client";

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
  const [options, setOptions] = useState<ItunesResponse<ItunesArtist>>();
  const [value, setValue] = useState<ItunesArtist>();
  const [page, setPage] = useState(0);
  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => {
    searchItunesArtists({ term, offset: 12 * page, limit: 12 }).then((res) => {
      setOptions(res);
      setPage(page);
    });
  };
  useEffect(() => {
    if (streamingLink?.itunes?.id) {
      const id = new URL(streamingLink.itunes.id).pathname.split("/")[4];
      if (id)
        lookupItunesArtist({ id }).then((res) => setValue(res.results[0]));
    } else
      searchItunesArtists({ term, offset: 0, limit: 12 }).then((res) => {
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
          <ItunesChannelCard size="large" data={value} onClick={onRemove} />
        )
      }
      smallCard={(value) =>
        value && (
          <ItunesChannelCard size="small" data={value} onClick={onSelect} />
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

export default ItunesArtistSelectForm;
