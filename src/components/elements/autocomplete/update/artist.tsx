import React from "react";

import type { Artist } from "@prisma/client";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

import { searchMutate } from "../../../../helpers";
import setLocale from "../../../../helpers/locale";
import { trpc } from "../../../../utils/trpc";
import ResourceIcon from "../../icon/resource";

import UpdateAutocomplete from ".";
import type { UpdateAutocompleteProps } from ".";

interface ArtistUpdateAutocomplete
  extends Pick<
    UpdateAutocompleteProps<Artist, true, undefined, undefined>,
    "onChange" | "loading" | "value"
  > {
  label: string;
}
const ArtistUpdateAutocomplete = ({
  label,
  ...props
}: ArtistUpdateAutocomplete) => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const search = trpc.search.artist.useMutation({
    onError: () => enqueueSnackbar("artist.search error"),
  });
  return (
    <UpdateAutocomplete<Artist, true>
      options={search.data || []}
      loading={search.isLoading}
      getOptionLabel={({ name }) => setLocale(name, router)}
      ChipProps={{ icon: <ResourceIcon resource="ARTIST" /> }}
      onInputChange={(_e, value) =>
        search.mutate(searchMutate(router, "name", value))
      }
      textFieldProps={{ label, margin: "dense" }}
      multiple
      {...props}
    />
  );
};

export default ArtistUpdateAutocomplete;
