import React from "react";

import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import { useRecoilState } from "recoil";

import { perPageState } from "../../../atoms/perPage";
import ResourceListItem from "../../../components/elements/list/item/resource";
import IndexLayout from "../../../components/layouts/index";
import UserLayout from "../../../components/layouts/show/user";
import type { UserLayoutProps } from "../../../components/layouts/show/user";
import { env } from "../../../env/client.mjs";
import setLocale from "../../../helpers/locale";
import { userShowQuery } from "../../../paths/users/[id]";
import { bookmarkQuery } from "../../../paths/users/[id]/bookmark";
import { trpc } from "../../../utils/trpc";

const UserBookmarks: NextPage = () => {
  const [perPage] = useRecoilState(perPageState),
    { data: session } = useSession(),
    router = useRouter<"/users/[id]">(),
    { enqueueSnackbar } = useSnackbar(),
    query = userShowQuery({ router, session }),
    { data } = trpc.user.findUniqueUser.useQuery(query),
    { data: bookmarkData } = trpc.pagination.bookmark.useQuery(
      bookmarkQuery({ session, router, perPage })
    ),
    search = trpc.search.bookmark.useMutation({
      onError: () => enqueueSnackbar("bookmark.search error"),
    }),
    { locale } = router;
  if (!data || !bookmarkData) return <></>;
  const userData = data as unknown as UserLayoutProps["data"];
  return (
    <UserLayout activeTab="bookmarks" data={userData} query={query}>
      <IndexLayout
        meta={bookmarkData.meta}
        searchAutocompleteProps={{
          options: search.data || [],
          loading: search.isLoading,
          getOptionLabel: ({ resource: { name } }) => setLocale(name, router),
          textFieldProps: {
            onChange: ({ currentTarget: { value: v } }) =>
              search.mutate({
                where: {
                  resource: { name: { is: { [locale]: { contains: v } } } },
                },
                take: Number(env.NEXT_PUBLIC_DEFAULT_SEARCH_TAKE),
              }),
          },
        }}
      >
        {bookmarkData.data.map((bookmark) => (
          <ResourceListItem data={bookmark.resource} key={bookmark.id} />
        ))}
      </IndexLayout>
    </UserLayout>
  );
};

export default UserBookmarks;
