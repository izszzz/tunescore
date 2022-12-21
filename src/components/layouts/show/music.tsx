import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { Locales, Prisma } from "@prisma/client";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import DefaultShowLayout, { DefaultShowLayoutProps } from "./default";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { useSession } from "next-auth/react";
import { IconButton } from "@mui/material";
import ResourceIcon from "../../elements/icon/resource";
import { DefaultTabsProps } from "../../elements/tabs/default";
import { trpc } from "../../../utils/trpc";
import setLocale from "../../../helpers/setLocale";
import musicOwner from "../../../helpers/musicOwner";

export interface MusicLayoutProps
  extends Pick<DefaultShowLayoutProps, "children"> {
  data: Prisma.MusicGetPayload<{
    include: {
      artists: true;
      band: true;
      composers: true;
      lyrists: true;
      user: true;
      pulls: { include: { vote: true } };
      bookmarks: true;
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
  const update = trpc.useMutation(["music.updateOneMusic"]);
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
        value: !!data.bookmarks.length,
        disabled: update.isLoading,
        onClick: (value) =>
          update.mutate({
            where: { id: router.query.id as string },
            data: {
              bookmarks: {
                [value ? "disconnect" : "connect"]: {
                  id: session.data?.user?.id,
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
