import Button from "@mui/material/Button";
import { Band } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import { trpc } from "../../utils/trpc";

const NewBand: NextPage = () => {
  const router = useRouter();
  const create = trpc.useMutation(["band.createOneBand"], {
    onSuccess: () => router.push("/bands"),
  });
  const handleSubmit = (data: Band) => create.mutate({ data });
  return (
    <DefaultSingleColumnLayout>
      <p>new band</p>
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

export default NewBand;
