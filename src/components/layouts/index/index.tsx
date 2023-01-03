import React from "react";
import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useSession } from "next-auth/react";
import SingleColumnLayout from "../single_column";
import { useModal } from "../../../hooks/useModal";
import CustomAutocomplete from "../../../components/elements/autocomplete/search";
import { getCurrentUser } from "../../../helpers/user";
import type { CustomAutocompleteProps } from "../../../components/elements/autocomplete/search";
import type { SingleColumnLayoutProps } from "../single_column";
import type { Route } from "nextjs-routes";
import type { PaginatedResult } from "prisma-pagination";

export interface IndexLayoutProps<T>
  extends Pick<SingleColumnLayoutProps, "children" | "header"> {
  route: Route;
  newRoute?: Route;
  meta: PaginatedResult<null>["meta"];
  searchAutocompleteProps: CustomAutocompleteProps<T, false, false, false>;
}
function IndexLayout<T>({
  header,
  meta,
  route,
  newRoute,
  children,
  searchAutocompleteProps,
}: IndexLayoutProps<T>) {
  const { handleOpen } = useModal();
  const router = useRouter();
  const session = useSession();
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) =>
    router.replace({
      ...route,
      query: { page: String(value), ...route.query },
    });
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter")
      router.replace({
        ...route,
        query: {
          ...route.query,
          page: String(1),
          q: String((e.target as HTMLInputElement).value),
        },
      });
  };
  const handleClick = () => {
    if (!getCurrentUser(session)) return handleOpen();
    newRoute && router.push(newRoute);
  };
  return (
    <SingleColumnLayout contained header={header}>
      <Box my={3}>
        <Grid container spacing={1}>
          <Grid item xs={newRoute ? 11 : 12}>
            <CustomAutocomplete
              {...searchAutocompleteProps}
              textFieldProps={{
                ...searchAutocompleteProps.textFieldProps,
                onKeyDown: handleKeyDown,
              }}
            />
          </Grid>
          <Grid item xs={1} display="flex" alignItems="stretch">
            {newRoute && (
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={handleClick}
                fullWidth
              >
                New
              </Button>
            )}
          </Grid>
        </Grid>
        {children}
        <Box display="flex" justifyContent="center">
          <Pagination
            page={meta.currentPage}
            count={meta.lastPage}
            variant="outlined"
            onChange={handleChange}
          />
        </Box>
      </Box>
    </SingleColumnLayout>
  );
}
export default IndexLayout;
