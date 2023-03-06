import React, { useEffect, useState } from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Prisma, PullStatus } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { addMinutes, addWeeks } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import * as Diff3 from "node-diff3";
import { useSnackbar } from "notistack";

import { getCurrentUserId } from "../../../helpers/user";
import type {
  PullShowArgsType,
  PullShowQueryType,
} from "../../../paths/musics/[id]/pulls/[pullId]";
import { trpc } from "../../../utils/trpc";
import PullButton from "../../elements/button/group/pull";
import ScoreButtonGroup from "../../elements/button/group/score";
import type { DefaultTabsProps } from "../../elements/tabs/default";

import ShowLayout from "./";
import type { ShowLayoutProps } from "./";

export interface PullLayoutProps extends Pick<ShowLayoutProps, "children"> {
  data: Prisma.PullGetPayload<PullShowArgsType>;
  query: PullShowQueryType;
  activeTab: "code" | "conversation";
}

const PullLayout: React.FC<PullLayoutProps> = ({
  data,
  activeTab,
  children,
  query,
}) => {
  const [conflict, setConflict] = useState(false),
    [diff, setDiff] = useState(false),
    router = useRouter<"/musics/[id]/pulls/[pullId]">(),
    queryClient = useQueryClient(),
    { enqueueSnackbar } = useSnackbar(),
    { data: session } = useSession(),
    { id, pullId } = router.query,
    agenda = trpc.agenda.create.useMutation(),
    update = trpc.pull.updateOnePull.useMutation({
      onSuccess: (data) => {
        queryClient.setQueryData(
          getQueryKey(trpc.pull.findUniquePull, query, "query"),
          data
        );
        enqueueSnackbar("pull.update success");
      },
      onError: () => enqueueSnackbar("pull.update error"),
    }),
    create = trpc.vote.createOneVote.useMutation({
      onSuccess: (data) => {
        agenda.mutate(pullId);
        queryClient.setQueryData(
          getQueryKey(trpc.pull.findUniquePull, query, "query"),
          (prev) => ({ ...(prev as PullLayoutProps["data"]), vote: data })
        );
        enqueueSnackbar("pull.create success");
      },
      onError: () => enqueueSnackbar("pull.create error"),
    }),
    tabs: DefaultTabsProps["tabs"] = [
      { label: "conversation", pathname: "/musics/[id]/pulls/[pullId]" },
      { label: "code", pathname: "/musics/[id]/pulls/[pullId]/code" },
    ];
  const handleUpdate = (
      input: Omit<Parameters<typeof update.mutate>[0], "where">
    ) => update.mutate({ ...input, ...query }),
    handleUpdateStatus = (status: PullStatus) =>
      handleUpdate({ data: { status } }),
    handleOpen = () => handleUpdateStatus("OPEN"),
    handleDraft = () => handleUpdateStatus("DRAFT"),
    handleClose = () => handleUpdateStatus("CLOSE"),
    handleMerge = () =>
      handleUpdate({
        data: {
          status: "MERGE",
          music: { update: { score: data.score.changed } },
        },
      }),
    handleVote = () => {
      handleUpdateStatus("VOTE");
      create.mutate({
        data: {
          end:
            process.env.NODE_ENV === "development"
              ? addMinutes(Date.now(), 2)
              : addWeeks(Date.now(), 1),
          pull: { connect: { id: pullId } },
        },
        ...query.include.vote,
      });
    };
  useEffect(() => {
    const merged = Diff3.mergeDiff3(
      data.music.score || "",
      data.score.original,
      data.score.changed
    );
    setConflict(merged.conflict);
    setDiff(data.score.original !== data.score.changed);
  }, [data.music.score, data.score.changed, data.score.original]);

  return (
    <ShowLayout
      contained={false}
      activeTab={activeTab}
      tabs={tabs}
      title={
        <>
          <Box display="flex" alignItems="center">
            <Avatar src={data.user.image || ""} />
            <Typography variant="h4" ml={3}>
              {data.title}
            </Typography>
          </Box>
          <Link
            href={{
              pathname: "/users/[id]",
              query: { id: data.user.id as string },
            }}
          >
            <Typography variant="subtitle2" color="text.secondary">
              {data.user.name}
            </Typography>
          </Link>
          <Box my={3}>
            <PullButton
              data={data}
              conflict={conflict}
              diff={diff}
              loading={update.isLoading}
              onOpen={handleOpen}
              onClose={handleClose}
              onMerge={handleMerge}
              onDraft={handleDraft}
              onVote={handleVote}
              onGood={() =>
                handleUpdate({
                  data: {
                    vote: {
                      update: {
                        proponents: {
                          connect: { id: getCurrentUserId(session) },
                        },
                      },
                    },
                  },
                })
              }
              onBad={() =>
                handleUpdate({
                  data: {
                    vote: {
                      update: {
                        opponents: {
                          connect: { id: getCurrentUserId(session) },
                        },
                      },
                    },
                  },
                })
              }
            />
          </Box>
          <ScoreButtonGroup
            loading={update.isLoading}
            watch={{
              route: {
                pathname: "/musics/[id]/pulls/[pullId]/score",
                query: { id, pullId },
              },
              hidden: false,
            }}
            edit={{
              route: {
                pathname: "/musics/[id]/pulls/[pullId]/score/edit",
                query: { id, pullId },
              },
              hidden: false,
            }}
          />
        </>
      }
    >
      {children}
    </ShowLayout>
  );
};

export default PullLayout;
