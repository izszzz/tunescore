import React from "react";

import { useModal } from "@ebay/nice-modal-react";
import MusicNote from "@mui/icons-material/MusicNote";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import type { Locale, Prisma } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import { isNonEmpty } from "ts-array-length";
import { match } from "ts-pattern";

import { getImage } from "../../../helpers/image";
import setLocale from "../../../helpers/locale";
import { getMusicLinks } from "../../../helpers/music";
import { getOwner } from "../../../helpers/resource";
import { getCurrentUserId, isAuth } from "../../../helpers/user";
import type {
  MusicShowArgsType,
  MusicShowQueryType,
} from "../../../paths/musics/[id]";
import { trpc } from "../../../utils/trpc";
import LocaleAlert from "../../elements/alert/locale";
import Image from "../../elements/image";
import type { DefaultTabsProps } from "../../elements/tabs/default";

import DefaultShowLayout from "./resource";
import type { ResourceShowLayoutProps } from "./resource";

export interface MusicLayoutProps
  extends Pick<ResourceShowLayoutProps, "children"> {
  data: Prisma.ResourceGetPayload<MusicShowArgsType>;
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
    update = trpc.resource.updateOneResource.useMutation({
      onSuccess: (data) => {
        queryClient.setQueryData(
          getQueryKey(trpc.resource.findUniqueResource, query, "query"),
          data
        );
        enqueueSnackbar("music.update success");
      },
      onError: () => enqueueSnackbar("music.update error"),
    }),
    { id } = router.query,
    { music, bookmarks } = data,
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
                bookmarks: isNonEmpty(bookmarks)
                  ? { delete: { id: bookmarks[0].id } }
                  : {
                      create: {
                        user: {
                          connect: { id: getCurrentUserId(session) },
                        },
                        ...(music?.type === "ORIGINAL" && music?.user
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
            });
          else show();
        },
      }}
      icon={<MusicNote />}
      resource={data}
      tabs={tabs}
      title={
        <>
          <MusicTitle data={data} />
          <Box ml={3}>
            <Chip label={music?.type} size="small" />
          </Box>
          {isNonEmpty(data.links) && (
            <Box display="flex" justifyContent="center" pl={3}>
              <Image
                alt={setLocale(data.name, router)}
                height="80"
                src={getImage(getMusicLinks(data), 80) ?? ""}
                style={{ borderRadius: 5 }}
              />
            </Box>
          )}
        </>
      }
      type="Music"
    >
      {data?.name?.[router.locale as keyof Locale] === null && <LocaleAlert />}
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
      <Owner data={data} /> {setLocale(data?.name, router)}
    </Typography>
  );
};

interface OwnerProps {
  data: MusicTitleProps["data"];
}
const Owner = ({ data }: OwnerProps) => {
  const router = useRouter(),
    { type, owner } = getOwner(data, router);
  if (type === "NONE" || owner === null) return <></>;
  return (
    <>
      <Box
        component="a"
        onClick={() =>
          router.push({
            pathname: match(type)
              .with("User", () => "/users/[id]" as const)
              .with("Band", () => "/bands/[id]" as const)
              .with("Artist", () => "/artists/[id]" as const)
              .exhaustive(),
            query: { id: owner.id },
          })
        }
        sx={{ cursor: "pointer", textDecoration: "underline" }}
      >
        {owner.name}
      </Box>
      /
    </>
  );
};

export default MusicLayout;
