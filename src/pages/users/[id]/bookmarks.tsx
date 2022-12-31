import React from "react";
import UserLayout from "../../../components/layouts/show/user";
import type { Prisma } from "@prisma/client";
import type { NextPage } from "next";
import { trpc } from "../../../utils/trpc";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { userShowPath } from "../../../paths/users/[id]";
import { bookmarkPath } from "../../../paths/users/[id]/bookmark";
import MusicListItem from "../../../components/elements/list/item/music";
import IndexLayout from "../../../components/layouts/index";
import AlbumListItem from "../../../components/elements/list/item/album";
import BandListItem from "../../../components/elements/list/item/band";
import ArtistListItem from "../../../components/elements/list/item/artist";
import { useSnackbar } from "notistack";
import { getRouterId } from "../../../helpers/router";

const UserBookmarks: NextPage = () => {
  const session = useSession();
  const router = useRouter();
  const id = getRouterId(router);
  const { enqueueSnackbar } = useSnackbar();
  const path = userShowPath({ router, session });
  const { data } = trpc.useQuery(path);
  const { data: bookmarkData } = trpc.useQuery(
    bookmarkPath({ router, session })
  );
  const search = trpc.useMutation(["search.bookmark"], {
    onError: () => {
      enqueueSnackbar("music.search error");
    },
  });
  if (!data || !bookmarkData) return <></>;
  const userData = data as Prisma.UserGetPayload<{
    include: {
      _count: { select: { following: true; followers: true } };
      followers: true;
      bookmarks: true;
    };
  }>;
  return (
    <UserLayout data={userData} activeTab="">
      <IndexLayout
        meta={bookmarkData.meta}
        route={{
          pathname: "/users/[id]/bookmarks",
          query: { id },
        }}
        searchAutocompleteProps={{
          options: search.data || [],
          loading: search.isLoading,
          // getOptionLabel: (option) => option.title,
          textFieldProps: {
            onChange: (e) =>
              // search.mutate({
              //   where: {
              //     title: { contains: e.currentTarget.value },
              //     music: { id },
              //   },
              //   take: 10,
              // }),
              console.log("a"),
          },
        }}
      >
        {bookmarkData.data.map((bookmark) => {
          switch (bookmark.resourceType) {
            case "Music":
              return bookmark.music && <MusicListItem data={bookmark.music} />;
            case "Album":
              return bookmark.album && <AlbumListItem data={bookmark.album} />;
            case "Band":
              return bookmark.band && <BandListItem data={bookmark.band} />;
            case "Artist":
              return (
                bookmark.artist && <ArtistListItem data={bookmark.artist} />
              );
          }
        })}
      </IndexLayout>
    </UserLayout>
  );
};

export default UserBookmarks;
