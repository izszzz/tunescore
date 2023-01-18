import { FormContainer, TextFieldElement } from "react-hook-form-mui";

import Button from "@mui/material/Button";
import type { Artist } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import { trpc } from "../../utils/trpc";


const NewArtist: NextPage = () => {
  const router = useRouter();
  const create = trpc.artist.createOneArtist.useMutation({
    onSuccess: () => router.push("/artists"),
  });
  const handleSubmit = (data: Artist) => create.mutate({ data });
  return (
    <DefaultSingleColumnLayout contained>
      <FormContainer onSuccess={handleSubmit}>
        <TextFieldElement
          name={"name." + router.locale}
          label="Name"
          fullWidth
          required
        />
        <br />
        <Button type="submit">submit</Button>
      </FormContainer>
    </DefaultSingleColumnLayout>
  );
};

export default NewArtist;
