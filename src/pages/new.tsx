import {
  TextFieldElement,
  FormContainer,
  RadioButtonGroup,
  useForm,
} from "react-hook-form-mui";

import { useModal } from "@ebay/nice-modal-react";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import type { Prisma } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import { match } from "ts-pattern";

import MusicNewForm from "../components/elements/form/new/music";
import NewLayout from "../components/layouts/new";
import { isAuth } from "../helpers/user";
import { trpc } from "../utils/trpc";

const New: NextPage = () => {
  const router = useRouter(),
    { enqueueSnackbar } = useSnackbar(),
    { status } = useSession(),
    { show } = useModal("auth-dialog"),
    formContext = useForm<Prisma.ResourceCreateInput>({
      defaultValues: { unionType: "Music" },
    }),
    { watch } = formContext,
    unionType = watch("unionType"),
    create = trpc.resource.createOneResource.useMutation({
      onSuccess: ({ id }) =>
        router.push({
          pathname: match(unionType)
            .with("Music", () => "/musics/[id]" as const)
            .with("Artist", () => "/artists/[id]" as const)
            .with("Album", () => "/albums/[id]" as const)
            .with("Band", () => "/bands/[id]" as const)
            .exhaustive(),
          query: { id },
        }),
      onError: () => enqueueSnackbar("resource.create fail"),
    }),
    handleSubmit = (resource: Prisma.ResourceCreateInput) => {
      if (isAuth(status)) create.mutate({ data: resource });
      else show();
    };
  return (
    <NewLayout>
      <Box my={3}>
        <FormContainer formContext={formContext} onSuccess={handleSubmit}>
          <Box mb={3}>
            <RadioButtonGroup
              label="Type"
              name="unionType"
              options={[
                { id: "Music", label: "Music" },
                { id: "Artist", label: "Artist" },
                { id: "Album", label: "Album" },
                { id: "Band", label: "Band" },
              ]}
              required
              row
            />
            <Box my={3}>
              <TextFieldElement
                fullWidth
                label="Name"
                margin="dense"
                name={"name.create." + router.locale}
                required
              />
            </Box>
            <Box>
              {match(unionType)
                .with("Music", () => <MusicNewForm formContext={formContext} />)
                .with("Artist", () => <></>)
                .with("Album", () => <></>)
                .with("Band", () => <></>)
                .exhaustive()}
            </Box>
            <LoadingButton
              disableElevation
              disabled={create.isLoading}
              fullWidth
              type="submit"
              variant="contained"
            >
              submit
            </LoadingButton>
          </Box>
        </FormContainer>
      </Box>
    </NewLayout>
  );
};

export default New;
