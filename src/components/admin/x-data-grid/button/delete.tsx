import React from "react";

import Delete from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useGridRootProps } from "@mui/x-data-grid";
import type { Prisma } from "@prisma/client";
import { useRouter } from "next/router";

import { trpc } from "../../../../utils/trpc";

const GridToolbarDeleteButton = () => {
  const { rowSelectionModel } = useGridRootProps(),
    router = useRouter<"/admin/[id]">(),
    id = router.query.id as Prisma.ModelName,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    destroy = trpc[id.toLowerCase()][`deleteMany${id}`].useMutation(),
    handleClick = () =>
      destroy.mutate({ where: { id: { in: rowSelectionModel } } });
  if (!rowSelectionModel || !(rowSelectionModel as string[]).length)
    return null;
  return (
    <Button onClick={handleClick} startIcon={<Delete />}>
      Delete
    </Button>
  );
};
export default GridToolbarDeleteButton;
