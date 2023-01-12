import React, { useEffect, useState } from "react";
import axios from "axios";
import CardSelectForm from ".";
import type { AxiosResponse } from "axios";
import type { spotify } from "../../../../../../server/common/spotify";
import type { CardSelectFormProps } from ".";
import type { StreamingLink } from "@prisma/client";

interface SpotifySelectFormProps<T>
  extends Pick<CardSelectFormProps<T | undefined>, "largeCard" | "smallCard"> {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  type: Parameters<typeof spotify.search>[1];
  lookup: (id: string) => Promise<AxiosResponse<T>>;
}
function SpotifySelectForm<T>({
  streamingLink,
  term,
  type,
  largeCard,
  smallCard,
  lookup,
}: SpotifySelectFormProps<T>) {
  const [options, setOptions] = useState<SpotifyApi.PagingObject<T>["items"]>();
  const [value, setValue] = useState<T>();
  const [page, setPage] = useState(0);
  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) =>
    axios
      .get<SpotifyApi.PagingObject<T>>("/api/spotify/search", {
        params: { term, type },
      })
      .then(({ data }) => {
        setPage(page);
        setOptions(data.items);
      });
  useEffect(() => {
    if (streamingLink?.spotify?.id) {
      const id = streamingLink.spotify.id;
      if (id) lookup(id).then(({ data }) => setValue(data));
    } else
      axios
        .get<SpotifyApi.PagingObject<T>>("/api/spotify/search", {
          params: { term, type },
          withCredentials: true,
          paramsSerializer: { indexes: null },
        })
        .then(({ data }) => {
          setValue(undefined);
          setOptions(data.items);
        });
  }, [lookup, streamingLink, term, type]);
  return (
    <CardSelectForm
      value={value}
      options={options || []}
      largeCard={largeCard}
      smallCard={smallCard}
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
}

export default SpotifySelectForm;
