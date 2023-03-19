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
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import MusicLayout from "../../../../components/layouts/show/music";
import type { MusicLayoutProps } from "../../../../components/layouts/show/music";
import { getCurrentUserId, isAuth } from "../../../../helpers/user";
import { musicShowQuery } from "../../../../paths/musics/[id]";
import { trpc } from "../../../../utils/trpc";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
const Issues: NextPage = () => {
  const formContext = useForm<Issue>(),
    { enqueueSnackbar } = useSnackbar(),
    router = useRouter<"/musics/[id]">(),
    { data: session, status } = useSession(),
    { id } = router.query,
    { show } = useModal("auth-dialog"),
    userId = getCurrentUserId(session),
    query = musicShowQuery({ router, session }),
    { data } = trpc.music.findUniqueMusic.useQuery(query, {
      onError: () => enqueueSnackbar("music.show error"),
    }),
    create = trpc.issue.createOneIssue.useMutation({
      onSuccess: () =>
        router.push({
          pathname: "/musics/[id]/issues",
          query: { id },
        }),
      onError: () => {
        enqueueSnackbar("issue.create error");
      },
    }),
    handleSubmit = (data: Issue) => {
      if (isAuth(status))
        create.mutate({
          data: {
            ...data,
            music: { connect: { id } },
            user: { connect: { id: userId } },
          },
        });
      else show();
    };
  if (!data) return <></>;
  const musicData = data as MusicLayoutProps["data"];
  return (
    <MusicLayout activeTab="issues" data={musicData} query={query}>
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
          Submit
        </LoadingButton>
      </FormContainer>
    </MusicLayout>
  );
};

export default Issues;
