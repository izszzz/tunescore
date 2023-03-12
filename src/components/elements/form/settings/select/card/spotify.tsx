import React from "react";

import type { StreamingLink } from "@prisma/client";
import { useSession } from "next-auth/react";

import SpotifyButton from "../../../../button/providers/spotify";

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
    | SpotifyApi.SingleArtistResponse
    | SpotifyApi.SingleAlbumResponse,
  Options extends
    | SpotifyApi.TrackObjectFull
    | SpotifyApi.ArtistObjectFull
    | SpotifyApi.AlbumObjectFull
>({
  streamingLink,
  lookup,
  search,
  largeCard,
  smallCard,
}: SpotifySelectFormProps<Value, Options>) {
  const { data: session } = useSession();
  if (!session?.user?.providers.includes("spotify")) return <SpotifyButton />;
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
