import React from "react";
import { PullStatus, Type, Vote } from "@prisma/client";
import ButtonGroup from "@mui/material/ButtonGroup";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";
import PullStatusIcon from "../../icon/pull/status";
import VoteCard from "../../card/vote";

interface PullButtonProps {
  type: Type;
  status: PullStatus;
  conflict: boolean;
  diff: boolean;
  loading: boolean;
  vote: Vote | null;
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
  vote,
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
        return vote && <VoteCard data={vote} />;
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
