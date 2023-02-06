import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Grid, { type GridProps } from "@mui/material/Grid";
import TablePagination, {
  type TablePaginationProps,
} from "@mui/material/TablePagination";
import type { Link } from "@prisma/client";

export interface CardSelectFormProps<Value, Options extends unknown[]> {
  link: Link | null | undefined;
  gridProps: GridProps;
  tablePaginationProps: TablePaginationProps;
  largeCard: (value: Value | undefined) => React.ReactNode;
  smallCard: (value: Options[0]) => React.ReactNode;
  search: Options | undefined;
  lookup: Value | undefined;
}
function CardSelectForm<Value, Options extends unknown[] = []>({
  link,
  gridProps,
  tablePaginationProps,
  smallCard,
  largeCard,
  lookup,
  search,
}: CardSelectFormProps<Value, Options>) {
  const [options, setOptions] = useState<Options>();
  const [value, setValue] = useState<Value>();
  useEffect(() => {
    if (link?.id) setValue(lookup);
    else {
      setOptions(search);
      setValue(undefined);
    }
  }, [link?.id, lookup, search]);
  return (
    <Box my={2}>
      {value ? (
        largeCard(value)
      ) : (
        <>
          <Grid container spacing={2}>
            {options?.map((option, i) => (
              <Grid
                {...gridProps}
                item
                key={i}
                display="flex"
                justifyContent="center"
              >
                {smallCard(option)}
              </Grid>
            ))}
          </Grid>
          <TablePagination {...tablePaginationProps} component="div" />
        </>
      )}
    </Box>
  );
}
export default CardSelectForm;
