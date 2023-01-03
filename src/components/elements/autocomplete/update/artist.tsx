import React from "react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { trpc } from "../../../../utils/trpc";
import ResourceIcon from "../../icon/resource";
import setLocale from "../../../../helpers/locale";
import DefaultUpdateAutocomplete from "./default";
import type {
  DefaultUpdateAutocompleteProps,
} from "./default";
import type { Artist } from "@prisma/client";

interface ArtistUpdateAutocomplete
  extends Pick<
    DefaultUpdateAutocompleteProps<Artist, true, undefined, undefined>,
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
  const searchArtist = trpc.useMutation("search.artist", {
    onError: () => {
      enqueueSnackbar("artist.search error");
    },
  });
  return (
    <DefaultUpdateAutocomplete<Artist, true>
      options={searchArtist.data || []}
      getOptionLabel={(option) => setLocale(option.name, router)}
      ChipProps={{ icon: <ResourceIcon resource="ARTIST" /> }}
      textFieldProps={{
        label,
        margin: "dense",
        onChange: (e) =>
          searchArtist.mutate({
            where: {
              name: {
                is: { [router.locale]: { contains: e.currentTarget.value } },
              },
            },
            take: 10,
          }),
      }}
      multiple
      {...props}
    />
  );
};

export default ArtistUpdateAutocomplete;
