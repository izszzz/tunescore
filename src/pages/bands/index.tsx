import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import BandLists from "../../components/elements/list/band";
import BandListItem from "../../components/elements/list/item/band";
import DefaultIndexLayout from "../../components/layouts/index/default";
import { searchMutate } from "../../helpers";
import setLocale from "../../helpers/locale";
import { bandPaginationQuery } from "../../paths/bands";
import { trpc } from "../../utils/trpc";

const Bands: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { data } = trpc.pagination.band.useQuery(
    bandPaginationQuery({ router, session: useSession().data })
  );
  const search = trpc.search.band.useMutation({
    onError: () => enqueueSnackbar("music.search error"),
  });
  if (!data) return <></>;
  return (
    <DefaultIndexLayout
      meta={data.meta}
      searchAutocompleteProps={{
        options: search.data || [],
        loading: search.isLoading,
        renderOption: (_props, option) => <BandListItem data={option} dense />,
        getOptionLabel: ({ name }) => setLocale(name, router),
        textFieldProps: {
          onChange: ({ currentTarget: { value } }) =>
            search.mutate(searchMutate(router, "name", value)),
        },
      }}
    >
      <BandLists data={data.data} />
    </DefaultIndexLayout>
  );
};

export default Bands;
