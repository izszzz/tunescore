import React from "react";

import type { StreamingLink } from "@prisma/client";

import CardSelectForm from ".";
import type { CardSelectFormProps } from ".";

interface SpotifySelectFormProps<Value, Options>
  extends Pick<
    CardSelectFormProps<Value, SpotifyApi.PagingObject<Options>["items"]>,
    "largeCard" | "smallCard"
  > {
  streamingLink: StreamingLink | null | undefined;
  lookup: Value | undefined;
  search: Options[];
}
function SpotifySelectForm<
  Value extends
    | SpotifyApi.SingleTrackResponse
    | SpotifyApi.SingleArtistResponse,
  Options extends SpotifyApi.TrackObjectFull | SpotifyApi.ArtistObjectFull
>({
  streamingLink,
  lookup,
  search,
  largeCard,
  smallCard,
}: SpotifySelectFormProps<Value, Options>) {
  return (
    <CardSelectForm<Value, Options[]>
      link={streamingLink?.spotify}
      lookup={lookup}
      search={search}
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
