import { useEffect } from "react";
import {
  FormContainer,
  RadioButtonGroup,
  TextFieldElement,
  useForm,
} from "react-hook-form-mui";

import { create, useModal } from "@ebay/nice-modal-react";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import type { Report } from "@prisma/client";
import { ReportUnionType } from "@prisma/client";
import { match, P } from "ts-pattern";

import { trpc } from "../../../utils/trpc";
interface ReportDialogProps {
  unionType: ReportUnionType;
  unionId: string;
}
const ReportDialog = create<ReportDialogProps>(({ unionType, unionId }) => {
  const { visible, hide } = useModal(),
    formContext = useForm<Report>(),
    {
      setValue,
      formState: { isDirty, isValid },
    } = formContext,
    create = trpc.report.createOneReport.useMutation();
  useEffect(() => {
    setValue("unionType", unionType);
    match(unionType)
      .with("User", () => setValue("reportedUserId", unionId))
      .with("Music", () => setValue("reportedMusicId", unionId))
      .otherwise(() => "");
  }, [unionId, unionType, setValue]);
  return (
    <Dialog onClose={hide} open={visible}>
      <DialogTitle>Report</DialogTitle>
      <FormContainer
        formContext={formContext}
        onSuccess={(data) => create.mutate({ data })}
      >
        <DialogContent>
          <Box>
            <RadioButtonGroup
              label="Report type"
              name="id"
              options={match(unionType)
                .with(ReportUnionType.Music, () => [
                  { id: "COPYRIGHT", label: "Copyright" },
                  { id: "GARBAGE", label: "Garbage" },
                  { id: "OTHER", label: "other" },
                ])
                .with("User", () => [
                  { id: "TROLL", label: "Troll" },
                  { id: "OTHER", label: "other" },
                ])
                .with(P.union("Album", "Artist", "Band"), () => [
                  { id: "GARBAGE", label: "Garbage" },
                  { id: "OTHER", label: "other" },
                ])
                .exhaustive()}
              required
            />
          </Box>
          <TextFieldElement label="body" multiline name="body" required />
        </DialogContent>
        <DialogActions>
          <LoadingButton
            disabled={!isDirty || !isValid}
            fullWidth
            loading={create.isLoading}
          >
            submit
          </LoadingButton>
        </DialogActions>
      </FormContainer>
    </Dialog>
  );
});
export default ReportDialog;
