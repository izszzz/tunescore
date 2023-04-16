import type { UseFormReturn } from "react-hook-form-mui";
import { RadioButtonGroup, TextFieldElement } from "react-hook-form-mui";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import type { Prisma } from "@prisma/client";

import ScoreDropzone from "../dropzone/score";

interface NewForm {
  formContext: UseFormReturn<Prisma.ResourceCreateInput>;
}
const MusicNewForm = ({ formContext }: NewForm) => {
  const { watch, setValue } = formContext,
    type = watch("music.create.type");
  return (
    <>
      <Box mb={3}>
        <RadioButtonGroup
          label="copyright"
          name="music.create.type"
          options={[
            { id: "ORIGINAL", label: "original" },
            { id: "COPY", label: "copy" },
          ]}
          required
          row
        />
      </Box>
      <Box mb={3}>
        <RadioButtonGroup
          label="visibillity"
          name="music.create.visibillity"
          options={[
            { id: "PUBLIC", label: "public" },
            { id: "PRIVATE", label: "private" },
          ]}
          required
          row
        />
      </Box>
      <br />
      {type === "ORIGINAL" && (
        <TextFieldElement
          fullWidth
          label="price"
          margin="dense"
          name="music.create.price"
          required
          type="number"
        />
      )}

      <Alert severity="error">
        dropzone still not working properly. But you can get the output.
      </Alert>
      <ScoreDropzone
        onChange={(value) => setValue("music.create.score", value)}
      />
    </>
  );
};

export default MusicNewForm;
