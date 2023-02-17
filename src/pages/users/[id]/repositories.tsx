import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import MusicLists from "../../../components/elements/list/music";
import IndexLayout from "../../../components/layouts/index";
import type { UserLayoutProps } from "../../../components/layouts/show/user";
import UserLayout from "../../../components/layouts/show/user";
import setLocale from "../../../helpers/locale";
import { getCurrentUserId } from "../../../helpers/user";
import { userShowQuery } from "../../../paths/users/[id]";
import { userRepositoriesQuery } from "../../../paths/users/[id]/repositories";
import { trpc } from "../../../utils/trpc";

const User: NextPage = () => {
  const router = useRouter(),
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
    <UserLayout query={query} data={userData} activeTab="repositories">
      <IndexLayout
        meta={musicData.meta}
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
                user: { id: getCurrentUserId(session) },
              },
              take: 10,
            });
          },
        }}
      >
        <MusicLists data={musicData.data} />
      </IndexLayout>
    </UserLayout>
  );
};

export default User;
