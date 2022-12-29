import { Prisma, Tag } from "@prisma/client";
import { useSnackbar } from "notistack";
import React from "react";
import { trpc } from "../../../../utils/trpc";
import ResourceIcon from "../../icon/resource";
import DefaultUpdateAutocomplete, {
  DefaultUpdateAutocompleteProps,
} from "./default";

interface TagUpdateAutocomplete
  extends Pick<
    DefaultUpdateAutocompleteProps<Tag, true, undefined, undefined>,
    "onChange" | "loading" | "value"
  > {}
const TagUpdateAutocomplete = (props: TagUpdateAutocomplete) => {
  const { enqueueSnackbar } = useSnackbar();
  const searchTag = trpc.useMutation("search.tag", {
    onError: () => {
      enqueueSnackbar("artist.search error");
    },
  });
  return (
    <DefaultUpdateAutocomplete<Tag, true>
      {...props}
      options={searchTag.data || []}
      getOptionLabel={(option) => option.name || ""}
      ChipProps={{ icon: <ResourceIcon resource="tag" /> }}
      textFieldProps={{
        label: "tags",
        margin: "dense",
        onChange: (e) =>
          searchTag.mutate({
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
