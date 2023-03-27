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

const NewBand: NextPage = () => {
  const router = useRouter(),
    { status } = useSession(),
    { show } = useModal("auth-dialog"),
    create = trpc.band.createOneBand.useMutation({
      onSuccess: ({ id }) =>
        router.push({ pathname: "/bands/[id]", query: { id } }),
    }),
    handleSubmit = ({
      resource,
      ...band
    }: Prisma.BandGetPayload<{ include: { resource: true } }>) => {
      if (isAuth(status))
        create.mutate({
          data: {
            ...band,
            resource: { create: { ...resource, unionType: "Band" } },
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
          name={"resource.name.create." + router.locale}
          required
        />
        <br />
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

export default NewBand;
