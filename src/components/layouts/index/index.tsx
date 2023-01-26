import React from "react";

import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import type { Route } from "nextjs-routes";
import type { PaginatedResult } from "prisma-pagination";

import SearchAutocomplete from "../../../components/elements/autocomplete/search";
import type { SearchAutocompleteProps } from "../../../components/elements/autocomplete/search";
import { getCurrentUser } from "../../../helpers/user";
import { useModal } from "../../../hooks/useModal";
import SingleColumnLayout from "../single_column";
import type { SingleColumnLayoutProps } from "../single_column";

export interface IndexLayoutProps<T>
  extends Pick<SingleColumnLayoutProps, "children" | "header"> {
  route: Route;
  newRoute?: Route;
  meta: PaginatedResult<null>["meta"];
  searchAutocompleteProps: SearchAutocompleteProps<T, false, false, false>;
}
function IndexLayout<T>({
  header,
  meta,
  newRoute,
  children,
  searchAutocompleteProps,
}: IndexLayoutProps<T>) {
  const { handleOpen } = useModal();
  const router = useRouter();
  const { data: session } = useSession();
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    router.query.page = String(value);
    router.push(router);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.query.page = String(1);
      router.query.q = String((e.target as HTMLInputElement).value);
      router.push(router);
    }
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
            <SearchAutocomplete
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
