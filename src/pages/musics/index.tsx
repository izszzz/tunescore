import React from "react";

import type { Music } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import MusicLists from "../../components/elements/list/music";
import DefaultIndexLayout from "../../components/layouts/index/default";
import setLocale from "../../helpers/locale";
import { musicPaginationQuery } from "../../paths/musics";
import { trpc } from "../../utils/trpc";

const Musics: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { data: session } = useSession();
  const search = trpc.search.music.useMutation({
    onError: () => {
      enqueueSnackbar("music.search error");
    },
  });
  const { data } = trpc.pagination.music.useQuery(
    musicPaginationQuery({ router, session }),
    {
      onError: () => {
        enqueueSnackbar("music.index error");
      },
    }
  );
  if (!data) return <></>;
  return (
    <DefaultIndexLayout<Music>
      newRoute={{ pathname: "/musics/new" }}
      route={{ pathname: "/musics" }}
      meta={data.meta}
      searchAutocompleteProps={{
        options: search.data || [],
        loading: search.isLoading,
        getOptionLabel: (option) => setLocale(option.title, router),
        onInputChange: (_e, inputValue) => {
          search.mutate({
            where: {
              title: {
                is: {
                  [router.locale as string]: { contains: inputValue },
                },
              },
            },
            take: 10,
          });
        },
      }}
    >
      <MusicLists data={data.data} />
    </DefaultIndexLayout>
  );
};

export default Musics;
