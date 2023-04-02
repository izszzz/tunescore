import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import ResourceLists from "../../../components/elements/list/resource";
import IndexLayout from "../../../components/layouts/index";
import type { UserLayoutProps } from "../../../components/layouts/show/user";
import UserLayout from "../../../components/layouts/show/user";
import setLocale from "../../../helpers/locale";
import { getCurrentUserId } from "../../../helpers/user";
import { userShowQuery } from "../../../paths/users/[id]";
import { userRepositoriesQuery } from "../../../paths/users/[id]/repositories";
import { trpc } from "../../../utils/trpc";

const User: NextPage = () => {
  const router = useRouter<"/users/[id]">(),
    { data: session } = useSession(),
    search = trpc.search.music.useMutation(),
    query = userShowQuery({ session, router }),
    { data } = trpc.user.findUniqueUser.useQuery(query),
    { data: musicData } = trpc.pagination.music.useQuery(
      userRepositoriesQuery({ router, session })
    );
  if (!data || !musicData) return <></>;
  const userData = data as unknown as UserLayoutProps["data"];
  return (
    <UserLayout activeTab="repositories" data={userData} query={query}>
      <IndexLayout
        meta={musicData.meta}
        searchAutocompleteProps={{
          options: search.data || [],
          loading: search.isLoading,
          getOptionLabel: ({ resource: { name } }) => setLocale(name, router),
          onInputChange: (_e, v) =>
            search.mutate({
              where: {
                resource: {
                  name: { is: { [router.locale]: { contains: v } } },
                },
                user: { id: getCurrentUserId(session) },
              },
              take: 10,
            }),
        }}
      >
        <ResourceLists
          data={musicData.data.map(({ resource, ...music }) => ({
            ...resource,
            music,
          }))}
        />
      </IndexLayout>
    </UserLayout>
  );
};

export default User;
