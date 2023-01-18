import { FormContainer, TextFieldElement } from "react-hook-form-mui";

import Button from "@mui/material/Button";
import type { Band } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import { trpc } from "../../utils/trpc";


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
