import Grid from "@mui/material/Grid";
import type { Prisma } from "@prisma/client";

import type { ResourceListArgsType } from "../../helpers/resource";
import type { PropsWithLoading } from "../../types/PropsWithLoading";
import ResourceSquareCard from "../elements/card/square/resource";
import SkeletonSquareCard from "../elements/card/square/skeleton";

interface CardsLayoutProps {
  data: Prisma.ResourceGetPayload<ResourceListArgsType>[] | undefined;
  perPage: number;
}
const CardsLayout = ({
  data,
  perPage,
  loading,
}: PropsWithLoading<CardsLayoutProps>) => (
  <Grid container rowSpacing={4} spacing={4}>
    {(loading ? [...Array(perPage)] : data)?.map((data, i) => (
      <Grid item key={i} md={2} sm={4} xs={6}>
        {loading ? <SkeletonSquareCard /> : <ResourceSquareCard data={data} />}
      </Grid>
    ))}
  </Grid>
);
export default CardsLayout;
