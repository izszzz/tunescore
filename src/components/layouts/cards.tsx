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
  <Grid container my={3} rowSpacing={6} spacing={1}>
    {(loading ? [...Array(perPage)] : data)?.map((data, i) => (
      <Grid
        display="flex"
        item
        justifyContent="center"
        key={i}
        md={2}
        px={2}
        sm={4}
        xs={6}
      >
        {loading ? (
          <SkeletonSquareCard size="200px" />
        ) : (
          <ResourceSquareCard data={data} />
        )}
      </Grid>
    ))}
  </Grid>
);
export default CardsLayout;
