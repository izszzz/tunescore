import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { useSession } from "next-auth/react";
import { IconButton } from "@mui/material";
import ResourceIcon from "../../elements/icon/resource";
import { trpc } from "../../../utils/trpc";
import setLocale from "../../../helpers/setLocale";
import musicOwner from "../../../helpers/musicOwner";
import { selectSuitableStreamingImage } from "../../../helpers/selectSuitableImage";
import DefaultShowLayout from "./default";
import type { DefaultShowLayoutProps } from "./default";
import type { DefaultTabsProps } from "../../elements/tabs/default";
import type { Locales, Prisma } from "@prisma/client";
import { createPath } from "../../../helpers/createPath";
import { useQueryClient } from "react-query";
import { useSnackbar } from "notistack";
import { musicShowPath } from "../../../paths/musics/[id]";

export interface MusicLayoutProps
  extends Pick<DefaultShowLayoutProps, "children"> {
  data: Prisma.MusicGetPayload<{
    include: {
      band: {
        include: {
          _count: {
            select: {
              bookmarks: true;
              artists: true;
              musics: true;
            };
          };
        };
      };
      artists: {
        include: {
          bands: true;
          _count: {
            select: {
              bookmarks: true;
            };
          };
        };
      };
      composers: {
        include: {
          bands: true;
          _count: {
            select: {
              bookmarks: true;
            };
          };
        };
      };
      lyrists: {
        include: {
          bands: true;
          _count: {
            select: {
              bookmarks: true;
            };
          };
        };
      };
      user: true;
      pulls: { include: { vote: true } };
      tagMaps: { include: { tag: true } };
      bookmarks: true;
    };
  }>;
  path: ReturnType<typeof musicShowPath>;
  activeTab: "info" | "issues" | "pullrequests" | "settings";
}

const MusicLayout = ({ data, path, activeTab, children }: MusicLayoutProps) => {
  const router = useRouter();
  const session = useSession();
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const id = router.query.id as string;
  const query = path[1];
  const update = trpc.useMutation(["music.updateOneMusic"], {
    onSuccess: (data) => {
      queryClient.setQueryData<typeof data>(path, data);
      enqueueSnackbar("music.update success");
    },
  });
  const tabs: DefaultTabsProps["tabs"] = useMemo(
    () => [
      {
        label: "info",
        href: {
          pathname: "/musics/[id]",
          query: { id: router.query.id as string },
        },
      },
      {
        label: "issues",
        href: {
          pathname: "/musics/[id]/issues",
          query: { id: router.query.id as string },
        },
      },
      {
        label: "pullrequests",
        href: {
          pathname: "/musics/[id]/pulls",
          query: { id: router.query.id as string },
        },
      },
      {
        label: "settings",
        href: {
          pathname: "/musics/[id]/settings",
          query: { id: router.query.id as string },
        },
      },
    ],
    [router.query.id]
  );

  return (
    <DefaultShowLayout
      activeTab={activeTab}
      tabs={tabs}
      title={
        <>
          <IconButton onClick={() => router.push("/musics")}>
            <ResourceIcon resource="music" />
          </IconButton>
          <MusicTitle data={data} />
          <Box ml={3}>
            <Chip label={data?.type} size="small" />
          </Box>
          {data.link?.streaming && (
            <Box display="flex" justifyContent="center" pl={3}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                style={{ borderRadius: 5 }}
                height="80"
                width="80"
                alt={setLocale(data.title, router) || ""}
                src={
                  selectSuitableStreamingImage(data.link.streaming)?.image?.size
                    ?.medium || ""
                }
              />
            </Box>
          )}
        </>
      }
      tagMaps={data.tagMaps}
      bookmarkToggleButtonProps={{
        value: !!data.bookmarks.length,
        disabled: update.isLoading,
        onClick: (value) =>
          update.mutate({
            ...query,
            data: {
              bookmarks: {
                [value ? "delete" : "create"]: {
                  resourceType: "Music",
                  user: { connect: { id: session.data?.user?.id } },
                },
              },
            },
          }),
      }}
    >
      {data.title[router.locale as keyof Locales] === null && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="warning">
            <AlertTitle>指定された言語の曲タイトルが登録されてねえ</AlertTitle>
            登録しろ
          </Alert>
        </Stack>
      )}
      {children}
    </DefaultShowLayout>
  );
};

interface MusicTitleProps {
  data: MusicLayoutProps["data"];
}
const MusicTitle = ({ data }: MusicTitleProps) => {
  const router = useRouter();
  return (
    <Typography variant="h5">
      <Owner data={data} /> {setLocale(data.title, router)}
    </Typography>
  );
};

interface OwnerProps {
  data: MusicTitleProps["data"];
}
const Owner = ({ data }: OwnerProps) => {
  const [pathname, setPathname] = useState<
    "/users/[id]" | "/bands/[id]" | "/artists/[id]"
  >("/users/[id]");
  const router = useRouter();
  const { type, owner } = musicOwner(data, router);
  useEffect(() => {
    switch (type) {
      case "user":
        setPathname("/users/[id]");
        break;
      case "band":
        setPathname("/bands/[id]");
        break;
      case "composer":
      case "lyrist":
        setPathname("/artists/[id]");
        break;
    }
  }, [type]);
  if (type === "none" || owner === null) return <></>;
  return (
    <>
      <Link href={{ pathname, query: { id: owner.id } }}>
        <a>{owner.name}</a>
      </Link>{" "}
      /
    </>
  );
};

export default MusicLayout;
