import React, { useEffect, useMemo, useState } from "react";

import { useModal } from "@ebay/nice-modal-react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import type { Locale, Prisma } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import { match } from "ts-pattern";

import { bookmarkMutate } from "../../../helpers/bookmark";
import { getImage } from "../../../helpers/image";
import setLocale from "../../../helpers/locale";
import { getMusicOwner } from "../../../helpers/music";
import { getRouterId } from "../../../helpers/router";
import type {
  MusicShowArgsType,
  musicShowQuery,
} from "../../../paths/musics/[id]";
import { trpc } from "../../../utils/trpc";
import LocaleAlert from "../../elements/alert/locale";
import ResourceIconButton from "../../elements/button/icon/resource";
import Image from "../../elements/image";
import type { DefaultTabsProps } from "../../elements/tabs/default";

import DefaultShowLayout from "./default";
import type { DefaultShowLayoutProps } from "./default";

export interface MusicLayoutProps
  extends Pick<DefaultShowLayoutProps, "children"> {
  data: Prisma.MusicGetPayload<MusicShowArgsType>;
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
  const { data: session, status } = useSession();
  const { show } = useModal("auth-dialog");
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const id = getRouterId(router);
  const update = trpc.music.updateOneMusic.useMutation({
    onSuccess: (data) => {
      queryClient.setQueryData<typeof data>(
        [["music", "findUniqueMusic"], query],
        data
      );
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
                src={getImage(data.link?.streaming, 80) || ""}
              />
            </Box>
          )}
        </>
      }
      tagMaps={data.tagMaps}
      bookmarkToggleButtonProps={{
        value: !!data.bookmarks.length,
        disabled: update.isLoading,
        onClick: () => {
          if (status === "authenticated")
            update.mutate({
              ...query,
              data: {
                bookmarks: bookmarkMutate({
                  type: "Music",
                  data,
                  session,
                }),
              },
            });
          else show();
        },
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
        <Box
          component="a"
          sx={{ cursor: "pointer", textDecoration: "underline" }}
        >
          {owner.name}
        </Box>
      </Link>{" "}
      /
    </>
  );
};

export default MusicLayout;
