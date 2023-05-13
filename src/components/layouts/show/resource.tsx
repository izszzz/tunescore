import React from "react";

import { useModal } from "@ebay/nice-modal-react";
import LocalOffer from "@mui/icons-material/LocalOffer";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { Prisma, ResourceUnionType } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import { isNonEmpty } from "ts-array-length";
import { P, match } from "ts-pattern";

import { bookmarkMutate } from "../../../helpers/bookmark";
import { getImage } from "../../../helpers/image";
import setLocale from "../../../helpers/locale";
import { getMusicLinks } from "../../../helpers/music";
import type {
  ResourceShowQueryType,
  ResourceShowQueryParameter,
  resourceAlbumShowQuery,
  resourceArtistShowQuery,
  resourceBandShowQuery,
  resourceMusicShowQuery,
} from "../../../helpers/resource";
import { getOwner } from "../../../helpers/resource";
import { isAuth } from "../../../helpers/user";
import { trpc } from "../../../utils/trpc";
import LocaleAlert from "../../elements/alert/locale";
import FlagIconButton from "../../elements/button/icon/flag";
import BookmarkToggleButton from "../../elements/button/icon/toggle/bookmark";
import LinkButtons from "../../elements/button/link";
import Footer from "../../elements/footer";
import DefaultHeader from "../../elements/header/default";
import ResourceIcon from "../../elements/icon/resource";
import Image from "../../elements/image";
import type { DefaultTabsProps } from "../../elements/tabs/default";

import ShowLayout from ".";
import type { ShowLayoutProps } from ".";
export type ResourceData = Prisma.ResourceGetPayload<ResourceShowQueryType>;
export interface ResourceShowLayoutProps
  extends Omit<ShowLayoutProps, "title" | "tabs" | "children"> {
  activeTab: DefaultTabsProps["tabs"][0]["label"];
  getQuery: ({
    session,
    router,
  }: ResourceShowQueryParameter) =>
    | ReturnType<typeof resourceMusicShowQuery>
    | ReturnType<typeof resourceAlbumShowQuery>
    | ReturnType<typeof resourceArtistShowQuery>
    | ReturnType<typeof resourceBandShowQuery>;
  children: (data: ResourceData | undefined) => React.ReactNode;
}

const ResourceShowLayout = ({
  children,
  getQuery,
  ...props
}: ResourceShowLayoutProps) => {
  const router = useRouter<ResourceShowQueryParameter["router"]["pathname"]>(),
    { data: session } = useSession(),
    query = getQuery({ router, session }),
    { data, isLoading } = trpc.resource.findUniqueResource.useQuery(query),
    resourceData = data as ResourceData | undefined;

  return (
    <ShowLayout
      {...props}
      footer={<Footer />}
      header={<DefaultHeader />}
      loading={isLoading}
      tabs={resourceData?.unionType ? getTabs(resourceData.unionType) : []}
      title={
        resourceData ? (
          <ResourceTitle data={resourceData} query={query} />
        ) : null
      }
    >
      {resourceData?.name?.[router.locale] === null && <LocaleAlert />}
      {children(resourceData)}
    </ShowLayout>
  );
};

export default ResourceShowLayout;

const ResourceTitle = ({
  data,
  query,
}: {
  data: ResourceData;
  query: ReturnType<ResourceShowLayoutProps["getQuery"]>;
}) => {
  const router = useRouter<ResourceShowQueryParameter["router"]["pathname"]>(),
    { data: session, status } = useSession(),
    { show } = useModal("report-dialog"),
    queryClient = useQueryClient(),
    { enqueueSnackbar } = useSnackbar(),
    update = trpc.resource.updateOneResource.useMutation({
      onSuccess: (data) => {
        queryClient.setQueryData(
          getQueryKey(trpc.resource.findUniqueResource, query, "query"),
          data
        );
        enqueueSnackbar(`${type}.update success`);
      },
      onError: () => enqueueSnackbar(`type.update error`),
    }),
    {
      query: { id },
    } = router,
    { unionType: type, bookmarks, name, links, genres } = data,
    image = getImage(getMusicLinks(data), 80, { channel: true });
  return (
    <>
      <Box alignItems="center" display="flex" justifyContent="space-between">
        <Box alignItems="center" display="flex">
          <IconButton
            onClick={() =>
              router.push({ pathname: "/search", query: { type } })
            }
          >
            <ResourceIcon type={type} />
          </IconButton>
          <Typography variant="h5">
            {match(type)
              .with("Music", () => <Owner data={data} />)
              .with(P.union("Album", "Band", "Artist"), () => null)
              .exhaustive()}
            {setLocale(name, router)}
          </Typography>
          {image && (
            <Box display="flex" justifyContent="center" pl={3}>
              <Image
                alt="image"
                height="80"
                src={image}
                style={{ borderRadius: 5 }}
              />
            </Box>
          )}
        </Box>
        <Box>
          <BookmarkToggleButton
            onClick={() => {
              if (isAuth(status))
                update.mutate({
                  ...query,
                  ...bookmarkMutate({ bookmarks, session }),
                });
              else show();
            }}
            value={isNonEmpty(bookmarks)}
          />
          <FlagIconButton onClick={() => show({ unionType: type, id })} />
        </Box>
      </Box>
      <Stack direction="row" spacing={1}>
        {genres.map((genre) => (
          <Chip
            icon={<LocalOffer />}
            key={genre.id}
            label={genre.name}
            size="small"
            variant="outlined"
          />
        ))}
      </Stack>
      <LinkButtons data={links} type={type} />
    </>
  );
};

const Owner = ({ data }: { data: ResourceData }) => {
    const router = useRouter(),
      { type, owner } = getOwner(data, router);
    if (type === "NONE" || owner === null) return null;
    if (owner.name) return null;
    return (
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
        {owner.name} /
      </Box>
    );
  },
  getTabs = (type: ResourceUnionType): DefaultTabsProps["tabs"] =>
    match(type)
      .with("Music", () => [
        { label: "info", pathname: "/musics/[id]" } as const,
        { label: "issues", pathname: "/musics/[id]/issues" } as const,
        { label: "pullrequests", pathname: "/musics/[id]/pulls" } as const,
        { label: "settings", pathname: "/musics/[id]/settings" } as const,
      ])
      .with("Album", () => [
        { label: "info", pathname: "/albums/[id]" } as const,
        { label: "settings", pathname: "/albums/[id]/settings" } as const,
      ])
      .with("Artist", () => [
        { label: "info", pathname: "/artists/[id]" } as const,
        { label: "settings", pathname: "/artists/[id]/settings" } as const,
      ])
      .with("Band", () => [
        { label: "info", pathname: "/bands/[id]" } as const,
        { label: "settings", pathname: "/bands/[id]/settings" } as const,
      ])
      .exhaustive();
