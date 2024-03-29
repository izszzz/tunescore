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
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSnackbar } from "notistack";
import { match } from "ts-pattern";

import MusicNewForm from "../components/elements/form/new/music";
import DefaultSingleColumnLayout from "../components/layouts/single_column/default";
import { getResourceShowPathname } from "../helpers/resource";
import { isAuth } from "../helpers/user";
import { trpc } from "../utils/trpc";

const New: NextPage = () => {
  const router = useRouter(),
    { t } = useTranslation(),
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
          pathname: getResourceShowPathname(unionType),
          query: { id },
        }),
      onError: () => enqueueSnackbar("resource.create fail"),
    }),
    handleSubmit = (resource: Prisma.ResourceCreateInput) => {
      if (isAuth(status)) create.mutate({ data: resource });
      else show();
    };
  return (
    <DefaultSingleColumnLayout contained>
      <Box my={3}>
        <FormContainer formContext={formContext} onSuccess={handleSubmit}>
          <Box mb={3}>
            <RadioButtonGroup
              label="type"
              name="unionType"
              onChange={() => {
                formContext.resetField("music");
                formContext.resetField("album");
                formContext.resetField("band");
                formContext.resetField("artist");
              }}
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
                .with("Artist", () => null)
                .with("Album", () => null)
                .with("Band", () => null)
                .exhaustive()}
            </Box>
            <LoadingButton
              disableElevation
              disabled={create.isLoading}
              fullWidth
              type="submit"
              variant="contained"
            >
              {t("submit")}
            </LoadingButton>
          </Box>
        </FormContainer>
      </Box>
    </DefaultSingleColumnLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
  props: await serverSideTranslations(ctx.locale ?? "", ["common"]),
});

export default New;
