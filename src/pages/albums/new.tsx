import { FormContainer, TextFieldElement } from "react-hook-form-mui";

import Button from "@mui/material/Button";
import type { Album } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import { trpc } from "../../utils/trpc";


const NewBand: NextPage = () => {
  const router = useRouter();
  const create = trpc.album.createOneAlbum.useMutation({
    onSuccess: () => router.push("/albums"),
  });
  const handleSubmit = (data: Album) => create.mutate({ data });
  return (
    <DefaultSingleColumnLayout>
      <p>new album</p>
      <FormContainer onSuccess={handleSubmit}>
        <TextFieldElement
          name={"title." + router.locale}
          label="Title"
          fullWidth
          required
        />
        <br />
        <Button type="submit">submit</Button>
      </FormContainer>
    </DefaultSingleColumnLayout>
  );
};

export default NewBand;
