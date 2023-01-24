import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import MusicLists from "../../../components/elements/list/music";
import IndexLayout from "../../../components/layouts/index";
import UserLayout from "../../../components/layouts/show/user";
import setLocale from "../../../helpers/locale";
import { getRouterId } from "../../../helpers/router";
import { getCurrentUserId } from "../../../helpers/user";
import { userShowQuery } from "../../../paths/users/[id]";
import type { UserShowGetPayload } from "../../../paths/users/[id]";
import { userRepositoriesQuery } from "../../../paths/users/[id]/repositories";
import { trpc } from "../../../utils/trpc";


const User: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const id = getRouterId(router);
  const search = trpc.search.music.useMutation();
  const { data } = trpc.user.findUniqueUser.useQuery(
    userShowQuery({ router, session })
  );
  const { data: musicData } = trpc.pagination.music.useQuery(
    userRepositoriesQuery({ router, session })
  );
  if (!data || !musicData) return <></>;
  const userData = data as UserShowGetPayload;
  return (
    <UserLayout data={userData} activeTab="repositories">
      <IndexLayout
        route={{ pathname: "/users/[id]/repositories", query: { id } }}
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
