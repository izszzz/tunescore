import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { match } from "ts-pattern";
import { trpc } from "../../../utils/trpc";
import { userShowPath } from "../../../paths/users/[id]";
import { bookmarkPath } from "../../../paths/users/[id]/bookmark";
import MusicListItem from "../../../components/elements/list/item/music";
import IndexLayout from "../../../components/layouts/index";
import AlbumListItem from "../../../components/elements/list/item/album";
import BandListItem from "../../../components/elements/list/item/band";
import { getRouterId } from "../../../helpers/router";
import setLocale from "../../../helpers/locale";
import UserLayout from "../../../components/layouts/show/user";
import ArtistListItem from "../../../components/elements/list/item/artist";
import type { NextPage } from "next";
import type { Prisma } from "@prisma/client";

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
    <UserLayout data={userData} activeTab="bookmarks">
      <IndexLayout
        meta={bookmarkData.meta}
        route={{
          pathname: "/users/[id]/bookmarks",
          query: { id },
        }}
        searchAutocompleteProps={{
          options: search.data || [],
          loading: search.isLoading,
          getOptionLabel: (option) =>
            match(option.resourceType)
              .with(
                "Music",
                () => option.music && setLocale(option.music.title, router)
              )
              .with(
                "Album",
                () => option.album && setLocale(option.album.title, router)
              )
              .with(
                "Band",
                () => option.band && setLocale(option.band.name, router)
              )
              .with(
                "Artist",
                () => option.artist && setLocale(option.artist.name, router)
              )
              .exhaustive() || "",
          textFieldProps: {
            onChange: (e) =>
              search.mutate({
                where: {
                  music: {
                    title: {
                      is: {
                        [router.locale as string]: {
                          contains: e.currentTarget.value,
                        },
                      },
                    },
                  },
                  album: {
                    title: {
                      is: {
                        [router.locale as string]: {
                          contains: e.currentTarget.value,
                        },
                      },
                    },
                  },
                  artist: {
                    name: {
                      is: {
                        [router.locale as string]: {
                          contains: e.currentTarget.value,
                        },
                      },
                    },
                  },
                  band: {
                    name: {
                      is: {
                        [router.locale as string]: {
                          contains: e.currentTarget.value,
                        },
                      },
                    },
                  },
                },
                take: 10,
              }),
          },
        }}
      >
        {bookmarkData.data.map((bookmark) =>
          match(bookmark.resourceType)
            .with(
              "Music",
              () => bookmark.music && <MusicListItem data={bookmark.music} />
            )
            .with(
              "Album",
              () => bookmark.album && <AlbumListItem data={bookmark.album} />
            )
            .with(
              "Band",
              () => bookmark.band && <BandListItem data={bookmark.band} />
            )
            .with(
              "Artist",
              () => bookmark.artist && <ArtistListItem data={bookmark.artist} />
            )
            .exhaustive()
        )}
      </IndexLayout>
    </UserLayout>
  );
};

export default UserBookmarks;
