import type { Prisma } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import * as R from "remeda";

import ResourceListItem from "../../../components/elements/list/item/resource";
import ResourceLists from "../../../components/elements/list/resource";
import DashboardLayout from "../../../components/layouts/dashboard";
import IndexLayout from "../../../components/layouts/index";
import setLocale from "../../../helpers/locale";
import type { MusicListArgsType } from "../../../helpers/music";
import { libraryPaginationQuery } from "../../../paths/dashboard/library";
import { trpc } from "../../../utils/trpc";

const Library: NextPage = () => {
  const { data: session } = useSession(),
    router = useRouter(),
    { data } = trpc.pagination.transaction.useQuery(
      libraryPaginationQuery({ session, router })
    ),
    search = trpc.search.transaction.useMutation();
  if (!data) return <></>;
  const transactionData = data as unknown as Prisma.TransactionGetPayload<{
    include: { music: MusicListArgsType };
  }>[];
  return (
    <DashboardLayout active="library">
      <IndexLayout
        meta={data.meta}
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
              take: 10,
            });
          },
        }}
      >
        <ResourceLists
          data={R.pipe(
            transactionData,
            R.map(
              (data) =>
                data.music && { ...data.music.resource, music: data.music }
            ),
            R.compact
          )}
        />
      </IndexLayout>
    </DashboardLayout>
  );
};

export default Library;
