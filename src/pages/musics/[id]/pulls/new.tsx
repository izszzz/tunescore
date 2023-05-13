import {
  Controller,
  FormContainer,
  TextFieldElement,
  useForm,
} from "react-hook-form-mui";

import { useModal } from "@ebay/nice-modal-react";
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";
import type { Pull } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import ScoreDropzone from "../../../../components/elements/form/dropzone/score";
import ResourceShowLayout from "../../../../components/layouts/show/resource";
import { resourceMusicShowQuery } from "../../../../helpers/resource";
import { getCurrentUserId, isAuth } from "../../../../helpers/user";
import { trpc } from "../../../../utils/trpc";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
const NewPull: NextPage = () => {
  const router = useRouter<"/musics/[id]">(),
    { t } = useTranslation(),
    formContext = useForm<Pull>(),
    { data: session, status } = useSession(),
    { show } = useModal("auth-dialog"),
    { id } = router.query,
    { setValue } = formContext,
    userId = getCurrentUserId(session),
    create = trpc.pull.createOnePull.useMutation({
      onSuccess: (data) =>
        router.push({
          pathname: "/musics/[id]/pulls/[pullId]",
          query: { id, pullId: data.id },
        }),
      onError: (error) => console.log(error),
    });

  return (
    <ResourceShowLayout
      activeTab="pullrequests"
      getQuery={resourceMusicShowQuery}
    >
      {(data) => {
        const handleSubmit = (pull: Pull) => {
          if (isAuth(status))
            create.mutate({
              data: {
                ...pull,
                original: data?.music?.score ?? "",
                changed: pull.changed ?? data?.music?.score,
                music: { connect: { id: data.music?.id } },
                user: { connect: { id: userId } },
              },
            });
          else show();
        };
        return (
          <FormContainer formContext={formContext} onSuccess={handleSubmit}>
            <Stack spacing={3}>
              <TextFieldElement fullWidth margin="dense" name="title" />
              <Controller
                name="body"
                render={({ field }) => <MDEditor {...field} />}
              />
              <ScoreDropzone
                onChange={(value) =>
                  value &&
                  setValue(
                    "changed",
                    (data?.music?.score ?? "") +
                      "\r\n" +
                      "// LOADED" +
                      "\r\n" +
                      value
                  )
                }
              />
              <LoadingButton
                disableElevation
                fullWidth
                loading={create.isLoading}
                type="submit"
                variant="contained"
              >
                {t("submit")}
              </LoadingButton>
            </Stack>
          </FormContainer>
        );
      }}
    </ResourceShowLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
  props: await serverSideTranslations(ctx.locale ?? "", ["common"]),
});

export default NewPull;
