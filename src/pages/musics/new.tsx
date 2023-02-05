import path from "path";

import { useState } from "react";
import {
  FormContainer,
  RadioButtonGroup,
  TextFieldElement,
  useForm,
} from "react-hook-form-mui";

import { importer } from "@coderline/alphatab";
import { useModal } from "@ebay/nice-modal-react";
import DriveFolderUpload from "@mui/icons-material/DriveFolderUpload";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import type { Music } from "@prisma/client";
import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSnackbar } from "notistack";
import { match, P } from "ts-pattern";

import NewLayout from "../../components/layouts/new";
import AlphaTexExporter from "../../helpers/AlphaTexExporter";
import { getCurrentUserId } from "../../helpers/user";
import { trpc } from "../../utils/trpc";

const NewMusic: NextPage = () => {
  const router = useRouter(),
    [loading, setLoading] = useState(false),
    formContext = useForm<Music>({ defaultValues: { price: 0 } }),
    { show } = useModal("auth-dialog"),
    { t } = useTranslation(),
    { data: session, status } = useSession(),
    { enqueueSnackbar } = useSnackbar(),
    {
      watch,
      setValue,
      formState: { isDirty, isValid },
    } = formContext,
    type = watch("type"),
    create = trpc.music.createOneMusic.useMutation({
      onSuccess: () => {
        router.push("/musics");
        enqueueSnackbar("music.create success");
      },
      onError: () => {
        enqueueSnackbar("music.create fail");
      },
    }),
    handleSubmit = (data: Music) => {
      if (status === "authenticated")
        create.mutate({
          data: {
            ...data,
            price: Number(data.price),
            user: { connect: { id: getCurrentUserId(session) } },
          },
        });
      else show();
    },
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!files) return;
      if (!files[0]) return;
      const file = files[0];
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
          setLoading(true);
          const body = new FormData();
          body.append("file", file);
          const { data } = await axios.post<string>("/api/audiveris", body);
          setValue("score", data);

          setLoading(false);
        })
        .exhaustive();
      e.target.value = "";
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
        setValue("score", exporter.ToTex());
      }
    };
  return (
    <NewLayout>
      <Box my={3}>
        <Typography variant="h4">Create a New Music</Typography>
        <Divider />

        <Box my={3}>
          <FormContainer formContext={formContext} onSuccess={handleSubmit}>
            <Button
              variant="contained"
              component="label"
              startIcon={<DriveFolderUpload />}
              disabled={loading}
              disableElevation
              fullWidth
            >
              Load Score
              <input
                type="file"
                accept=".jpg,.png,.pdf,.gp,.mxl"
                hidden
                onChange={handleChange}
              />
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
              {t("submit")}
            </LoadingButton>
          </FormContainer>
        </Box>
      </Box>
    </NewLayout>
  );
};

export default NewMusic;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "", ["common"])),
    },
  };
};
