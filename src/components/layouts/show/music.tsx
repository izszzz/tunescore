import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import { match } from "ts-pattern";
import { useQueryClient } from "@tanstack/react-query";
import { trpc } from "../../../utils/trpc";
import setLocale from "../../../helpers/locale";
import { getMusicOwner } from "../../../helpers/music";
import { getRouterId } from "../../../helpers/router";
import { bookmarkMutate } from "../../../helpers/bookmark";
import { getContentImage } from "../../../helpers/image";
import Image from "../../elements/image";
import LocaleAlert from "../../elements/alert/locale";
import ResourceIconButton from "../../elements/button/icon/resource";
import DefaultShowLayout from "./default";
import type { AlbumListArgsType } from "../../../helpers/album";
import type { DefaultShowLayoutProps } from "./default";
import type { DefaultTabsProps } from "../../elements/tabs/default";
import type { Locale, Prisma } from "@prisma/client";
import type { musicShowQuery } from "../../../paths/musics/[id]";
import type { BandListArgsType } from "../../../helpers/band";
import type { ArtistListArgsType } from "../../../helpers/artist";

export interface MusicLayoutProps
  extends Pick<DefaultShowLayoutProps, "children"> {
  data: Prisma.MusicGetPayload<{
    include: {
      band: BandListArgsType;
      participations: {
        include: {
          artist: ArtistListArgsType;
          roleMap: { include: { role: true } };
        };
      };
      albums: AlbumListArgsType;
      user: true;
      pulls: { include: { vote: true } };
      tagMaps: { include: { tag: true } };
      bookmarks: true;
    };
  }>;
  query: ReturnType<typeof musicShowQuery>;
  activeTab: "info" | "issues" | "pullrequests" | "settings";
}

const MusicLayout = ({
  data,
  query,
  activeTab,
  children,
}: MusicLayoutProps) => {
  const router = useRouter();
  const session = useSession();
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const id = getRouterId(router);
  const update = trpc.music.updateOneMusic.useMutation({
    onSuccess: (data) => {
      queryClient.setQueryData<typeof data>(query, data);
      enqueueSnackbar("music.update success");
    },
  });
  const tabs: DefaultTabsProps["tabs"] = useMemo(
    () => [
      {
        label: "info",
        href: {
          pathname: "/musics/[id]",
          query: { id },
        },
      },
      {
        label: "issues",
        href: {
          pathname: "/musics/[id]/issues",
          query: { id },
        },
      },
      {
        label: "pullrequests",
        href: {
          pathname: "/musics/[id]/pulls",
          query: { id },
        },
      },
      {
        label: "settings",
        href: {
          pathname: "/musics/[id]/settings",
          query: { id },
        },
      },
    ],
    [id]
  );

  return (
    <DefaultShowLayout
      activeTab={activeTab}
      tabs={tabs}
      title={
        <>
          <ResourceIconButton
            resource="MUSIC"
            onClick={() => router.push("/musics")}
          />
          <MusicTitle data={data} />
          <Box ml={3}>
            <Chip label={data?.type} size="small" />
          </Box>
          {data.link?.streaming && (
            <Box display="flex" justifyContent="center" pl={3}>
              <Image
                style={{ borderRadius: 5 }}
                height="80"
                alt={setLocale(data.title, router)}
                src={
                  getContentImage(data.link.streaming)?.image?.size?.medium ||
                  ""
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
        onClick: () =>
          update.mutate({
            ...query,
            data: {
              bookmarks: bookmarkMutate({
                type: "Music",
                data,
                session,
              }),
            },
          }),
      }}
    >
      {data.title[router.locale as keyof Locale] === null && <LocaleAlert />}
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
  const { type, owner } = getMusicOwner(data, router);
  useEffect(() => {
    setPathname(
      match(type)
        .with("USER", () => "/users/[id]" as const)
        .with("BAND", () => "/bands/[id]" as const)
        .with("ARTIST", () => "/artists/[id]" as const)
        .with("NONE", () => "/users/[id]" as const)
        .exhaustive()
    );
  }, [type]);
  if (type === "NONE" || owner === null) return <></>;
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
