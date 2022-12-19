import type { NextPage } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import LoadingButton from "@mui/lab/LoadingButton";
import { Pull } from "@prisma/client";
import {
  Controller,
  FormContainer,
  TextFieldElement,
} from "react-hook-form-mui";
import MusicLayout, {
  MusicLayoutProps,
} from "../../../../components/layouts/show/music";
import { trpc } from "../../../../utils/trpc";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
const NewPull: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const id = router.query.id as string;
  const { enqueueSnackbar } = useSnackbar();
  const music = trpc.useQuery(
    [
      "music.findUniqueMusic",
      {
        where: { id: router.query.id as string },
        include: {
          user: true,
          band: true,
          artists: true,
          composers: true,
          lyrists: true,
          bookmarks: { where: { id: session.data?.user?.id } },
        },
      },
    ],
    {
      onError: () => {
        enqueueSnackbar("music.show error");
      },
    }
  );
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
    <MusicLayout data={musicData} activeTab="pullrequests">
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
