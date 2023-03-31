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
import { getCurrentUserId, isAuth } from "../../../../helpers/user";
import { musicShowQuery } from "../../../../paths/musics/[id]";
import { trpc } from "../../../../utils/trpc";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
const NewPull: NextPage = () => {
  const router = useRouter<"/musics/[id]">(),
    { enqueueSnackbar } = useSnackbar(),
    { data: session, status } = useSession(),
    { show } = useModal("auth-dialog"),
    { id } = router.query,
    userId = getCurrentUserId(session),
    query = musicShowQuery({ router, session }),
    music = trpc.resource.findUniqueResource.useQuery(query, {
      onError: () => enqueueSnackbar("music.show error"),
    }),
    create = trpc.pull.createOnePull.useMutation({
      onSuccess: (data) =>
        router.push({
          pathname: "/musics/[id]/pulls/[pullId]",
          query: { id, pullId: data.id },
        }),
      onError: (error) => console.log(error),
    });

  if (!music.data) return <></>;
  const musicData = music.data as MusicLayoutProps["data"];
  const handleSubmit = (data: Pull) => {
    if (isAuth(status))
      create.mutate({
        data: {
          ...data,
          original: musicData?.music?.score ?? "",
          changed: musicData?.music?.score ?? "",
          status: "DRAFT",
          music: { connect: { id } },
          user: { connect: { id: userId } },
        },
      });
    else show();
  };
  return (
    <MusicLayout activeTab="pullrequests" data={musicData} query={query}>
      <FormContainer onSuccess={handleSubmit}>
        <TextFieldElement fullWidth margin="dense" name="title" />
        <Controller
          name="body"
          render={({ field }) => <MDEditor {...field} />}
        />
        <LoadingButton
          disableElevation
          fullWidth
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

export default NewPull;
