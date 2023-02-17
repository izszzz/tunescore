import {
  Controller,
  FormContainer,
  TextFieldElement,
} from "react-hook-form-mui";

import { useModal } from "@ebay/nice-modal-react";
import LoadingButton from "@mui/lab/LoadingButton";
import type { Pull } from "@prisma/client";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import MusicLayout from "../../../../components/layouts/show/music";
import type { MusicLayoutProps } from "../../../../components/layouts/show/music";
import { getRouterId } from "../../../../helpers/router";
import { getCurrentUserId } from "../../../../helpers/user";
import { musicShowQuery } from "../../../../paths/musics/[id]";
import { trpc } from "../../../../utils/trpc";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
const NewPull: NextPage = () => {
  const router = useRouter(),
    { enqueueSnackbar } = useSnackbar(),
    { data: session, status } = useSession(),
    { show } = useModal("auth-dialog"),
    id = getRouterId(router),
    userId = getCurrentUserId(session),
    query = musicShowQuery({ router, session }),
    music = trpc.music.findUniqueMusic.useQuery(query, {
      onError: () => {
        enqueueSnackbar("music.show error");
      },
    }),
    create = trpc.pull.createOnePull.useMutation({
      onSuccess: (data) =>
        router.push({
          pathname: "/musics/[id]/pulls/[pullId]",
          query: { id, pullId: data.id },
        }),
      onError: (error) => console.log(error),
    });
  const handleSubmit = (data: Pull) => {
    if (status === "authenticated")
      create.mutate({
        data: {
          ...data,
          score: {
            set: {
              original: music.data?.score || "",
              changed: music.data?.score || "",
            },
          },
          status: "DRAFT",
          music: { connect: { id } },
          user: { connect: { id: userId } },
        },
      });
    else show();
  };
  if (!music.data) return <></>;
  const musicData = music.data as MusicLayoutProps["data"];
  return (
    <MusicLayout data={musicData} query={query} activeTab="pullrequests">
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
