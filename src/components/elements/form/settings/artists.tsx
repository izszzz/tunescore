import React, { useState } from "react";

import Person from "@mui/icons-material/Person";
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
import type { LoadingButtonProps } from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import type { Artist, Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

import setLocale from "../../../../helpers/locale";
import type { ParticipatedArtistArgs } from "../../../../helpers/participation";
import { trpc } from "../../../../utils/trpc";
import SearchAutocomplete from "../../autocomplete/search";
import { handleChangeAutocomplete } from "../../autocomplete/update";
import RoleUpdateAutocomplete from "../../autocomplete/update/role";
import type { RoleUpdateAutocompleteProps } from "../../autocomplete/update/role";
import CloseIconButton from "../../button/icon/close";
import ArtistListItem from "../../list/item/artist";

interface ArtistsUpdateFormProps<T> {
  data: T[];
  loading: boolean;
  loadingButtonProps: Omit<LoadingButtonProps, "onClick"> & {
    onClick: (value: Artist | undefined) => void;
  };
  roleUpdateAutocompleteProps: RoleUpdateAutocompleteProps;
  onDestroy: (value: T) => void;
}
function ArtistsUpdateForm({
  data,
  loading,
  loadingButtonProps,
  roleUpdateAutocompleteProps,
  onDestroy,
}: ArtistsUpdateFormProps<
  Prisma.ParticipationGetPayload<ParticipatedArtistArgs>
>) {
  const { enqueueSnackbar } = useSnackbar(),
    [artist, setArtist] = useState<Artist>(),
    router = useRouter(),
    search = trpc.search.artist.useMutation({
      onError: () => enqueueSnackbar("artist.search error"),
    });

  return (
    <>
      {data.map((participation) => (
        <Grid container key={participation.id}>
          <Grid item xs={8}>
            <ArtistListItem data={participation.artist} />
          </Grid>
          <Grid item xs={3}>
            <RoleUpdateAutocomplete
              {...roleUpdateAutocompleteProps}
              loading={loading}
              value={participation.roleMap.map((roleMap) => roleMap.role)}
            />
          </Grid>
          <Grid
            item
            xs={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <CloseIconButton
              disabled={loading}
              onClick={() => onDestroy(participation)}
            />
          </Grid>
        </Grid>
      ))}
      <Box>
        <Grid container spacing={1} my={1}>
          <Grid item xs={10}>
            <SearchAutocomplete
              options={search.data || []}
              loading={loading}
              textFieldProps={{ label: "artist" }}
              getOptionLabel={({ name }) => setLocale(name, router)}
              ChipProps={{ icon: <Person /> }}
              onChange={handleChangeAutocomplete<Artist, false, false, false>({
                onSelect: (_e, _v, _r, details) => setArtist(details.option),
              })}
            />
          </Grid>
          <Grid item xs={2} alignItems="stretch" style={{ display: "flex" }}>
            <LoadingButton
              {...loadingButtonProps}
              loading={search.isLoading || loading}
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
