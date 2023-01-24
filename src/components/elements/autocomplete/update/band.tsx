import React from "react";

import type { Band } from "@prisma/client";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

import setLocale from "../../../../helpers/locale";
import { trpc } from "../../../../utils/trpc";

import UpdateAutocomplete from ".";
import type { UpdateAutocompleteProps } from ".";

type BandUpdateAutocomplete<T extends boolean | undefined = false> = Pick<
  UpdateAutocompleteProps<Band, T, undefined, undefined>,
  "onChange" | "loading" | "value" | "multiple"
>;
function BandUpdateAutocomplete<T extends boolean | undefined = false>({
  ...props
}: BandUpdateAutocomplete<T>) {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const search = trpc.search.band.useMutation({
    onError: () => {
      enqueueSnackbar("band.search error");
    },
  });
  return (
    <UpdateAutocomplete<Band, T>
      {...props}
      options={search.data || []}
      getOptionLabel={(option) => setLocale(option.name, router)}
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
        label: "band",
        margin: "dense",
      }}
    />
  );
}
export default BandUpdateAutocomplete;
