import React from "react";

import type {
  ItunesAlbum,
  ItunesArtist,
  ItunesMusic,
  ItunesResponse,
} from "@izszzz/itunes-search-api";
import type { StreamingLink } from "@prisma/client";

import CardSelectForm from ".";
import type { CardSelectFormProps } from ".";

interface ItunesSelectFormProps<
  T extends ItunesMusic | ItunesArtist | ItunesAlbum
> extends Pick<
    CardSelectFormProps<T, ItunesResponse<T>["results"]>,
    "largeCard" | "smallCard"
  > {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  search: ItunesResponse<T> | null | undefined;
  lookup: ItunesResponse<T> | null | undefined;
}
function ItunesSelectForm<T extends ItunesMusic | ItunesArtist | ItunesAlbum>({
  streamingLink,
  largeCard,
  smallCard,
  search,
  lookup,
}: ItunesSelectFormProps<T>) {
  return (
    <CardSelectForm<T, ItunesResponse<T>["results"]>
      gridProps={{ item: true, xs: 6, sm: 4, md: 2 }}
      largeCard={largeCard}
      link={streamingLink?.itunes}
      lookup={lookup?.results[0]}
      search={search?.results}
      smallCard={smallCard}
      tablePaginationProps={{
        count: 100,
        rowsPerPage: 12,
        page: 0,
        onPageChange: () => undefined,
      }}
    />
  );
}

export default ItunesSelectForm;
