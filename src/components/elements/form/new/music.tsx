import path from "path";

import { useState } from "react";
import type { UseFormReturn } from "react-hook-form-mui";
import { RadioButtonGroup, TextFieldElement } from "react-hook-form-mui";

import { importer } from "@coderline/alphatab";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import type { Prisma } from "@prisma/client";
import axios from "axios";
import { useSnackbar } from "notistack";
import { match, P } from "ts-pattern";

import AlphaTexExporter from "../../../../helpers/AlphaTexExporter";
import ScoreLayout from "../../../layouts/score";
import Dropzone from "../dropzone";

interface NewForm {
  formContext: UseFormReturn<Prisma.ResourceCreateInput>;
}
const MusicNewForm = ({ formContext }: NewForm) => {
  const [loading, setLoading] = useState(false),
    [open, setOpen] = useState(false),
    { enqueueSnackbar, closeSnackbar } = useSnackbar(),
    { watch, setValue } = formContext,
    type = watch("music.create.type"),
    score = watch("music.create.score"),
    handleDrag = (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file) => {
        const extname = path.extname(file.name) as
          | ".jpg"
          | ".png"
          | ".pdf"
          | ".gp"
          | ".mxl";
        match(extname)
          .with(P.union(".gp", ".mxl"), () => {
            const reader = new FileReader();
            reader.onload = ({ target }) => {
              const result = target?.result as ArrayBuffer;
              if (result) exportFile(new Uint8Array(result));
            };
            reader.readAsArrayBuffer(file as Blob);
          })
          .with(P.union(".jpg", ".png", ".pdf"), async () => {
            const snackbarId = enqueueSnackbar("Loading ...", {
              autoHideDuration: null,
            });
            const body = new FormData();

            body.append("file", file);
            setLoading(true);
            const { data } = await axios
              .post<string>("/api/audiveris", body)
              .finally(() => setLoading(false));

            setValue("music.create.score", data);
            closeSnackbar(snackbarId);
            enqueueSnackbar("recognize score image success");
          })
          .exhaustive();
      });
    },
    exportFile = (data: Uint8Array) => {
      let score = null;
      try {
        score = importer.ScoreLoader.loadScoreFromBytes(data);
      } catch (e) {
        alert("楽譜じゃねえだろこれ");
      }
      if (score != null) {
        const exporter = new AlphaTexExporter();
        exporter.Export(score);
        setValue("music.create.score", exporter.ToTex());
      }
    };

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

      {score ? (
        <>
          <Box my={2}>
            <Button fullWidth onClick={() => setOpen(true)} variant="outlined">
              Preview
            </Button>
          </Box>
          <Drawer anchor="bottom" onClose={() => setOpen(false)} open={open}>
            <Box height="70vh">
              <ScoreLayout value={score} />
            </Box>
          </Drawer>
        </>
      ) : (
        <Dropzone
          accept={{
            "image/*": [".jpg", ".png", ".pdf"],
            "text/*": [".gp", ".mxl"],
          }}
          disabled={loading}
          maxFiles={2}
          onDrop={handleDrag}
        />
      )}
    </>
  );
};

export default MusicNewForm;
