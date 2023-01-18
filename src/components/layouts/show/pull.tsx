import React, { useEffect, useMemo, useState } from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Prisma, PullStatus } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";
import { addWeeks } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import * as Diff3 from "node-diff3";

import { getRouterId, getRouterPullId } from "../../../helpers/router";
import { trpc } from "../../../utils/trpc";
import PullButton from "../../elements/button/group/pull";
import ScoreButtonGroup from "../../elements/button/group/score";
import type { DefaultTabsProps } from "../../elements/tabs/default";

import ShowLayout from "./";
import type { ShowLayoutProps } from "./";



export interface PullLayoutProps extends Pick<ShowLayoutProps, "children"> {
  data: Prisma.PullGetPayload<{
    include: { music: true; user: true; vote: true };
  }>;
  activeTab: "code" | "conversation";
}

const PullLayout: React.FC<PullLayoutProps> = ({
  data,
  activeTab,
  children,
}) => {
  const [conflict, setConflict] = useState(false);
  const [diff, setDiff] = useState(false);
  const queryClient = useQueryClient();
  const router = useRouter();
  const session = useSession();
  const id = getRouterId(router);
  const pullId = getRouterPullId(router);
  const update = trpc.pull.updateOnePull.useMutation({
    onSuccess: (data) => {
      queryClient.setQueryData<PullLayoutProps["data"]>(
        [
          ["pull", "findUniquePull"],
          {
            include: { music: true, user: true, vote: true },
            where: {
              id: pullId,
            },
          },
        ],
        (prev) =>
          prev
            ? {
                ...data,
                score: prev.score,
                user: prev.user,
                music: prev.music,
                vote: prev.vote,
              }
            : (data as PullLayoutProps["data"])
      );
    },
  });
  const create = trpc.vote.createOneVote.useMutation({
    onSuccess: (successData) => {
      fetch("/api/agenda", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ voteId: successData.id, pullId: data.id }),
      });
    },
  });
  const tabs: DefaultTabsProps["tabs"] = useMemo(
    () => [
      {
        label: "conversation",
        href: {
          pathname: "/musics/[id]/pulls/[pullId]",
          query: {
            id,
            pullId,
          },
        },
      },
      {
        label: "code",
        href: {
          pathname: "/musics/[id]/pulls/[pullId]/code",
          query: {
            id,
            pullId,
          },
        },
      },
    ],
    [id, pullId]
  );
  const handleUpdateStatus = (status: PullStatus) =>
    update.mutate({
      where: {
        id: pullId,
      },
      data: {
        status,
      },
    });
  const handleVote = () => {
    handleUpdateStatus("VOTE");
    create.mutate({
      data: {
        end: addWeeks(Date.now(), 1),
        pull: { connect: { id: pullId } },
      },
    });
  };
  const handleOpen = () => handleUpdateStatus("OPEN");
  const handleDraft = () => handleUpdateStatus("DRAFT");
  const handleClose = () => handleUpdateStatus("CLOSE");
  const handleMerge = () => {
    update.mutate({
      where: {
        id: pullId,
      },
      data: {
        status: "MERGE",
        music: { update: { score: data.score.changed } },
      },
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
            {session.data?.user?.id === data.userId && (
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
              />
            )}
          </Box>
          <ScoreButtonGroup
            loading={update.isLoading}
            watchButton={{
              route: {
                pathname: "/musics/[id]/pulls/[pullId]/score",
                query: {
                  id,
                  pullId,
                },
              },
              hidden: false,
            }}
            editButton={{
              route: {
                pathname: "/musics/[id]/pulls/[pullId]/score/edit",
                query: {
                  id,
                  pullId,
                },
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
