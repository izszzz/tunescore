import React from "react";

import LocalOffer from "@mui/icons-material/LocalOffer";
import type { Tag } from "@prisma/client";
import { useSnackbar } from "notistack";

import { trpc } from "../../../../utils/trpc";

import UpdateAutocomplete from ".";
import type { UpdateAutocompleteProps } from ".";

type TagUpdateAutocomplete = Pick<
  UpdateAutocompleteProps<Tag, true, undefined, undefined>,
  "onChange" | "loading" | "value"
>;
const TagUpdateAutocomplete = (props: TagUpdateAutocomplete) => {
  const { enqueueSnackbar } = useSnackbar();
  const search = trpc.search.tag.useMutation({
    onError: () => enqueueSnackbar("artist.search error"),
  });
  return (
    <UpdateAutocomplete<Tag, true>
      {...props}
      ChipProps={{ size: "small", icon: <LocalOffer /> }}
      getOptionLabel={({ name }) => name}
      loading={search.isLoading}
      multiple
      options={search.data || []}
      textFieldProps={{
        label: "tags",
        margin: "dense",
        onChange: ({ currentTarget: { value } }) =>
          search.mutate({ where: { name: { contains: value } }, take: 10 }),
      }}
    />
  );
};

export default TagUpdateAutocomplete;
