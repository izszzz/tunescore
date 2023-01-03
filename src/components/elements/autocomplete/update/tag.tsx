import { Prisma } from "@prisma/client";
import { useSnackbar } from "notistack";
import React from "react";
import { trpc } from "../../../../utils/trpc";
import ResourceIcon from "../../icon/resource";
import DefaultUpdateAutocomplete from "./default";
import type {
  DefaultUpdateAutocompleteProps,
} from "./default";
import type { Tag } from "@prisma/client";

type TagUpdateAutocomplete = Pick<
    DefaultUpdateAutocompleteProps<Tag, true, undefined, undefined>,
    "onChange" | "loading" | "value"
  >
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
      ChipProps={{ icon: <ResourceIcon resource="TAG" /> }}
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
