import { Controller, FormContainer } from "react-hook-form-mui";
import type { FormContainerProps } from "react-hook-form-mui";

import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";
import { type Prisma } from "@prisma/client";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
interface CommentFormProps {
  formContainerProps: FormContainerProps<Prisma.CommentCreateInput>;
  loading: boolean;
}
const CommentForm = ({ formContainerProps, loading }: CommentFormProps) => {
  return (
    <FormContainer {...formContainerProps}>
      <Stack spacing={3}>
        <Controller
          name="body"
          render={({ field }) => <MDEditor {...field} />}
        />
        <LoadingButton
          disableElevation
          fullWidth
          loading={loading}
          type="submit"
          variant="contained"
        >
          Submit
        </LoadingButton>
      </Stack>
    </FormContainer>
  );
};
export default CommentForm;
