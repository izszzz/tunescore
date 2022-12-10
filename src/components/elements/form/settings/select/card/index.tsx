import React from "react";
import Box from "@mui/material/Box";
import Grid, { GridProps } from "@mui/material/Grid";
import TablePagination, {
  TablePaginationProps,
} from "@mui/material/TablePagination";

interface CardSelectFormProps<T> {
  value: T;
  options: T[];
  smallCard: (value: T) => React.ReactNode;
  largeCard: (value: T) => React.ReactNode;
  gridProps: GridProps;
  tablePaginationProps: TablePaginationProps;
}
function CardSelectForm<T>({
  value,
  options,
  gridProps,
  smallCard,
  largeCard,
  tablePaginationProps,
}: CardSelectFormProps<T>) {
  return (
    <Box my={2}>
      {value ? (
        largeCard(value)
      ) : (
        <>
          <Grid container spacing={2}>
            {options.map((option, i) => (
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
