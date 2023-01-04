import { useSnackbar } from "notistack";
import React from "react";
import { trpc } from "../../../../utils/trpc";
import ResourceIcon from "../../icon/resource";
import DefaultUpdateAutocomplete from "./default";
import type { DefaultUpdateAutocompleteProps } from "./default";
import type { Tag } from "@prisma/client";

type TagUpdateAutocomplete = Pick<
  DefaultUpdateAutocompleteProps<Tag, true, undefined, undefined>,
  "onChange" | "loading" | "value"
>;
const TagUpdateAutocomplete = (props: TagUpdateAutocomplete) => {
  const { enqueueSnackbar } = useSnackbar();
  const search = trpc.useMutation("search.tag", {
    onError: () => {
      enqueueSnackbar("artist.search error");
    },
  });
  return (
    <DefaultUpdateAutocomplete<Tag, true>
      {...props}
      options={search.data || []}
      getOptionLabel={(option) => option.name || ""}
      ChipProps={{ size: "small", icon: <ResourceIcon resource="TAG" /> }}
      textFieldProps={{
        label: "tags",
        margin: "dense",
        onChange: (e) =>
          search.mutate({
            where: {
              name: {
                contains: e.currentTarget.value,
              },
            },
            take: 10,
          }),
      }}
      multiple
    />
  );
};

export default TagUpdateAutocomplete;
