import React from "react";

import { useModal } from "@ebay/nice-modal-react";
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
import { isAuth } from "../../../helpers/user";
import SingleColumnLayout from "../single_column";
import type { SingleColumnLayoutProps } from "../single_column";

interface IndexLayoutProps<T>
  extends Pick<SingleColumnLayoutProps, "children" | "header"> {
  newRoute?: Route;
  meta?: PaginatedResult<null>["meta"];
  searchAutocompleteProps?: SearchAutocompleteProps<T, false, false, false>;
}
function IndexLayout<T>({
  header,
  meta,
  newRoute,
  children,
  searchAutocompleteProps,
}: IndexLayoutProps<T>) {
  const router = useRouter(),
    { status } = useSession(),
    { show } = useModal("auth-dialog"),
    handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
      router.query.page = String(value);
      router.push(router);
    },
    handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        router.query.page = String(1);
        router.query.q = String((e.target as HTMLInputElement).value);
        router.push(router);
      }
    },
    handleClick = () => {
      if (isAuth(status)) newRoute && router.push(newRoute);
      else show();
    };
  return (
    <SingleColumnLayout contained header={header}>
      <Box my={3}>
        {searchAutocompleteProps && (
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
            <Grid alignItems="stretch" display="flex" item xs={1}>
              {newRoute && (
                <Button
                  fullWidth
                  onClick={handleClick}
                  startIcon={<AddIcon />}
                  variant="outlined"
                >
                  New
                </Button>
              )}
            </Grid>
          </Grid>
        )}
        {children}
        <Box display="flex" justifyContent="center">
          <Pagination
            count={meta?.lastPage}
            onChange={handleChange}
            page={meta?.currentPage}
            variant="outlined"
          />
        </Box>
      </Box>
    </SingleColumnLayout>
  );
}
export default IndexLayout;
