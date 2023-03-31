import React from "react";

import LocalOffer from "@mui/icons-material/LocalOffer";
import type { Role } from "@prisma/client";
import { useSnackbar } from "notistack";

import { trpc } from "../../../../utils/trpc";

import UpdateAutocomplete from ".";
import type { UpdateAutocompleteProps } from ".";

type CustomRole = Role & { participationId: string };
export type ParticipationUpdateAutocompleteProps = Pick<
  UpdateAutocompleteProps<CustomRole, true, undefined, undefined>,
  "onChange" | "loading" | "value"
> & { participationId: string };
const ParticipationUpdateAutocomplete = ({
  participationId,
  ...props
}: ParticipationUpdateAutocompleteProps) => {
  const { enqueueSnackbar } = useSnackbar(),
    search = trpc.search.role.useMutation({
      onError: () => enqueueSnackbar("role.search error"),
    });
  return (
    <UpdateAutocomplete<CustomRole, true>
      {...props}
      ChipProps={{ size: "small", icon: <LocalOffer /> }}
      getOptionLabel={({ name }) => name}
      multiple
      onInputChange={(_e, value) =>
        search.mutate({ where: { name: { contains: value } } })
      }
      options={search.data?.map((role) => ({ ...role, participationId })) ?? []}
      textFieldProps={{ label: "tag", margin: "dense" }}
    />
  );
};

export default ParticipationUpdateAutocomplete;
