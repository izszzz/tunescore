import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Controller,
  FormContainer,
  TextFieldElement,
} from "react-hook-form-mui";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import { trpc } from "../../../../utils/trpc";
import MusicLayout from "../../../../components/layouts/show/music";
import type { MusicLayoutProps } from "../../../../components/layouts/show/music";
import type { Pull } from "@prisma/client";
import type { NextPage } from "next";
import { musicShowPath } from "../../../../paths/musics/[id]";
import { getRouterId } from "../../../../helpers/router";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
const NewPull: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const id = getRouterId(router);
  const { enqueueSnackbar } = useSnackbar();
  const path = musicShowPath({ router, session });
  const music = trpc.useQuery(path, {
    onError: () => {
      enqueueSnackbar("music.show error");
    },
  });
  const create = trpc.useMutation(["pull.createOnePull"], {
    onSuccess: (data) =>
      router.push({
        pathname: "/musics/[id]/pulls/[pullId]",
        query: { id, pullId: data.id },
      }),
    onError: (error) => console.log(error),
  });
  const handleSubmit = (data: Pull) =>
    create.mutate({
      data: {
        ...data,
        score: {
          set: {
            original: "",
            changed: "",
          },
        },
        status: "DRAFT",
        music: { connect: { id } },
        user: { connect: { id: session.data?.user?.id as string } },
      },
    });
  if (!music.data) return <></>;
  const musicData = music.data as MusicLayoutProps["data"];
  return (
    <MusicLayout data={musicData} path={path} activeTab="pullrequests">
      <FormContainer onSuccess={handleSubmit}>
        <TextFieldElement name="title" margin="dense" fullWidth />
        <Controller
          name="body"
          render={({ field }) => <MDEditor {...field} />}
        />
        <LoadingButton
          type="submit"
          loading={create.isLoading}
          variant="contained"
          fullWidth
          disableElevation
        >
          Submit
        </LoadingButton>
      </FormContainer>
    </MusicLayout>
  );
};

export default NewPull;
