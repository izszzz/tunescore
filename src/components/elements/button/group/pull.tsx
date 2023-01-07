import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import LoadingButton from "@mui/lab/LoadingButton";
import { match } from "ts-pattern";
import PullStatusIcon from "../../icon/pull/status";
import VoteAlert from "../../alert/vote";
import type { Prisma } from "@prisma/client";
import type { LoadingButtonProps } from "@mui/lab/LoadingButton";

interface PullButtonProps {
  conflict: boolean;
  diff: boolean;
  loading: boolean;
  data: Prisma.PullGetPayload<{
    include: { music: true; user: true; vote: true };
  }>;
  onOpen: () => void;
  onMerge: () => void;
  onClose: () => void;
  onDraft: () => void;
  onVote: () => void;
}

const PullButton = ({
  conflict,
  diff,
  loading,
  data,
  onOpen,
  onMerge,
  onClose,
  onDraft,
  onVote,
}: PullButtonProps) =>
  match(data)
    .with({ status: "DRAFT" }, () => (
      <PullOpenButton loading={loading} onClick={onOpen} />
    ))
    .with({ status: "MERGE" }, () => <>revert</>)
    .with({ music: { type: "ORIGINAL" }, status: "OPEN" }, () => (
      <ButtonGroup fullWidth>
        <PullMergeButton
          loading={loading}
          disabled={conflict || !diff}
          onClick={onMerge}
        />
        <PullCloseButton loading={loading} onClick={onClose} />
        <PullDraftButton loading={loading} onClick={onDraft} />
      </ButtonGroup>
    ))
    .with({ music: { type: "COPY" }, status: "OPEN" }, () => (
      <ButtonGroup fullWidth>
        <VoteCreateButton
          loading={loading}
          disabled={conflict || !diff}
          onClick={onVote}
        />
        <PullCloseButton loading={loading} onClick={onClose} />
        <PullDraftButton loading={loading} onClick={onDraft} />
      </ButtonGroup>
    ))
    .with({ music: { type: "ORIGINAL" }, status: "VOTE" }, () => <>vote</>)
    .with({ music: { type: "COPY" }, status: "VOTE" }, () => (
      <VoteAlert
        data={data}
        goodIconButtonProps={{ onClick: () => console.log("good") }}
        badIconButtonProps={{ onClick: () => console.log("good") }}
      />
    ))
    .with({ status: "CLOSE" }, () => (
      <PullDraftButton loading={loading} onClick={onDraft} />
    ))
    .exhaustive();
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
    startIcon={<PullStatusIcon status="MERGE" />}
    {...props}
  >
    Merge
  </LoadingButton>
);

const PullCloseButton = (props: LoadingButtonProps) => (
  <LoadingButton
    variant="outlined"
    color="error"
    startIcon={<PullStatusIcon status="CLOSE" />}
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
