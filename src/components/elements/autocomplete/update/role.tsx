import React from "react";

import LocalOffer from "@mui/icons-material/LocalOffer";
import type { Role } from "@prisma/client";
import { useSnackbar } from "notistack";

import { trpc } from "../../../../utils/trpc";

import UpdateAutocomplete from ".";
import type { UpdateAutocompleteProps } from ".";

export type RoleUpdateAutocompleteProps = Pick<
  UpdateAutocompleteProps<Role, true, undefined, undefined>,
  "onChange" | "loading" | "value"
>;
const RoleUpdateAutocomplete = (props: RoleUpdateAutocompleteProps) => {
  const { enqueueSnackbar } = useSnackbar(),
    search = trpc.search.tag.useMutation({
      onError: () => enqueueSnackbar("tag.search error"),
    });
  return (
    <UpdateAutocomplete<Role, true>
      {...props}
      ChipProps={{ size: "small", icon: <LocalOffer /> }}
      getOptionLabel={({ name }) => name}
      multiple
      onInputChange={(_e, value) =>
        search.mutate({ where: { name: { contains: value } } })
      }
      options={search.data || []}
      textFieldProps={{ label: "tag", margin: "dense" }}
    />
  );
};

export default RoleUpdateAutocomplete;
