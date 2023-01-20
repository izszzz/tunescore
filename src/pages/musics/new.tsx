import {
  FormContainer,
  RadioButtonGroup,
  TextFieldElement,
  useForm,
} from "react-hook-form-mui";

import { importer } from "@coderline/alphatab";
import DriveFolderUpload from "@mui/icons-material/DriveFolderUpload";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import type { Music } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Script from "next/script";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import AlphaTexExporter from "../../helpers/AlphaTexExporter";
import { getCurrentUserId } from "../../helpers/user";
import { trpc } from "../../utils/trpc";

const NewMusic: NextPage = () => {
  const router = useRouter(),
    formContext = useForm<Music>({ defaultValues: { price: 0 } }),
    {
      watch,
      setValue,
      formState: { isDirty, isValid },
    } = formContext,
    type = watch("type"),
    { data: session } = useSession(),
    { enqueueSnackbar } = useSnackbar(),
    create = trpc.music.createOneMusic.useMutation({
      onSuccess: () => router.push("/musics"),
      onError: (error) => {
        enqueueSnackbar(String(error));
      },
    });
  const handleSubmit = (data: Music) => {
    create.mutate({
      data: {
        ...data,
        price: Number(data.price),
        user: { connect: { id: getCurrentUserId(session) } },
      },
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = ({ target }) => {
        const result = target?.result as ArrayBuffer;
        if (result) exportFile(new Uint8Array(result));
      };
      reader.readAsArrayBuffer(files[0] as Blob);
    }
    e.target.value = "";
  };
  const exportFile = (data: Uint8Array) => {
    let score = null;
    try {
      score = importer.ScoreLoader.loadScoreFromBytes(data);
    } catch (e) {
      alert("楽譜じゃねえだろこれ");
    }
    if (score != null) {
      const exporter = new AlphaTexExporter();
      exporter.Export(score);
      setValue("score", exporter.ToTex());
    }
  };
  return (
    <DefaultSingleColumnLayout contained>
      <Script
        src="https://cdn.jsdelivr.net/npm/@coderline/alphatab@latest/dist/alphaTab.js"
        onError={(e) => console.log(e)}
      />
      <Box my={3}>
        <Typography variant="h4">Create a New Music</Typography>
        <Divider />

        <Box my={3}>
          <FormContainer formContext={formContext} onSuccess={handleSubmit}>
            <Button
              variant="contained"
              component="label"
              startIcon={<DriveFolderUpload />}
              disableElevation
              fullWidth
            >
              Guitar Pro
              <input type="file" hidden onChange={handleChange} />
            </Button>
            <Box mb={3}>
              <RadioButtonGroup
                label="type"
                name="type"
                options={[
                  { id: "ORIGINAL", label: "original" },
                  { id: "COPY", label: "copy" },
                ]}
                row
                required
              />
            </Box>
            <Box mb={3}>
              <RadioButtonGroup
                label="visibillity"
                name="visibility"
                options={[
                  { id: "PUBLIC", label: "public" },
                  { id: "PRIVATE", label: "private" },
                ]}
                row
                required
              />
            </Box>
            <TextFieldElement
              name={"title." + router.locale}
              label="Title"
              margin="dense"
              required
              fullWidth
            />
            <br />
            {type === "ORIGINAL" && (
              <>
                <TextFieldElement
                  label="price"
                  name="price"
                  margin="dense"
                  type="number"
                  required
                  fullWidth
                />
                <br />
              </>
            )}
            <LoadingButton
              type="submit"
              variant="contained"
              disabled={!isDirty || !isValid || create.isLoading}
              fullWidth
              disableElevation
            >
              submit
            </LoadingButton>
          </FormContainer>
        </Box>
      </Box>
    </DefaultSingleColumnLayout>
  );
};

export default NewMusic;
