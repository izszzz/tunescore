import React from "react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { trpc } from "../../../../utils/trpc";
import ResourceIcon from "../../icon/resource";
import setLocale from "../../../../helpers/locale";
import UpdateAutocomplete from ".";
import type { UpdateAutocompleteProps } from ".";
import type { Artist } from "@prisma/client";

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
  const search = trpc.useMutation("search.artist", {
    onError: () => {
      enqueueSnackbar("artist.search error");
    },
  });
  return (
    <UpdateAutocomplete<Artist, true>
      options={search.data || []}
      loading={search.isLoading}
      getOptionLabel={(option) => setLocale(option.name, router)}
      ChipProps={{ icon: <ResourceIcon resource="ARTIST" /> }}
      onInputChange={(_e, value) =>
        search.mutate({
          where: {
            name: {
              is: { [router.locale]: { contains: value } },
            },
          },
          take: 10,
        })
      }
      textFieldProps={{
        label,
        margin: "dense",
      }}
      multiple
      {...props}
    />
  );
};

export default ArtistUpdateAutocomplete;
