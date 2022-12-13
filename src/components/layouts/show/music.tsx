import React, { useMemo } from "react";
import { useRouter } from "next/router";
import { Locales, Prisma } from "@prisma/client";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { trpc } from "../../../utils/trpc";
import DefaultShowLayout, { DefaultShowLayoutProps } from "./default";
import setLocale from "../../../utils/setLocale";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { DefaultTabsProps } from "../../elements/tabs/default";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { useSession } from "next-auth/react";
import ResourceIcon from "../../elements/icon/resource";
import { IconButton } from "@mui/material";

export interface MusicLayoutProps
  extends Pick<DefaultShowLayoutProps, "children"> {
  data: Prisma.MusicGetPayload<{
    include: {
      artists: true;
      band: true;
      composers: true;
      lyrists: true;
      user: true;
    };
  }>;
  activeTab: "info" | "issues" | "pullrequests" | "settings";
}

const MusicLayout: React.FC<MusicLayoutProps> = ({
  data,
  activeTab,
  children,
}) => {
  const router = useRouter();
  const session = useSession();
  const bookmarked = trpc.useQuery([
    "bookmarked.music",
    { id: router.query.id as string },
  ]);
  const bookmarkCreate = trpc.useMutation(["music.updateOneMusic"]);
  const bookmarkDestroy = trpc.useMutation(["music.updateOneMusic"]);
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
        </>
      }
      bookmarkToggleButtonProps={{
        defaultValue: !!bookmarked.data,
        loading: bookmarkCreate.isLoading || bookmarkDestroy.isLoading,
        onEnabled: (setValue) =>
          bookmarkDestroy.mutate(
            {
              where: { id: router.query.id as string },
              data: {
                bookmarks: {
                  disconnect: { id: session.data?.user?.id },
                },
              },
            },
            { onSuccess: () => setValue(false) }
          ),
        onDisabled: (setValue) =>
          bookmarkCreate.mutate(
            {
              where: { id: router.query.id as string },
              data: {
                bookmarks: {
                  connect: { id: session.data?.user?.id },
                },
              },
            },
            { onSuccess: () => setValue(true) }
          ),
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
  if (data.type === "ORIGINAL")
    return (
      <Typography variant="h5">
        {data.user && (
          <>
            <Link
              href={{ pathname: "/users/[id]", query: { id: data.user.id } }}
            >
              <a>{data.user?.name}</a>
            </Link>{" "}
            /
          </>
        )}
        {setLocale(data.title, router)}
      </Typography>
    );
  if (data.type === "COPY") {
    if (data.band) {
      const { band } = data;
      return (
        <Typography variant="h5">
          {
            <>
              <Link href={{ pathname: "/bands/[id]", query: { id: band.id } }}>
                <a>{setLocale(band.name, router)} </a>
              </Link>{" "}
              /
            </>
          }
          {setLocale(data.title, router)}
        </Typography>
      );
    }
    if (data.composers.length) {
      const { composers } = data;
      const composer = composers[0];
      return (
        <Typography variant="h5">
          {composer && (
            <>
              <Link
                href={{ pathname: "/artists/[id]", query: { id: composer.id } }}
              >
                <a>{setLocale(composer.name, router)}</a>
              </Link>{" "}
              /
            </>
          )}
          {setLocale(data.title, router)}
        </Typography>
      );
    }
  }
  return (
    <Typography variant="h5"> {setLocale(data.title, router)} </Typography>
  );
};

export default MusicLayout;
