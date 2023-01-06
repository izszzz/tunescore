import React, { useEffect, useState } from "react";
import CardSelectForm from "./";
import type { CardSelectFormProps } from "./";
import type {
  ItunesResponse,
  searchItunes,
  BaseSearchParams,
  BaseLookupParams,
  lookupItunes,
} from "../../../../../../helpers/itunes";
import type { StreamingLink } from "@prisma/client";

interface ItunesSelectFormProps<T>
  extends Pick<CardSelectFormProps<T | undefined>, "largeCard" | "smallCard"> {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  search: (params: BaseSearchParams) => ReturnType<typeof searchItunes<T>>;
  lookup: (params: BaseLookupParams) => ReturnType<typeof lookupItunes<T>>;
}
function ItunesSelectForm<T>({
  streamingLink,
  term,
  largeCard,
  smallCard,
  search,
  lookup,
}: ItunesSelectFormProps<T>) {
  const [options, setOptions] = useState<ItunesResponse<T>>();
  const [value, setValue] = useState<T>();
  const [page, setPage] = useState(0);
  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) =>
    search({ term, offset: 12 * page, limit: 12 }).then((res) => {
      setOptions(res);
      setPage(page);
    });
  useEffect(() => {
    if (streamingLink?.itunes?.id) {
      const id = new URL(streamingLink.itunes.id).pathname.split("/")[4];
      if (id) lookup({ id }).then((res) => setValue(res.results[0]));
    } else
      search({ term, offset: 0, limit: 12 }).then((res) => {
        setValue(undefined);
        setOptions(res);
      });
  }, [lookup, search, streamingLink, term, value]);
  return (
    <CardSelectForm
      value={value}
      options={options?.results || []}
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

export default ItunesSelectForm;
