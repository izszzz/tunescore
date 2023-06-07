import { useState } from "react";

import Box from "@mui/material/Box";
import type { GridRowId } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import type { Locale, Prisma } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import * as R from "remeda";

import CustomGridToolbar from "../../../components/admin/x-data-grid/toolbar/custom";
import DefaultHeader from "../../../components/elements/header/default";
import setLocale from "../../../helpers/locale";
import { trpc } from "../../../utils/trpc";

const Model: NextPage = () => {
  const [paginationModel, setPaginationModel] = useState({
      pageSize: 25,
      page: 0,
    }),
    [rowSelectionModel, setRowSelectionModel] = useState<GridRowId[]>([]),
    router = useRouter<"/admin/[id]">(),
    id = router.query.id as Prisma.ModelName,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    { data, isLoading } = trpc[id.toLowerCase()][`findMany${id}`].useQuery({
      take: paginationModel.pageSize,
      skip: paginationModel.page,
      include: {
        ...(id === "Resource" ? { name: true } : null),
      },
    }),
    columns = data?.[0]
      ? R.pipe(
          data,
          R.first,
          R.keys,
          R.map((key) => ({
            field: key,
            valueFormatter:
              key === "name"
                ? (params: unknown & { value: Locale }) =>
                    setLocale(params.value, router)
                : undefined,
          }))
        )
      : [];
  return (
    <Box height="100vh" width="100%">
      <DefaultHeader />
      <DataGrid
        autoHeight
        checkboxSelection
        columns={columns}
        components={{ Toolbar: CustomGridToolbar }}
        loading={isLoading}
        onPaginationModelChange={setPaginationModel}
        onRowSelectionModelChange={(v) => setRowSelectionModel(v)}
        paginationModel={paginationModel}
        rowSelectionModel={rowSelectionModel}
        rows={data ?? []}
      />
    </Box>
  );
};

export default Model;
