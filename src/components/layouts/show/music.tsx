import React, { useEffect, useState } from "react";

import { useModal } from "@ebay/nice-modal-react";
import MusicNote from "@mui/icons-material/MusicNote";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import type { Locale, Prisma } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import { isNonEmpty } from "ts-array-length";
import { match } from "ts-pattern";

import { getImage } from "../../../helpers/image";
import setLocale from "../../../helpers/locale";
import { getMusicOwner } from "../../../helpers/music";
import { getCurrentUserId, isAuth } from "../../../helpers/user";
import type {
  MusicShowArgsType,
  MusicShowQueryType,
} from "../../../paths/musics/[id]";
import { trpc } from "../../../utils/trpc";
import LocaleAlert from "../../elements/alert/locale";
import Image from "../../elements/image";
import type { DefaultTabsProps } from "../../elements/tabs/default";

import DefaultShowLayout from "./default";
import type { DefaultShowLayoutProps } from "./default";

export interface MusicLayoutProps
  extends Pick<DefaultShowLayoutProps, "children"> {
  data: Prisma.MusicGetPayload<MusicShowArgsType>;
  query: MusicShowQueryType;
  activeTab: "info" | "issues" | "pullrequests" | "settings";
}

const MusicLayout = ({
  data,
  query,
  activeTab,
  children,
}: MusicLayoutProps) => {
  const router = useRouter<"/musics/[id]">(),
    { data: session, status } = useSession(),
    { show } = useModal("auth-dialog"),
    queryClient = useQueryClient(),
    { enqueueSnackbar } = useSnackbar(),
    update = trpc.music.updateOneMusic.useMutation({
      onSuccess: (data) => {
        queryClient.setQueryData(
          getQueryKey(trpc.music.findUniqueMusic, query, "query"),
          data
        );
        enqueueSnackbar("music.update success");
      },
      onError: () => enqueueSnackbar("music.update error"),
    }),
    { id } = router.query,
    { type, albums, resource } = data,
    { bookmarks } = resource,
    tabs: DefaultTabsProps["tabs"] = [
      { label: "info", pathname: "/musics/[id]" },
      { label: "issues", pathname: "/musics/[id]/issues" },
      { label: "pullrequests", pathname: "/musics/[id]/pulls" },
      { label: "settings", pathname: "/musics/[id]/settings" },
    ];

  return (
    <DefaultShowLayout
      activeTab={activeTab}
      bookmarkToggleButtonProps={{
        disabled: update.isLoading,
        onClick: () => {
          if (isAuth(status))
            update.mutate({
              ...query,
              data: {
                resource: {
                  update: {
                    bookmarks: isNonEmpty(bookmarks)
                      ? { delete: { id: bookmarks[0].id } }
                      : {
                          create: {
                            user: {
                              connect: { id: getCurrentUserId(session) },
                            },
                            ...(data.type === "ORIGINAL" && data.user
                              ? {
                                  notifications: {
                                    create: {
                                      unionType: "Bookmark",
                                      user: { connect: { id } },
                                    },
                                  },
                                }
                              : {}),
                          },
                        },
                  },
                },
              },
            });
          else show();
        },
      }}
      icon={<MusicNote />}
      resource={resource}
      tabs={tabs}
      title={
        <>
          <MusicTitle data={data} />
          <Box ml={3}>
            <Chip label={type} size="small" />
          </Box>
          {isNonEmpty(resource.links) && (
            <Box display="flex" justifyContent="center" pl={3}>
              <Image
                alt={setLocale(resource.name, router)}
                height="80"
                src={
                  getImage(
                    { ...resource.links, ...albums[0]?.resource.links },
                    80
                  ) || ""
                }
                style={{ borderRadius: 5 }}
              />
            </Box>
          )}
        </>
      }
      type="Music"
    >
      {resource.name?.[router.locale as keyof Locale] === null && (
        <LocaleAlert />
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
      <Owner data={data} /> {setLocale(data.resource.name, router)}
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
