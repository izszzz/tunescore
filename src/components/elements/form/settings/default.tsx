import { useRouter } from "next/router";
import { FormContainer, TextFieldElement, useForm } from "react-hook-form-mui";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import Alert from "@mui/material/Alert";
interface DefaultSettingsFormProps<T> {
  data: T;
  name: "title" | "name";
  updateLoadingButtonProps: {
    onClick: (data: T) => void;
    loading: boolean;
  };
  destroyLoadingButtonProps: {
    onClick: (data: T) => void;
    loading: boolean;
  };
}
function DefaultSettingsForm<T extends { id: string }>({
  name,
  data,
  updateLoadingButtonProps: updateButtonProps,
  destroyLoadingButtonProps: destroyButtonProps,
}: DefaultSettingsFormProps<T>) {
  const router = useRouter();
  const formContext = useForm<T>();
  useEffect(() => {
    formContext.reset(data);
  }, [router.locale, formContext, data]);
  return (
    <>
      <FormContainer
        formContext={formContext}
        onSuccess={(data) => updateButtonProps.onClick(data)}
      >
        <Grid container spacing={1} my={1}>
          <Grid item xs={10}>
            <TextFieldElement
              name={name + "." + router.locale}
              label={name}
              disabled={updateButtonProps.loading}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={2} alignItems="stretch" style={{ display: "flex" }}>
            <LoadingButton
              type="submit"
              variant="outlined"
              disabled={
                updateButtonProps.loading || !formContext.formState.isDirty
              }
              loading={updateButtonProps.loading}
              endIcon={<SendIcon />}
              fullWidth
            >
              Update
            </LoadingButton>
          </Grid>
        </Grid>
      </FormContainer>
      <Alert
        variant="outlined"
        severity="warning"
        action={
          <LoadingButton
            type="button"
            variant="contained"
            color="warning"
            loading={destroyButtonProps.loading}
            onClick={() => destroyButtonProps.onClick(data)}
            disableElevation
          >
            Delete
          </LoadingButton>
        }
      >
        This is a warning alert
      </Alert>
    </>
  );
}

export default DefaultSettingsForm;
