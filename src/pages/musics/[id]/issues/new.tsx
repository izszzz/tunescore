import React from "react";
import {
  Controller,
  FormContainer,
  TextFieldElement,
  useForm,
} from "react-hook-form-mui";

import { useModal } from "@ebay/nice-modal-react";
import LoadingButton from "@mui/lab/LoadingButton";
import type { Issue } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSnackbar } from "notistack";

import ResourceShowLayout from "../../../../components/layouts/show/resource";
import { resourceMusicShowQuery } from "../../../../helpers/resource";
import { getCurrentUserId, isAuth } from "../../../../helpers/user";
import { trpc } from "../../../../utils/trpc";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
const Issues: NextPage = () => {
  const formContext = useForm<Issue>(),
    { t } = useTranslation(),
    { enqueueSnackbar } = useSnackbar(),
    router = useRouter<"/musics/[id]">(),
    { data: session, status } = useSession(),
    { id } = router.query,
    { show } = useModal("auth-dialog"),
    userId = getCurrentUserId(session),
    create = trpc.issue.createOneIssue.useMutation({
      onSuccess: () =>
        router.push({
          pathname: "/musics/[id]/issues",
          query: { id },
        }),
      onError: () => enqueueSnackbar("issue.create error"),
    }),
    handleSubmit = (data: Issue) => {
      if (isAuth(status))
        create.mutate({
          data: {
            ...data,
            music: { connect: { id: data.musicId } },
            user: { connect: { id: userId } },
          },
        });
      else show();
    };
  return (
    <ResourceShowLayout activeTab="issues" getQuery={resourceMusicShowQuery}>
      {() => (
        <FormContainer formContext={formContext} onSuccess={handleSubmit}>
          <TextFieldElement fullWidth margin="dense" name="title" />
          <Controller
            name="body"
            render={({ field }) => <MDEditor {...field} />}
          />
          <LoadingButton
            loading={create.isLoading}
            type="submit"
            variant="contained"
          >
            {t("submit")}
          </LoadingButton>
        </FormContainer>
      )}
    </ResourceShowLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
  props: await serverSideTranslations(ctx.locale ?? "", ["common"]),
});

export default Issues;
