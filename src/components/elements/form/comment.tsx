import LoadingButton from "@mui/lab/LoadingButton";
import { type Prisma } from "@prisma/client";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import {
  Controller,
  FormContainer,
  type FormContainerProps,
} from "react-hook-form-mui";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
interface CommentFormProps {
  formContainerProps: FormContainerProps<Prisma.CommentCreateInput>;
  loading: boolean;
}
const CommentForm = ({ formContainerProps, loading }: CommentFormProps) => {
  return (
    <FormContainer {...formContainerProps}>
      <Controller name="body" render={({ field }) => <MDEditor {...field} />} />
      <LoadingButton
        type="submit"
        loading={loading}
        variant="contained"
        fullWidth
        disableElevation
      >
        Submit
      </LoadingButton>
    </FormContainer>
  );
};
export default CommentForm;
