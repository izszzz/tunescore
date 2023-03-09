import { FormContainer, TextFieldElement } from "react-hook-form-mui";

import { useModal } from "@ebay/nice-modal-react";
import LoadingButton from "@mui/lab/LoadingButton";
import type { Album } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import NewLayout from "../../components/layouts/new";
import { isAuth } from "../../helpers/user";
import { trpc } from "../../utils/trpc";

const NewBand: NextPage = () => {
  const router = useRouter(),
    { status } = useSession(),
    { show } = useModal("auth-dialog"),
    create = trpc.album.createOneAlbum.useMutation({
      onSuccess: () => router.push("/albums"),
    }),
    handleSubmit = (data: Album) => {
      if (isAuth(status)) create.mutate({ data });
      else show();
    };
  return (
    <NewLayout>
      <p>new album</p>
      <FormContainer onSuccess={handleSubmit}>
        <TextFieldElement
          name={"title." + router.locale}
          label="Title"
          margin="dense"
          fullWidth
          required
        />
        <LoadingButton
          type="submit"
          variant="contained"
          disabled={create.isLoading}
          fullWidth
          disableElevation
        >
          submit
        </LoadingButton>
      </FormContainer>
    </NewLayout>
  );
};

export default NewBand;
