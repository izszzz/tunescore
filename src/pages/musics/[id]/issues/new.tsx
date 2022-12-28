import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Controller,
  FormContainer,
  TextFieldElement,
  useForm,
} from "react-hook-form-mui";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import { trpc } from "../../../../utils/trpc";
import MusicLayout from "../../../../components/layouts/show/music";
import type { MusicLayoutProps } from "../../../../components/layouts/show/music";
import type { NextPage } from "next";
import type { Issue } from "@prisma/client";
import { musicShowPath } from "../../../../paths/musics/[id]";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
const Issues: NextPage = () => {
  const formContext = useForm<Issue>();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const session = useSession();
  const path = musicShowPath({
    id: router.query.id as string,
    userId: session.data?.user?.id,
  });
  const { data } = trpc.useQuery(path, {
    onError: () => {
      enqueueSnackbar("music.show error");
    },
  });
  const create = trpc.useMutation(["issue.createOneIssue"], {
    onSuccess: () =>
      router.push({
        pathname: "/musics/[id]/issues",
        query: { id: router.query.id as string },
      }),
    onError: () => {
      enqueueSnackbar("issue.create error");
    },
  });
  const handleSubmit = (data: Issue) =>
    create.mutate({
      data: {
        ...data,
        music: { connect: { id: router.query.id as string } },
        user: { connect: { id: session.data?.user?.id as string } },
      },
    });
  if (!data) return <></>;
  const musicData = data as MusicLayoutProps["data"];
  return (
    <MusicLayout data={musicData} path={path} activeTab="issues">
      <FormContainer onSuccess={handleSubmit} formContext={formContext}>
        <TextFieldElement name="title" margin="dense" fullWidth />
        <Controller
          name="body"
          render={({ field }) => <MDEditor {...field} />}
        />
        <LoadingButton
          type="submit"
          loading={create.isLoading}
          variant="contained"
        >
          Submit
        </LoadingButton>
      </FormContainer>
    </MusicLayout>
  );
};

export default Issues;
