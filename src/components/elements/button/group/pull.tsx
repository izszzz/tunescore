import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import LoadingButton from "@mui/lab/LoadingButton";
import PullStatusIcon from "../../icon/pull/status";
import VoteAlert from "../../alert/vote";
import type { VoteAlertProps } from "../../alert/vote";
import type { LoadingButtonProps } from "@mui/lab/LoadingButton";
import type { PullStatus, MusicType } from "@prisma/client";

interface PullButtonProps {
  type: MusicType;
  status: PullStatus;
  conflict: boolean;
  diff: boolean;
  loading: boolean;
  data: VoteAlertProps["data"];
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
  data,
  onOpen,
  onMerge,
  onClose,
  onDraft,
  onVote,
}: PullButtonProps) => {
  if (type === "ORIGINAL")
    switch (status) {
      case "DRAFT":
        return <PullOpenButton loading={loading} onClick={onOpen} />;
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
      case "VOTE":
        return <>vote</>;
      case "CLOSED":
        return <PullDraftButton loading={loading} onClick={onDraft} />;
    }
  else if (type === "COPY")
    switch (status) {
      case "DRAFT":
        return <PullOpenButton loading={loading} onClick={onOpen} />;
      case "OPEN":
        return (
          <ButtonGroup fullWidth>
            <VoteCreateButton
              loading={loading}
              disabled={conflict || !diff}
              onClick={onVote}
            />
            <PullCloseButton loading={loading} onClick={onClose} />
            <PullDraftButton loading={loading} onClick={onDraft} />
          </ButtonGroup>
        );
      case "VOTE":
        return (
          <VoteAlert
            data={data}
            goodIconButtonProps={{ onClick: () => console.log("good") }}
            badIconButtonProps={{ onClick: () => console.log("good") }}
          />
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
    fullWidth
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
    startIcon={<PullStatusIcon status="VOTE" />}
    {...props}
  >
    Vote
  </LoadingButton>
);

export default PullButton;
