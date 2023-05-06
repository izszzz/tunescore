import type { Prisma } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import * as R from "remeda";

import { perPageState } from "../../../atoms/perPage";
import ResourceListItem from "../../../components/elements/list/item/resource";
import DashboardLayout from "../../../components/layouts/dashboard";
import IndexLayout from "../../../components/layouts/index";
import ListsLayout from "../../../components/layouts/lists";
import { take } from "../../../consts/prisma";
import setLocale from "../../../helpers/locale";
import type { MusicListArgsType } from "../../../helpers/music";
import { libraryPaginationQuery } from "../../../paths/dashboard/library";
import { trpc } from "../../../utils/trpc";

const Library: NextPage = () => {
  const [perPage] = useRecoilState(perPageState),
    { data: session } = useSession(),
    router = useRouter(),
    { data } = trpc.pagination.transaction.useQuery(
      libraryPaginationQuery({ session, router, perPage })
    ),
    search = trpc.search.transaction.useMutation(),
    transactionData = data as unknown as Prisma.TransactionGetPayload<{
      include: { music: MusicListArgsType };
    }>[];
  return (
    <DashboardLayout active="library">
      <IndexLayout
        meta={data?.meta}
        searchAutocompleteProps={{
          options: search.data || [],
          loading: search.isLoading,
          renderOption: (_props, option) =>
            option.music && (
              <ResourceListItem
                data={{ ...option.music.resource, music: option.music }}
                dense
              />
            ),
          getOptionLabel: ({ music }) =>
            music ? setLocale(music.resource.name, router) : "",
          onInputChange: (_e, v) => {
            search.mutate({
              where: {
                music: {
                  resource: {
                    name: { is: { [router.locale]: { contains: v } } },
                  },
                },
              },
              take,
            });
          },
        }}
      >
        <ListsLayout
          data={R.pipe(
            transactionData,
            R.map(
              (data) =>
                data.music && { ...data.music.resource, music: data.music }
            ),
            R.compact
          )}
          lists={{ listItem: (data) => <ResourceListItem data={data} /> }}
        />
      </IndexLayout>
    </DashboardLayout>
  );
};

export default Library;
