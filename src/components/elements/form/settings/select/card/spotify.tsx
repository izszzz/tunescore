import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { trpc } from "../../../../../../utils/trpc";
import CardSelectForm from ".";
import type { spotify } from "../../../../../../server/common/spotify";
import type { CardSelectFormProps } from ".";
import type { StreamingLink } from "@prisma/client";

interface SpotifySelectFormProps<T>
  extends Pick<CardSelectFormProps<T | undefined>, "largeCard" | "smallCard"> {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  type: Parameters<typeof spotify.search>[1];
  lookup: (id: string) => T;
}
function SpotifySelectForm<T>({
  streamingLink,
  term,
  type,
  largeCard,
  smallCard,
  lookup,
}: SpotifySelectFormProps<T>) {
  const [options, setOptions] = useState<SpotifyApi.SearchResponse>();
  const [value, setValue] = useState<T>();
  const [page, setPage] = useState(0);
  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) =>
    axios
      .get<SpotifyApi.SearchResponse>("/api/spotify/search", {
        params: { term, type },
      })
      .then((res) => {
        setPage(page);
        setOptions(res.data);
      });
  useEffect(() => {
    if (streamingLink?.spotify?.id) {
      const id = streamingLink.spotify.id;
      if (id)
        lookup(id).then((res) => {
          setValue(res.data.body);
        });
    } else
      axios
        .get<{
          body: SpotifyApi.SearchResponse;
        }>("/api/spotify/search", {
          params: { term, type },
          withCredentials: true,
          paramsSerializer: { indexes: null },
        })
        .then((res) => {
          setValue(undefined);
          const keys = Object.keys(res.data.body);
          setOptions(res.data.body[keys[0] as string].items);
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
