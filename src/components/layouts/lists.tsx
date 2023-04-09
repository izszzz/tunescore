import type { PropsWithLoading } from "../../types/PropsWithLoading";
import type { ListsProps } from "../elements/list";
import Lists from "../elements/list";
import SkeletonListItem from "../elements/list/item/skelton";

interface ListsLayoutProps<T> {
  perPage: number;
  lists: Omit<ListsProps<T>, "data">;
  data: ListsProps<T>["data"] | undefined;
}
const ListsLayout = <T,>({
  lists,
  perPage,
  loading,
  data,
}: PropsWithLoading<ListsLayoutProps<T>>) => (
  <>
    {!data || loading ? (
      [...Array(perPage)].map((_, i) => <SkeletonListItem key={i} />)
    ) : (
      <Lists {...lists} data={data} />
    )}
  </>
);
export default ListsLayout;
