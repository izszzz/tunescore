import React from "react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { trpc } from "../../../../utils/trpc";
import ResourceIcon from "../../icon/resource";
import setLocale from "../../../../helpers/locale";
import UpdateAutocomplete from ".";
import type { UpdateAutocompleteProps } from ".";
import type { Album } from "@prisma/client";

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
    onError: () => {
      enqueueSnackbar("artist.search error");
    },
  });
  return (
    <UpdateAutocomplete<Album, true>
      options={search.data || []}
      loading={search.isLoading}
      getOptionLabel={(option) => setLocale(option.title, router)}
      ChipProps={{ icon: <ResourceIcon resource="ALBUM" /> }}
      onInputChange={(_e, value) =>
        search.mutate({
          where: {
            title: {
              is: { [router.locale]: { contains: value } },
            },
          },
          take: 10,
        })
      }
      textFieldProps={{
        label: "albums",
        margin: "dense",
      }}
      multiple
      {...props}
    />
  );
};

export default AlbumUpdateAutocomplete;
