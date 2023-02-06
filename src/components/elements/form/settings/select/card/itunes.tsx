import React, { useEffect, useState } from "react";

import type { StreamingLink } from "@prisma/client";

import type {
  ItunesResponse,
  searchItunes,
  BaseSearchParams,
  BaseLookupParams,
  lookupItunes,
  ItunesMusic,
  ItunesArtist,
  ItunesAlbum,
} from "../../../../../../helpers/itunes";

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
  search: (params: BaseSearchParams) => ReturnType<typeof searchItunes<T>>;
  lookup: (params: BaseLookupParams) => ReturnType<typeof lookupItunes<T>>;
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
      if (id) lookup({ id }).then((res) => setResult(res.results[0]));
    }
    search({ term, offset: 0, limit: 12 }).then(({ results }) =>
      setResults(results)
    );
  }, [lookup, search, streamingLink?.itunes?.id, term]);
  return (
    <CardSelectForm<T, ItunesResponse<T>["results"]>
      link={streamingLink?.itunes}
      lookup={result}
      search={results}
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
        // onPageChange: handleChangePage,
      }}
    />
  );
}

export default ItunesSelectForm;
