import React from "react";
import DefaultUpdateAutocomplete from "./default";
import type { Band } from "@prisma/client";
import type { DefaultUpdateAutocompleteProps } from "./default";
import { trpc } from "../../../../utils/trpc";
import { useSnackbar } from "notistack";
import setLocale from "../../../../helpers/setLocale";
import { useRouter } from "next/router";

type BandUpdateAutocomplete<T extends boolean | undefined = false> = Pick<
  DefaultUpdateAutocompleteProps<Band, T, undefined, undefined>,
  "onChange" | "loading" | "value" | "multiple"
>;
function BandUpdateAutocomplete<T extends boolean | undefined = false>({
  ...props
}: BandUpdateAutocomplete<T>) {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const searchBand = trpc.useMutation("search.band", {
    onError: () => {
      enqueueSnackbar("band.search error");
    },
  });
  return (
    <DefaultUpdateAutocomplete<Band, T>
      {...props}
      options={searchBand.data || []}
      getOptionLabel={(option) => setLocale(option.name, router) || ""}
      textFieldProps={{
        label: "band",
        margin: "dense",
        onChange: (e) =>
          searchBand.mutate({
            where: {
              name: {
                is: { [router.locale]: { contains: e.currentTarget.value } },
              },
            },
            take: 10,
          }),
      }}
    />
  );
}
export default BandUpdateAutocomplete;
