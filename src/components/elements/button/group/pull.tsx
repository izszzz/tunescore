import React from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import type { LoadingButtonProps } from "@mui/lab/LoadingButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import type { Prisma } from "@prisma/client";
import { match } from "ts-pattern";

import VoteAlert from "../../alert/vote";
import PullStatusIcon from "../../icon/pull/status";

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
  <DefaultButton
    color="success"
    startIcon={<PullStatusIcon status="OPEN" />}
    {...props}
  >
    OPEN
  </DefaultButton>
);

const PullMergeButton = (props: LoadingButtonProps) => (
  <DefaultButton
    color="success"
    startIcon={<PullStatusIcon status="MERGE" />}
    {...props}
  >
    Merge
  </DefaultButton>
);

const PullCloseButton = (props: LoadingButtonProps) => (
  <DefaultButton
    color="error"
    startIcon={<PullStatusIcon status="CLOSE" />}
    {...props}
  >
    Close
  </DefaultButton>
);

const PullDraftButton = (props: LoadingButtonProps) => (
  <DefaultButton
    color="info"
    startIcon={<PullStatusIcon status="DRAFT" />}
    {...props}
  >
    Draft
  </DefaultButton>
);

const VoteCreateButton = (props: LoadingButtonProps) => (
  <DefaultButton
    color="success"
    startIcon={<PullStatusIcon status="VOTE" />}
    {...props}
  >
    Draft
  </DefaultButton>
);

const DefaultButton = ({ children, ...props }: LoadingButtonProps) => (
  <LoadingButton variant="outlined" {...props}>
    {children}
  </LoadingButton>
);

export default PullButton;
