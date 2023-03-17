import React from "react";

import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

import { searchMutate } from "../../../../helpers";
import setLocale from "../../../../helpers/locale";
import { trpc } from "../../../../utils/trpc";

import UpdateAutocomplete from ".";
import type { UpdateAutocompleteProps } from ".";

type Band = Prisma.BandGetPayload<{ include: { resource: true } }>;
type BandUpdateAutocomplete<T extends boolean | undefined = false> = Pick<
  UpdateAutocompleteProps<Band, T, undefined, undefined>,
  "onChange" | "loading" | "value" | "multiple"
>;
function BandUpdateAutocomplete<T extends boolean | undefined = false>({
  ...props
}: BandUpdateAutocomplete<T>) {
  const { enqueueSnackbar } = useSnackbar(),
    router = useRouter(),
    search = trpc.search.band.useMutation({
      onError: () => enqueueSnackbar("band.search error"),
    });
  return (
    <UpdateAutocomplete<Band, T>
      {...props}
      options={search.data || []}
      getOptionLabel={({ resource: { name } }) => setLocale(name, router)}
      onInputChange={(_e, value) => search.mutate(searchMutate(router, value))}
      textFieldProps={{ label: "band", margin: "dense" }}
    />
  );
}
export default BandUpdateAutocomplete;
