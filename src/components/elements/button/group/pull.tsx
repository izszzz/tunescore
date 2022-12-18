import React from "react";
import { PullStatus, Type } from "@prisma/client";
import ButtonGroup from "@mui/material/ButtonGroup";
import PullStatusIcon from "../../icon/pull/status";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";

interface PullButtonProps {
  type: Type;
  status: PullStatus;
  conflict: boolean;
  diff: boolean;
  loading: boolean;
  onOpen: () => void;
  onMerge: () => void;
  onClose: () => void;
  onDraft: () => void;
  onVote: () => void;
}

const PullButton = ({
  type,
  status,
  conflict,
  diff,
  loading,
  onOpen,
  onMerge,
  onClose,
  onDraft,
  onVote,
}: PullButtonProps) => {
  if (type === "ORIGINAL")
    switch (status) {
      case "DRAFT":
        return <PullOpenButton loading={loading} onClick={onOpen} fullWidth />;
      case "OPEN": {
        return (
          <ButtonGroup fullWidth>
            <PullMergeButton
              loading={loading}
              disabled={conflict || !diff}
              onClick={onMerge}
            />
            <PullCloseButton loading={loading} onClick={onClose} />
            <PullDraftButton loading={loading} onClick={onDraft} />
          </ButtonGroup>
        );
      }
      case "MERGED":
        return <>revert</>;
      case "CLOSED":
        return <PullDraftButton loading={loading} onClick={onDraft} />;
    }
  else if (type === "COPY")
    switch (status) {
      case "DRAFT":
        return <PullOpenButton loading={loading} onClick={onOpen} />;
      case "OPEN":
        return (
          <ButtonGroup>
            <VoteCreateButton
              loading={loading}
              disabled={conflict || !diff}
              onClick={onVote}
            />
            <PullCloseButton loading={loading} onClick={onClose} />
            <PullDraftButton loading={loading} onClick={onDraft} />
          </ButtonGroup>
        );
      case "MERGED":
        return <>revert</>;
      case "CLOSED":
        return <PullDraftButton loading={loading} onClick={onDraft} />;
    }
  else return <>no buttons</>;
};

const PullOpenButton = (props: LoadingButtonProps) => (
  <LoadingButton
    variant="outlined"
    color="success"
    startIcon={<PullStatusIcon status="OPEN" />}
    {...props}
  >
    OPEN
  </LoadingButton>
);

const PullMergeButton = (props: LoadingButtonProps) => (
  <LoadingButton
    variant="outlined"
    color="success"
    startIcon={<PullStatusIcon status="MERGED" />}
    {...props}
  >
    Merge
  </LoadingButton>
);

const PullCloseButton = (props: LoadingButtonProps) => (
  <LoadingButton
    variant="outlined"
    color="error"
    startIcon={<PullStatusIcon status="CLOSED" />}
    {...props}
  >
    Close
  </LoadingButton>
);

const PullDraftButton = (props: LoadingButtonProps) => (
  <LoadingButton
    variant="outlined"
    color="info"
    startIcon={<PullStatusIcon status="DRAFT" />}
    {...props}
  >
    Draft
  </LoadingButton>
);

const VoteCreateButton = (props: LoadingButtonProps) => (
  <LoadingButton
    variant="outlined"
    color="success"
    startIcon={<PullStatusIcon status="OPEN" />}
    {...props}
  >
    OPEN
  </LoadingButton>
);

export default PullButton;
