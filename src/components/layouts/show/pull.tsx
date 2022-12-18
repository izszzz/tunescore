import React, { useEffect, useMemo, useState } from "react";
import * as Diff3 from "node-diff3";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import Box from "@mui/material/Box";
import { Prisma } from "@prisma/client";
import ShowLayout, { ShowLayoutProps } from "./";
import { trpc } from "../../../utils/trpc";
import { DefaultTabsProps } from "../../elements/tabs/default";
import PullButton from "../../elements/button/group/pull";
import { useSession } from "next-auth/react";
import { useQueryClient } from "react-query";
import ButtonGroup from "@mui/material/ButtonGroup";
import LoadingButton from "@mui/lab/LoadingButton";

export interface PullLayoutProps extends Pick<ShowLayoutProps, "children"> {
  data: Prisma.PullGetPayload<{ include: { music: true; user: true } }>;
  activeTab: "code" | "conversation";
}

const PullLayout: React.FC<PullLayoutProps> = ({
  data,
  activeTab,
  children,
}) => {
  const [conflict, setConflict] = useState(true);
  const [diff, setDiff] = useState(true);
  const queryClient = useQueryClient();
  const router = useRouter();
  const session = useSession();
  const id = router.query.id as string;
  const pullId = router.query.pullId as string;
  const update = trpc.useMutation("pull.updateOnePull", {
    onSuccess: (data) => {
      queryClient.setQueryData<PullLayoutProps["data"]>(
        [
          "pull.findUniquePull",
          {
            include: { music: true, user: true },
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
              }
            : (data as PullLayoutProps["data"])
      );
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
  const handleOpen = () =>
    update.mutate({
      where: {
        id: pullId,
      },
      data: {
        status: "OPEN",
      },
    });
  const handleDraft = () =>
    update.mutate({
      where: {
        id: pullId,
      },
      data: {
        status: "DRAFT",
      },
    });
  const handleMerge = () => {
    update.mutate({
      where: {
        id: pullId,
      },
      data: {
        status: "MERGED",
        music: { update: { score: data.score.changed } },
      },
    });
  };
  const handleClose = () => {
    update.mutate({
      where: {
        id: pullId,
      },
      data: { status: "CLOSED" },
    });
  };
  useEffect(() => {
    if (data?.music.score) {
      const merged = Diff3.mergeDiff3(
        data.music.score,
        data.score.original,
        data.score.changed
      );
      setConflict(merged.conflict);
      setDiff(data.score.original !== data.score.changed);
    }
  }, [data]);

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
                type={data.music.type}
                status={data.status}
                conflict={conflict}
                diff={diff}
                loading={update.isLoading}
                onOpen={handleOpen}
                onClose={handleClose}
                onMerge={handleMerge}
                onDraft={handleDraft}
                onVote={() => console.log("create vote")}
              />
            )}
          </Box>
          <ButtonGroup fullWidth>
            <LoadingButton
              loading={update.isLoading}
              variant="outlined"
              onClick={() =>
                router.push({
                  pathname: "/musics/[id]/pulls/[pullId]/score",
                  query: {
                    id: router.query.id as string,
                    pullId: router.query.pullId as string,
                  },
                })
              }
            >
              Watch Score
            </LoadingButton>
            <LoadingButton
              loading={update.isLoading}
              variant="outlined"
              onClick={() =>
                router.push({
                  pathname: "/musics/[id]/pulls/[pullId]/score/edit",
                  query: {
                    id: router.query.id as string,
                    pullId: router.query.pullId as string,
                  },
                })
              }
            >
              Edit Score
            </LoadingButton>
          </ButtonGroup>
        </>
      }
    >
      {children}
    </ShowLayout>
  );
};

export default PullLayout;
