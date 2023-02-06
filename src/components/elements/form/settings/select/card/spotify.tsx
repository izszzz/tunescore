import React from "react";

import type { StreamingLink } from "@prisma/client";

import type { SearchType } from "../../../../../../helpers/spotify";
import { trpc } from "../../../../../../utils/trpc";

import CardSelectForm from ".";
import type { CardSelectFormProps } from ".";

interface SpotifySelectFormProps<T>
  extends Pick<
    CardSelectFormProps<T, SpotifyApi.PagingObject<T>["items"]>,
    "largeCard" | "smallCard"
  > {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  lookup: T | undefined;
}
function SpotifySelectForm<T extends SpotifyApi.TrackObjectFull>({
  streamingLink,
  term,
  largeCard,
  smallCard,
  lookup,
}: SpotifySelectFormProps<T>) {
  const { data } = trpc.spotify.searchTracks.useQuery(term);
  return (
    <CardSelectForm<T, SpotifyApi.PagingObject<T>["items"]>
      link={streamingLink?.spotify}
      lookup={lookup}
      search={data?.items}
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
