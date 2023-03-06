import React, { useEffect } from "react";
import { FormContainer, TextFieldElement, useForm } from "react-hook-form-mui";
import type {
  FieldValues,
  FormContainerProps,
  TextFieldElementProps,
} from "react-hook-form-mui";

import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
import type { GridProps } from "@mui/material/Grid";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
interface SingleFormProps<T extends FieldValues> {
  data: T;
  direction?: GridProps["direction"];
  loading: boolean;
  formContainerProps: Omit<FormContainerProps<T>, "formContext">;
  textFieldElementProps: TextFieldElementProps;
}
function SingleForm<T extends FieldValues>({
  data,
  loading,
  formContainerProps,
  textFieldElementProps,
  direction = "row",
}: SingleFormProps<T>) {
  const router = useRouter();
  const formContext = useForm<T>();
  useEffect(() => {
    formContext.reset(data);
  }, [router.locale, formContext, data]);
  return (
    <FormContainer {...formContainerProps} formContext={formContext}>
      <Grid container spacing={1} my={1} direction={direction}>
        <Grid item xs={10}>
          <TextFieldElement
            {...textFieldElementProps}
            label={textFieldElementProps.name}
            disabled={loading}
            fullWidth
            multiline={direction === "column"}
          />
        </Grid>
        <Grid item xs={2} alignItems="stretch" style={{ display: "flex" }}>
          <LoadingButton
            type="submit"
            variant="outlined"
            disabled={loading || !formContext.formState.isDirty}
            loading={loading}
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

export default SingleForm;
