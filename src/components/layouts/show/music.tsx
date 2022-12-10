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
import BookmarkToggleButton from "../../elements/button/toggle/bookmark";
import { useSession } from "next-auth/react";
import { useModal } from "../../../hooks/useModal";
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
  bookmarked: boolean;
  activeTab: "info" | "issues" | "pullrequests" | "settings";
}

const MusicLayout: React.FC<MusicLayoutProps> = ({
  data,
  activeTab,
  bookmarked,
  children,
}) => {
  const router = useRouter();
  const session = useSession();
  const { handleOpen } = useModal();
  const bookmarkCreate = trpc.useMutation(["music.bookmark.create"]);
  const bookmarkDestroy = trpc.useMutation(["music.bookmark.destroy"]);
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

  const handleUpdate = (
    value: boolean,
    setValue: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (!session.data?.user) return handleOpen();
    if (value)
      bookmarkDestroy.mutate(
        { id: router.query.id as string },
        { onSuccess: () => setValue(false) }
      );
    else
      bookmarkCreate.mutate(
        { id: router.query.id as string },
        { onSuccess: () => setValue(true) }
      );
  };

  return (
    <DefaultShowLayout
      activeTab={activeTab}
      tabs={tabs}
      title={
        <Box display="flex" alignItems="center">
          <IconButton onClick={() => router.push("/musics")}>
            <ResourceIcon resource="music" />
          </IconButton>
          <MusicTitle data={data} />
          <Box ml={3}>
            <Chip label={data?.type} size="small" />
          </Box>
          <BookmarkToggleButton
            defaultValue={bookmarked}
            loading={bookmarkCreate.isLoading || bookmarkDestroy.isLoading}
            onClick={handleUpdate}
          />
        </Box>
      }
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
  data: Prisma.MusicGetPayload<{
    include: {
      artists: true;
      band: true;
      composers: true;
      lyrists: true;
      user: true;
    };
  }>;
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
            <Link href={{ pathname: "/bands/[id]", query: { id: band.id } }}>
              <a>{setLocale(band.name, router)} /</a>
            </Link>
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
