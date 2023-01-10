import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import { trpc } from "../../utils/trpc";
import type { Album } from "@prisma/client";
import type { NextPage } from "next";

const NewBand: NextPage = () => {
  const router = useRouter();
  const create = trpc.useMutation(["album.createOneAlbum"], {
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
