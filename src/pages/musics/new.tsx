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
import LoadingButton from "@mui/lab/LoadingButton";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import type { Prisma } from "@prisma/client";
import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSnackbar } from "notistack";
import { match, P } from "ts-pattern";

import Dropzone from "../../components/elements/form/dropzone";
import NewLayout from "../../components/layouts/new";
import AlphaTexExporter from "../../helpers/AlphaTexExporter";
import { isAuth, getCurrentUserId } from "../../helpers/user";
import { trpc } from "../../utils/trpc";

const NewMusic: NextPage = () => {
  const router = useRouter(),
    [loading, setLoading] = useState(false),
    formContext = useForm<
      Prisma.MusicGetPayload<{ include: { resource: true } }>
    >({ defaultValues: { price: 0 } }),
    { show } = useModal("auth-dialog"),
    { t } = useTranslation(),
    { data: session, status } = useSession(),
    { enqueueSnackbar, closeSnackbar } = useSnackbar(),
    {
      watch,
      setValue,
      formState: { isDirty, isValid },
    } = formContext,
    type = watch("type"),
    create = trpc.music.createOneMusic.useMutation({
      onSuccess: ({ id }) =>
        router.push({ pathname: "/musics/[id]", query: { id } }),
      onError: () => enqueueSnackbar("music.create fail"),
    }),
    handleSubmit = ({
      resource,
      ...music
    }: Prisma.MusicGetPayload<{ include: { resource: true } }>) => {
      if (isAuth(status))
        create.mutate({
          data: {
            ...music,
            resource: { create: { ...resource, unionType: "Music" } },
            price: Number(music.price),
            user: { connect: { id: getCurrentUserId(session) } },
          },
        });
      else show();
    },
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
            setLoading(true);
            const snackbarId = enqueueSnackbar("Loading ...", {
              autoHideDuration: null,
            });
            const body = new FormData();

            body.append("file", file);
            const { data } = await axios.post<string>("/api/audiveris", body);

            setValue("score", data);
            closeSnackbar(snackbarId);
            enqueueSnackbar("recognize score image success");
            setLoading(false);
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
            <Box mb={3}>
              <RadioButtonGroup
                label="type"
                name="type"
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
                name="visibillity"
                options={[
                  { id: "PUBLIC", label: "public" },
                  { id: "PRIVATE", label: "private" },
                ]}
                required
                row
              />
            </Box>
            <TextFieldElement
              fullWidth
              label="Title"
              margin="dense"
              name={"resource.name.create." + router.locale}
              required
            />
            <br />
            {type === "ORIGINAL" && (
              <TextFieldElement
                fullWidth
                label="price"
                margin="dense"
                name="price"
                required
                type="number"
              />
            )}

            <Alert severity="error">
              dropzone still not working properly. But you can get the output.
            </Alert>

            <Dropzone
              accept={{
                "image/*": [".jpg", ".png", ".pdf"],
                "text/*": [".gp", ".mxl"],
              }}
              maxFiles={2}
              onDrop={handleDrag}
            />

            <LoadingButton
              disableElevation
              disabled={!isDirty || !isValid || create.isLoading || loading}
              fullWidth
              type="submit"
              variant="contained"
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
