import { FormContainer, TextFieldElement } from "react-hook-form-mui";

import { useModal } from "@ebay/nice-modal-react";
import LoadingButton from "@mui/lab/LoadingButton";
import type { Artist } from "@prisma/client";
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
      onSuccess: () => router.push("/artists"),
    });
  const handleSubmit = (data: Artist) => {
    if (isAuth(status)) create.mutate({ data });
    else show();
  };
  return (
    <NewLayout>
      <FormContainer onSuccess={handleSubmit}>
        <TextFieldElement
          name={"name." + router.locale}
          label="Name"
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

export default NewArtist;
