import React from "react";

import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import { match, P } from "ts-pattern";

import AlbumListItem from "../../../components/elements/list/item/album";
import ArtistListItem from "../../../components/elements/list/item/artist";
import BandListItem from "../../../components/elements/list/item/band";
import MusicListItem from "../../../components/elements/list/item/music";
import IndexLayout from "../../../components/layouts/index";
import UserLayout from "../../../components/layouts/show/user";
import type { UserLayoutProps } from "../../../components/layouts/show/user";
import setLocale from "../../../helpers/locale";
import { userShowQuery } from "../../../paths/users/[id]";
import { bookmarkQuery } from "../../../paths/users/[id]/bookmark";
import { trpc } from "../../../utils/trpc";

const UserBookmarks: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { data } = trpc.user.findUniqueUser.useQuery(userShowQuery(session));
  const { data: bookmarkData } = trpc.pagination.bookmark.useQuery(
    bookmarkQuery(session)
  );
  const search = trpc.search.bookmark.useMutation({
    onError: () => {
      enqueueSnackbar("music.search error");
    },
  });
  if (!data || !bookmarkData) return <></>;
  const userData = data as UserLayoutProps["data"];
  return (
    <UserLayout data={userData} activeTab="bookmarks">
      <IndexLayout
        meta={bookmarkData.meta}
        searchAutocompleteProps={{
          options: search.data || [],
          loading: search.isLoading,
          getOptionLabel: (option) =>
            match(option)
              .with(
                { unionType: "Music", music: P.select(P.not(P.nullish)) },
                (music) => setLocale(music.title, router)
              )
              .with(
                { unionType: "Album", album: P.select(P.not(P.nullish)) },
                (album) => setLocale(album.title, router)
              )
              .with(
                { unionType: "Band", band: P.select(P.not(P.nullish)) },
                (band) => setLocale(band.name, router)
              )
              .with(
                { unionType: "Artist", artist: P.select(P.not(P.nullish)) },
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
              { unionType: "Music", music: P.select(P.not(P.nullish)) },
              (music) => <MusicListItem data={music} />
            )
            .with(
              { unionType: "Album", album: P.select(P.not(P.nullish)) },
              (album) => <AlbumListItem data={album} />
            )
            .with(
              { unionType: "Band", band: P.select(P.not(P.nullish)) },
              (band) => <BandListItem data={band} />
            )
            .with(
              { unionType: "Artist", artist: P.select(P.not(P.nullish)) },
              (artist) => <ArtistListItem data={artist} />
            )
            .otherwise(() => <></>)
        )}
      </IndexLayout>
    </UserLayout>
  );
};

export default UserBookmarks;
