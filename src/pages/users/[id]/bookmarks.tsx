import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { match, P } from "ts-pattern";
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
  const { data } = trpc.useQuery(undefined, path);
  const { data: bookmarkData } = trpc.useQuery(
    undefined, bookmarkPath({ router, session })
  );
  const search = trpc.search.bookmark.useMutation({
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
            match(option)
              .with(
                { resourceType: "Music", music: P.select(P.not(P.nullish)) },
                (music) => setLocale(music.title, router)
              )
              .with(
                { resourceType: "Album", album: P.select(P.not(P.nullish)) },
                (album) => setLocale(album.title, router)
              )
              .with(
                { resourceType: "Band", band: P.select(P.not(P.nullish)) },
                (band) => setLocale(band.name, router)
              )
              .with(
                { resourceType: "Artist", artist: P.select(P.not(P.nullish)) },
                (artist) => setLocale(artist.name, router)
              )
              .otherwise(() => ""),
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
          match(bookmark)
            .with(
              { resourceType: "Music", music: P.select(P.not(P.nullish)) },
              (music) => <MusicListItem data={music} />
            )
            .with(
              { resourceType: "Album", album: P.select(P.not(P.nullish)) },
              (album) => <AlbumListItem data={album} />
            )
            .with(
              { resourceType: "Band", band: P.select(P.not(P.nullish)) },
              (band) => <BandListItem data={band} />
            )
            .with(
              { resourceType: "Artist", artist: P.select(P.not(P.nullish)) },
              (artist) => <ArtistListItem data={artist} />
            )
            .otherwise(() => <></>)
        )}
      </IndexLayout>
    </UserLayout>
  );
};

export default UserBookmarks;
