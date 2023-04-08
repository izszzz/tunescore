import React from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import type { LoadingButtonProps } from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useSession } from "next-auth/react";
import { match } from "ts-pattern";

import { isSelf } from "../../../../helpers/user";
import type { PullLayoutProps } from "../../../layouts/show/pull";
import VoteCard from "../../card/vote";
import PullStatusIcon from "../../icon/pull/status";

interface PullButtonProps {
  conflict: boolean;
  diff: boolean;
  loading: boolean;
  data: PullLayoutProps["data"];
  onOpen: () => void;
  onMerge: () => void;
  onClose: () => void;
  onDraft: () => void;
  onVote: () => void;
  onGood: () => void;
  onBad: () => void;
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
  onGood,
  onBad,
}: PullButtonProps) => {
  const { data: session } = useSession();
  if (!isSelf(session, data)) return <></>;
  return match(data)
    .with({ status: "DRAFT" }, () => (
      <PullOpenButton fullWidth loading={loading} onClick={onOpen} />
    ))
    .with({ status: "MERGE" }, () => (
      <Button color="secondary" disabled fullWidth variant="outlined">
        MERGED
      </Button>
    ))
    .with({ music: { type: "ORIGINAL" }, status: "OPEN" }, () => (
      <ButtonGroup fullWidth>
        <PullMergeButton
          disabled={conflict || !diff}
          loading={loading}
          onClick={onMerge}
        />
        <PullCloseButton loading={loading} onClick={onClose} />
        <PullDraftButton loading={loading} onClick={onDraft} />
      </ButtonGroup>
    ))
    .with({ music: { type: "COPY" }, status: "OPEN" }, () => (
      <ButtonGroup fullWidth>
        {data.music.pulls.length >= 5 ? (
          <VoteCreateButton
            conflict={conflict}
            diff={diff}
            loading={loading}
            onClick={onVote}
          />
        ) : (
          <PullMergeButton
            disabled={conflict || !diff}
            loading={loading}
            onClick={onMerge}
          />
        )}
        <PullCloseButton loading={loading} onClick={onClose} />
        <PullDraftButton loading={loading} onClick={onDraft} />
      </ButtonGroup>
    ))
    .with({ music: { type: "ORIGINAL" }, status: "VOTE" }, () => <>vote</>)
    .with({ music: { type: "COPY" }, status: "VOTE" }, () => {
      const voted =
        !!data.vote?.proponents.length || !!data.vote?.opponents.length;
      return (
        <VoteCard
          badIconButtonProps={{ disabled: voted, onClick: () => onBad() }}
          data={data}
          goodIconButtonProps={{ disabled: voted, onClick: () => onGood() }}
        />
      );
    })
    .with({ status: "CLOSE" }, () => (
      <PullDraftButton fullWidth loading={loading} onClick={onDraft} />
    ))
    .exhaustive();
};

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

const VoteCreateButton = ({
  conflict,
  diff,
  ...props
}: LoadingButtonProps & { conflict: boolean; diff: boolean }) => (
  <DefaultButton
    color="success"
    disabled={conflict || !diff}
    startIcon={<PullStatusIcon status="VOTE" />}
    {...props}
  >
    {conflict ? "conflict" : !diff ? "no diff" : "vote"}
  </DefaultButton>
);

const DefaultButton = ({ children, ...props }: LoadingButtonProps) => (
  <LoadingButton variant="outlined" {...props}>
    {children}
  </LoadingButton>
);

export default PullButton;
