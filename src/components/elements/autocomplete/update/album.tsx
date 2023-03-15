import React from "react";

import AlbumIcon from "@mui/icons-material/Album";
import type { Album } from "@prisma/client";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

import { searchMutate } from "../../../../helpers";
import setLocale from "../../../../helpers/locale";
import { trpc } from "../../../../utils/trpc";

import UpdateAutocomplete from ".";
import type { UpdateAutocompleteProps } from ".";

type AlbumUpdateAutocompleteProps = Pick<
  UpdateAutocompleteProps<Album, true, undefined, undefined>,
  "onChange" | "loading" | "value"
>;
const AlbumUpdateAutocomplete = ({
  ...props
}: AlbumUpdateAutocompleteProps) => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const search = trpc.search.album.useMutation({
    onError: () => enqueueSnackbar("artist.search error"),
  });
  return (
    <UpdateAutocomplete<Album, true>
      options={search.data || []}
      loading={search.isLoading}
      getOptionLabel={({ title }) => setLocale(title, router)}
      ChipProps={{ icon: <AlbumIcon /> }}
      onInputChange={(_e, v) => search.mutate(searchMutate(router, "title", v))}
      textFieldProps={{ label: "albums", margin: "dense" }}
      multiple
      {...props}
    />
  );
};

export default AlbumUpdateAutocomplete;
