import { useSnackbar } from "notistack";
import React from "react";
import { trpc } from "../../../../utils/trpc";
import ResourceIcon from "../../icon/resource";
import UpdateAutocomplete from ".";
import type { UpdateAutocompleteProps } from ".";
import type { Role } from "@prisma/client";

export type RoleUpdateAutocompleteProps = Pick<
  UpdateAutocompleteProps<Role, true, undefined, undefined>,
  "onChange" | "loading" | "value"
>;
const RoleUpdateAutocomplete = (props: RoleUpdateAutocompleteProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const search = trpc.useMutation("search.tag", {
    onError: () => {
      enqueueSnackbar("tag.search error");
    },
  });
  return (
    <UpdateAutocomplete<Role, true>
      {...props}
      options={search.data || []}
      getOptionLabel={(option) => option.name}
      ChipProps={{ size: "small", icon: <ResourceIcon resource="TAG" /> }}
      onInputChange={(_e, value) =>
        search.mutate({
          where: {
            name: {
              contains: value,
            },
          },
          take: 10,
        })
      }
      textFieldProps={{
        label: "tag",
        margin: "dense",
      }}
      multiple
    />
  );
};

export default RoleUpdateAutocomplete;
