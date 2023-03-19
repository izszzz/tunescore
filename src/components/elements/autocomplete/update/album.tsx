import React from "react";

import AlbumIcon from "@mui/icons-material/Album";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

import { searchMutate } from "../../../../helpers";
import setLocale from "../../../../helpers/locale";
import { trpc } from "../../../../utils/trpc";

import UpdateAutocomplete from ".";
import type { UpdateAutocompleteProps } from ".";

type Album = Prisma.AlbumGetPayload<{ include: { resource: true } }>;
type AlbumUpdateAutocompleteProps = Pick<
  UpdateAutocompleteProps<Album, true, undefined, undefined>,
  "onChange" | "loading" | "value"
>;
const AlbumUpdateAutocomplete = ({
  ...props
}: AlbumUpdateAutocompleteProps) => {
  const router = useRouter(),
    { enqueueSnackbar } = useSnackbar(),
    search = trpc.search.album.useMutation({
      onError: () => enqueueSnackbar("artist.search error"),
    });
  return (
    <UpdateAutocomplete<Album, true>
      ChipProps={{ icon: <AlbumIcon /> }}
      getOptionLabel={({ resource: { name } }) => setLocale(name, router)}
      loading={search.isLoading}
      multiple
      onInputChange={(_e, v) => search.mutate(searchMutate(router, v))}
      options={search.data || []}
      textFieldProps={{ label: "albums", margin: "dense" }}
      {...props}
    />
  );
};

export default AlbumUpdateAutocomplete;
