import { useRouter } from "next/router";
import { FormContainer, TextFieldElement, useForm } from "react-hook-form-mui";
import { useSnackbar } from "notistack";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { trpc } from "../../../../utils/trpc";
import { getRouterId } from "../../../../helpers/router";
import type { Band, Prisma } from "@prisma/client";

interface BandSettingsFormProps {
  data:
    | Prisma.BandGetPayload<{
        include: {
          musics: { include: { composers: true; lyrists: true } };
          artists: true;
        };
      }>
    | undefined
    | null;
  isLoading: boolean;
}
const BandSettingsForm = ({ data, isLoading }: BandSettingsFormProps) => {
  const router = useRouter();
  const id = getRouterId(router);
  const formContext = useForm<Band>();
  const { enqueueSnackbar } = useSnackbar();
  const destroy = trpc.useMutation("band.deleteOneBand", {
    onError: () => {
      router.push("/bands");
    },
  });
  const update = trpc.useMutation("band.updateOneBand", {
    onSuccess: () => {
      enqueueSnackbar("update success");
    },
  });
  const handleSubmit = (data: Band) => update.mutate({ where: { id }, data });
  const handleDestroy = () => data && destroy.mutate(data);
  useEffect(() => {
    if (data) formContext.reset(data);
  }, [router.locale, formContext, data]);
  const disabled = isLoading || update.isLoading;
  return (
    <>
      <p>edit</p>
      <FormContainer formContext={formContext} onSuccess={handleSubmit}>
        <Grid container spacing={1} my={1}>
          <Grid item xs={10}>
            <TextFieldElement
              name={"name." + router.locale}
              label="Title"
              disabled={disabled}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={2} alignItems="stretch" style={{ display: "flex" }}>
            <LoadingButton
              type="submit"
              variant="outlined"
              disabled={disabled}
              loading={update.isLoading}
              endIcon={<SendIcon />}
              fullWidth
            >
              Update
            </LoadingButton>
          </Grid>
        </Grid>
      </FormContainer>
      <br />
      <Button type="button" onClick={handleDestroy}>
        Delete Band
      </Button>
    </>
  );
};

export default BandSettingsForm;
