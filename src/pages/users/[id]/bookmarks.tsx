import React from "react";

import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import ResourceListItem from "../../../components/elements/list/item/resource";
import IndexLayout from "../../../components/layouts/index";
import UserLayout from "../../../components/layouts/show/user";
import type { UserLayoutProps } from "../../../components/layouts/show/user";
import setLocale from "../../../helpers/locale";
import { userShowQuery } from "../../../paths/users/[id]";
import { bookmarkQuery } from "../../../paths/users/[id]/bookmark";
import { trpc } from "../../../utils/trpc";

const UserBookmarks: NextPage = () => {
  const { data: session } = useSession(),
    router = useRouter<"/users/[id]">(),
    { enqueueSnackbar } = useSnackbar(),
    query = userShowQuery({ router, session }),
    { data } = trpc.user.findUniqueUser.useQuery(query),
    { data: bookmarkData } = trpc.pagination.bookmark.useQuery(
      bookmarkQuery(session)
    ),
    search = trpc.search.bookmark.useMutation({
      onError: () => enqueueSnackbar("music.search error"),
    }),
    { locale } = router;
  if (!data || !bookmarkData) return <></>;
  const userData = data as unknown as UserLayoutProps["data"];
  return (
    <UserLayout query={query} data={userData} activeTab="bookmarks">
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
                take: 10,
              }),
          },
        }}
      >
        {bookmarkData.data.map((bookmark) => (
          <ResourceListItem key={bookmark.id} data={bookmark.resource} />
        ))}
      </IndexLayout>
    </UserLayout>
  );
};

export default UserBookmarks;
