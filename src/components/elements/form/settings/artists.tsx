import React, { useState } from "react";
import { useRouter } from "next/router";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import setLocale from "../../../../helpers/locale";
import { handleChangeAutocomplete } from "../../autocomplete/update/default";
import CustomAutocomplete from "../../autocomplete/search";
import type { Artist } from "@prisma/client";
import type { TextFieldProps } from "@mui/material/TextField";
import type { AutocompleteProps } from "@mui/material/Autocomplete";
import type { LoadingButtonProps } from "@mui/lab/LoadingButton";

interface ArtistsUpdateFormProps<T> {
  data: T[];
  autocompleteProps: Omit<
    AutocompleteProps<T, false, false, false>,
    "renderInput"
  > & { textFieldProps: TextFieldProps };
  loadingButtonProps: Omit<LoadingButtonProps, "onClick"> & {
    onClick: (value: T | undefined) => void;
  };
  onDestroy: (value: T) => void;
}
function ArtistsUpdateForm({
  data,
  autocompleteProps,
  loadingButtonProps,
  onDestroy,
}: ArtistsUpdateFormProps<Artist>) {
  const [artist, setArtist] = useState<Artist>();
  const router = useRouter();

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((artist) => (
              <TableRow key={artist.id}>
                <TableCell>
                  <IconButton onClick={() => onDestroy(artist)}>
                    <CloseIcon />
                  </IconButton>
                </TableCell>
                <TableCell />
                <TableCell>{setLocale(artist.name, router)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box>
        <Grid container spacing={1} my={1}>
          <Grid item xs={10}>
            <CustomAutocomplete
              {...autocompleteProps}
              onChange={handleChangeAutocomplete<Artist, false, false, false>({
                onSelect: (_e, _v, _r, details) => setArtist(details.option),
              })}
            />
          </Grid>
          <Grid item xs={2} alignItems="stretch" style={{ display: "flex" }}>
            <LoadingButton
              {...loadingButtonProps}
              type="button"
              variant="outlined"
              disabled={!artist}
              onClick={() => loadingButtonProps.onClick(artist)}
              endIcon={<SendIcon />}
              fullWidth
            >
              Update
            </LoadingButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ArtistsUpdateForm;
