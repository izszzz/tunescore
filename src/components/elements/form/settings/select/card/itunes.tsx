import React, { useEffect, useState } from "react";

import type {
  BaseLookupParams,
  BaseSearchParams,
  ItunesAlbum,
  ItunesArtist,
  ItunesMusic,
  ItunesResponse,
} from "@izszzz/itunes-search-api";
import type { StreamingLink } from "@prisma/client";
import type { AxiosResponse } from "axios";

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
  search: (
    params: BaseSearchParams
  ) => Promise<AxiosResponse<ItunesResponse<T>>>;
  lookup: (
    params: BaseLookupParams
  ) => Promise<AxiosResponse<ItunesResponse<T>>>;
}
function ItunesSelectForm<T extends ItunesMusic | ItunesArtist | ItunesAlbum>({
  streamingLink,
  term,
  largeCard,
  smallCard,
  search,
  lookup,
}: ItunesSelectFormProps<T>) {
  const [results, setResults] = useState<T[]>();
  const [result, setResult] = useState<T>();
  useEffect(() => {
    if (streamingLink?.itunes?.id) {
      const id = new URL(streamingLink.itunes.id).pathname.split("/")[4];
      if (id) lookup({ id }).then(({ data }) => setResult(data.results[0]));
    }
    search({ term, offset: 0, limit: 12 }).then(({ data }) => {
      setResults(data.results);
    });
  }, [lookup, search, streamingLink?.itunes?.id, term]);
  return (
    <CardSelectForm<T, ItunesResponse<T>["results"]>
      gridProps={{ item: true, xs: 6, sm: 4, md: 2 }}
      largeCard={largeCard}
      link={streamingLink?.itunes}
      lookup={result}
      search={results}
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
