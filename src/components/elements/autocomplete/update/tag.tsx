import React from "react";

import LocalOffer from "@mui/icons-material/LocalOffer";
import type { Genre } from "@prisma/client";
import { useSnackbar } from "notistack";

import { trpc } from "../../../../utils/trpc";

import UpdateAutocomplete from ".";
import type { UpdateAutocompleteProps } from ".";

type GenreUpdateAutocomplete = Pick<
  UpdateAutocompleteProps<Genre, true, undefined, undefined>,
  "onChange" | "loading" | "value"
>;
const GenreUpdateAutocomplete = (props: GenreUpdateAutocomplete) => {
  const { enqueueSnackbar } = useSnackbar();
  const search = trpc.search.genre.useMutation({
    onError: () => enqueueSnackbar("artist.search error"),
  });
  return (
    <UpdateAutocomplete<Genre, true>
      {...props}
      ChipProps={{ size: "small", icon: <LocalOffer /> }}
      getOptionLabel={({ name }) => name}
      loading={search.isLoading}
      multiple
      options={search.data || []}
      textFieldProps={{
        label: "genres",
        margin: "dense",
        onChange: ({ currentTarget: { value } }) =>
          search.mutate({ where: { name: { contains: value } }, take: 10 }),
      }}
    />
  );
};

export default GenreUpdateAutocomplete;
