import React from "react";
import axios from "axios";
import CardSelectForm from ".";
import type { AxiosResponse } from "axios";
import type { spotify } from "../../../../../../server/common/spotify";
import type { CardSelectFormProps } from ".";
import type { StreamingLink } from "@prisma/client";

interface SpotifySelectFormProps<T>
  extends Pick<
    CardSelectFormProps<T, SpotifyApi.PagingObject<T>["items"]>,
    "largeCard" | "smallCard"
  > {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  type: Parameters<typeof spotify.search>[1];
  lookup: (id: string) => Promise<AxiosResponse<T>>;
}
function SpotifySelectForm<T extends SpotifyApi.TrackObjectFull>({
  streamingLink,
  term,
  type,
  largeCard,
  smallCard,
  lookup,
}: SpotifySelectFormProps<T>) {
  return (
    <CardSelectForm<T, SpotifyApi.PagingObject<T>["items"]>
      link={streamingLink?.spotify}
      lookup={(id) => lookup(id).then(({ data }) => data)}
      search={() =>
        axios
          .get<SpotifyApi.PagingObject<T>>("/api/spotify/search", {
            params: { term, type },
            withCredentials: true,
            paramsSerializer: { indexes: null },
          })
          .then(({ data }) => data.items)
      }
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
        page: 0,
        onPageChange: () => undefined,
      }}
    />
  );
}

export default SpotifySelectForm;
