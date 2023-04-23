import { useState } from "react";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import type { Prisma } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import * as R from "remeda";

import { trpc } from "../../../utils/trpc";

const Model: NextPage = () => {
  const [paginationModel, setPaginationModel] = useState({
      pageSize: 25,
      page: 0,
    }),
    router = useRouter<"/admin/[id]">(),
    id = router.query.id as Prisma.ModelName,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    { data, isLoading } = trpc[id.toLowerCase()][`findMany${id}`].useQuery({
      take: paginationModel.pageSize,
      skip: paginationModel.page,
    });

  if (!data) return <></>;
  const columns = R.pipe(
    data[0],
    R.keys,
    R.map((key) => ({ field: key }))
  );
  return (
    <Box height="100vh" width="100%">
      <DataGrid
        autoHeight
        checkboxSelection
        columns={columns}
        loading={isLoading}
        onPaginationModelChange={setPaginationModel}
        paginationModel={paginationModel}
        rows={data}
      />
    </Box>
  );
};

export default Model;
