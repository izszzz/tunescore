import React from "react";

import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";

import { perPageState } from "../../../atoms/perPage";
import UserListItem from "../../../components/elements/list/item/user";
import IndexLayout from "../../../components/layouts/index";
import ListsLayout from "../../../components/layouts/lists";
import UserLayout from "../../../components/layouts/show/user";
import type { UserLayoutProps } from "../../../components/layouts/show/user";
import { take } from "../../../consts/prisma";
import { userShowQuery } from "../../../paths/users/[id]";
import { followersQuery } from "../../../paths/users/[id]/followers";
import { trpc } from "../../../utils/trpc";

const UserFollowers: NextPage = () => {
  const [perPage] = useRecoilState(perPageState),
    { data: session } = useSession(),
    router = useRouter<"/users/[id]">(),
    { id } = router.query,
    query = userShowQuery({ session, router }),
    { data } = trpc.user.findUniqueUser.useQuery(query),
    { data: followData } = trpc.pagination.follow.useQuery(
      followersQuery({ router, perPage })
    ),
    search = trpc.search.follow.useMutation();
  if (!data || !followData) return null;
  const userData = data as unknown as UserLayoutProps["data"];
  return (
    <UserLayout activeTab="" data={userData} query={query}>
      <IndexLayout
        meta={followData.meta}
        searchAutocompleteProps={{
          options: search.data?.map((follow) => follow.following) ?? [],
          loading: search.isLoading,
          getOptionLabel: ({ name }) => name,
          textFieldProps: {
            onChange: ({ currentTarget: { value: v } }) =>
              search.mutate({
                where: { followerId: id, following: { name: { contains: v } } },
                take,
              }),
          },
        }}
      >
        <ListsLayout
          data={followData.data.map((follow) => follow.following)}
          lists={{ listItem: (data) => <UserListItem data={data} /> }}
        />
      </IndexLayout>
    </UserLayout>
  );
};

export default UserFollowers;
