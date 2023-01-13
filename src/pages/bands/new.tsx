import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import { trpc } from "../../utils/trpc";
import type { Band } from "@prisma/client";
import type { NextPage } from "next";

const NewBand: NextPage = () => {
  const router = useRouter();
  const create = trpc.band.createOneBand.useMutation({
    onSuccess: () => router.push("/bands"),
  });
  const handleSubmit = (data: Band) => create.mutate({ data });
  return (
    <DefaultSingleColumnLayout contained>
      <p>new band</p>
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

export default NewBand;
