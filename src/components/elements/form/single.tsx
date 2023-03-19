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
      <Grid container direction={direction} my={1} spacing={1}>
        <Grid item xs={10}>
          <TextFieldElement
            {...textFieldElementProps}
            disabled={loading}
            fullWidth
            label={textFieldElementProps.name}
            multiline={direction === "column"}
          />
        </Grid>
        <Grid alignItems="stretch" item style={{ display: "flex" }} xs={2}>
          <LoadingButton
            disabled={loading || !formContext.formState.isDirty}
            endIcon={<SendIcon />}
            fullWidth
            loading={loading}
            type="submit"
            variant="outlined"
          >
            Update
          </LoadingButton>
        </Grid>
      </Grid>
    </FormContainer>
  );
}

export default SingleForm;
