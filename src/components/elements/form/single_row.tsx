import { useRouter } from "next/router";
import {
  FieldValues,
  FormContainer,
  FormContainerProps,
  TextFieldElement,
  TextFieldElementProps,
  useForm,
} from "react-hook-form-mui";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
interface DefaultSettingsFormProps<T extends FieldValues> {
  data: T;
  loading: boolean;
  formContainerProps: Omit<FormContainerProps<T>, "formContext">;
  textFieldElementProps: TextFieldElementProps;
}
function SingleRowForm<T extends FieldValues>({
  data,
  loading,
  formContainerProps,
  textFieldElementProps,
}: DefaultSettingsFormProps<T>) {
  const router = useRouter();
  const formContext = useForm<T>();
  useEffect(() => {
    formContext.reset(data);
  }, [router.locale, formContext, data]);
  return (
    <FormContainer {...formContainerProps} formContext={formContext}>
      <Grid container spacing={1} my={1}>
        <Grid item xs={10}>
          <TextFieldElement
            {...textFieldElementProps}
            name={textFieldElementProps.name + "." + router.locale}
            label={textFieldElementProps.name}
            disabled={loading}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={2} alignItems="stretch" style={{ display: "flex" }}>
          <LoadingButton
            type="submit"
            variant="outlined"
            disabled={loading || !formContext.formState.isDirty}
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

export default SingleRowForm;
