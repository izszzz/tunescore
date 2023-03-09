import React from "react";

import type { Tag } from "@prisma/client";
import { useSnackbar } from "notistack";

import { trpc } from "../../../../utils/trpc";
import ResourceIcon from "../../icon/resource";

import UpdateAutocomplete from ".";
import type { UpdateAutocompleteProps } from ".";

type TagUpdateAutocomplete = Pick<
  UpdateAutocompleteProps<Tag, true, undefined, undefined>,
  "onChange" | "loading" | "value"
>;
const TagUpdateAutocomplete = (props: TagUpdateAutocomplete) => {
  const { enqueueSnackbar } = useSnackbar();
  const search = trpc.search.tag.useMutation({
    onError: () => {
      enqueueSnackbar("artist.search error");
    },
  });
  return (
    <UpdateAutocomplete<Tag, true>
      {...props}
      options={search.data || []}
      loading={search.isLoading}
      getOptionLabel={(option) => option.name}
      ChipProps={{ size: "small", icon: <ResourceIcon resource="TAG" /> }}
      textFieldProps={{
        label: "tags",
        margin: "dense",
        onChange: ({ currentTarget: { value } }) =>
          search.mutate({ where: { name: { contains: value } }, take: 10 }),
      }}
      multiple
    />
  );
};

export default TagUpdateAutocomplete;
