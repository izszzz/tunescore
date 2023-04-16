import path from "path";

import { useEffect, useState } from "react";

import { importer } from "@coderline/alphatab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import axios from "axios";
import { match, P } from "ts-pattern";

import AlphaTexExporter from "../../../../helpers/AlphaTexExporter";
import ScoreLayout from "../../../layouts/score";

import Dropzone from ".";
interface ScoreDropzoneProps {
  onChange: (value: string) => void;
}

const ScoreDropzone = ({ onChange }: ScoreDropzoneProps) => {
  const [loading, setLoading] = useState(false),
    [value, setValue] = useState(""),
    [open, setOpen] = useState(false),
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
          .with(P.union(".jpg", ".png", ".pdf"), () => {
            const body = new FormData();
            body.append("file", file);
            setLoading(true);
            axios
              .post<string>("/api/audiveris", body)
              .then(({ data }) => setValue(data))
              .finally(() => setLoading(false));
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
        setValue(exporter.ToTex());
      }
    };
  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  return value ? (
    <>
      <Box my={2}>
        <Button fullWidth onClick={() => setOpen(true)} variant="outlined">
          Preview
        </Button>
      </Box>
      <Drawer anchor="bottom" onClose={() => setOpen(false)} open={open}>
        <Box height="70vh">
          <ScoreLayout value={value} />
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
  );
};

export default ScoreDropzone;
