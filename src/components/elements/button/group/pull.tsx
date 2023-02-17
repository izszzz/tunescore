import React from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import type { LoadingButtonProps } from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import type { Prisma } from "@prisma/client";
import { useSession } from "next-auth/react";
import { match } from "ts-pattern";

import type { PullShowArgsType } from "../../../../paths/musics/[id]/pulls/[pullId]";
import VoteCard from "../../card/vote";
import PullStatusIcon from "../../icon/pull/status";

interface PullButtonProps {
  conflict: boolean;
  diff: boolean;
  loading: boolean;
  data: Prisma.PullGetPayload<PullShowArgsType>;
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
  return match(data)
    .with({ status: "DRAFT" }, () =>
      session?.user?.id === data.userId ? (
        <PullOpenButton loading={loading} onClick={onOpen} fullWidth />
      ) : (
        <></>
      )
    )
    .with({ status: "MERGE" }, () => (
      <Button variant="outlined" color="secondary" disabled fullWidth>
        MERGED
      </Button>
    ))
    .with({ music: { type: "ORIGINAL" }, status: "OPEN" }, () =>
      session?.user?.id === data.userId ? (
        <ButtonGroup fullWidth>
          <PullMergeButton
            loading={loading}
            disabled={conflict || !diff}
            onClick={onMerge}
          />
          <PullCloseButton loading={loading} onClick={onClose} />
          <PullDraftButton loading={loading} onClick={onDraft} />
        </ButtonGroup>
      ) : (
        <></>
      )
    )
    .with({ music: { type: "COPY" }, status: "OPEN" }, () =>
      session?.user?.id === data.userId ? (
        <ButtonGroup fullWidth>
          <VoteCreateButton
            loading={loading}
            conflict={conflict}
            diff={diff}
            onClick={onVote}
          />
          <PullCloseButton loading={loading} onClick={onClose} />
          <PullDraftButton loading={loading} onClick={onDraft} />
        </ButtonGroup>
      ) : (
        <></>
      )
    )
    .with({ music: { type: "ORIGINAL" }, status: "VOTE" }, () => <>vote</>)
    .with({ music: { type: "COPY" }, status: "VOTE" }, () => {
      const voted =
        !!data.vote?.proponents.length || !!data.vote?.opponents.length;
      return (
        <VoteCard
          data={data}
          goodIconButtonProps={{
            disabled: voted,
            onClick: () => onGood(),
          }}
          badIconButtonProps={{
            disabled: voted,
            onClick: () => onBad(),
          }}
        />
      );
    })
    .with({ status: "CLOSE" }, () =>
      session?.user?.id === data.userId ? (
        <PullDraftButton loading={loading} onClick={onDraft} fullWidth />
      ) : (
        <></>
      )
    )
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
    startIcon={<PullStatusIcon status="VOTE" />}
    disabled={conflict || !diff}
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
