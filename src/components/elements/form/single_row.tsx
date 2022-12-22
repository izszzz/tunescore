import { useRouter } from "next/router";
import {
  FormContainer,
  FormContainerProps,
  TextFieldElement,
  TextFieldElementProps,
  useForm,
} from "react-hook-form-mui";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
interface DefaultSettingsFormProps<T> {
  data: T;
  formContainerProps: Omit<FormContainerProps, "formContext">;
  textFieldElementProps: TextFieldElementProps;
  loadingButtonProps: LoadingButtonProps;
}
function DefaultSettingsForm<T extends { id: string }>({
  data,
  formContainerProps,
  textFieldElementProps,
  loadingButtonProps,
}: DefaultSettingsFormProps<T>) {
  const router = useRouter();
  const formContext = useForm<T>();
  useEffect(() => {
    formContext.reset(data);
  }, [router.locale, formContext, data]);
  return (
    <FormContainer<T> {...formContainerProps} formContext={formContext}>
      <Grid container spacing={1} my={1}>
        <Grid item xs={10}>
          <TextFieldElement
            {...textFieldElementProps}
            name={textFieldElementProps.name + "." + router.locale}
            label={textFieldElementProps.name}
            disabled={loadingButtonProps.loading}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={2} alignItems="stretch" style={{ display: "flex" }}>
          <LoadingButton
            type="submit"
            variant="outlined"
            disabled={
              loadingButtonProps.loading || !formContext.formState.isDirty
            }
            loading={loadingButtonProps.loading}
            endIcon={<SendIcon />}
            fullWidth
          >
            Update
          </LoadingButton>
        </Grid>
      </Grid>
    </FormContainer>
  );
}

export default DefaultSettingsForm;
