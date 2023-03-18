import { FormContainer, TextFieldElement } from "react-hook-form-mui";

import { useModal } from "@ebay/nice-modal-react";
import LoadingButton from "@mui/lab/LoadingButton";
import type { Prisma } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import NewLayout from "../../components/layouts/new";
import { isAuth } from "../../helpers/user";
import { trpc } from "../../utils/trpc";

const NewArtist: NextPage = () => {
  const router = useRouter(),
    { status } = useSession(),
    { show } = useModal("auth-dialog"),
    create = trpc.artist.createOneArtist.useMutation({
      onSuccess: ({ id }) =>
        router.push({ pathname: "/artists/[id]", query: { id } }),
    });
  const handleSubmit = ({
    resource,
    ...artist
  }: Prisma.ArtistGetPayload<{ include: { resource: true } }>) => {
    if (isAuth(status))
      create.mutate({
        data: {
          ...artist,
          resource: { create: { ...resource, unionType: "Artist" } },
        },
      });
    else show();
  };
  return (
    <NewLayout>
      <FormContainer onSuccess={handleSubmit}>
        <TextFieldElement
          fullWidth
          label="Name"
          margin="dense"
          name={"name." + router.locale}
          required
        />
        <LoadingButton
          disableElevation
          disabled={create.isLoading}
          fullWidth
          type="submit"
          variant="contained"
        >
          submit
        </LoadingButton>
      </FormContainer>
    </NewLayout>
  );
};

export default NewArtist;
