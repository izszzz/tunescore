import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import { trpc } from "../../utils/trpc";
import type { Artist } from "@prisma/client";
import type { NextPage } from "next";

const NewArtist: NextPage = () => {
  const router = useRouter();
  const create = trpc.useMutation(["artist.createOneArtist"], {
    onSuccess: () => router.push("/artists"),
  });
  const handleSubmit = (data: Artist) => create.mutate({ data });
  return (
    <DefaultSingleColumnLayout>
      <FormContainer onSuccess={handleSubmit}>
        <TextFieldElement
          name={"name." + router.locale}
          label="Name"
          required
        />
        <br />
        <Button type="submit">submit</Button>
      </FormContainer>
    </DefaultSingleColumnLayout>
  );
};

export default NewArtist;
