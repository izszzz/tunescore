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
import ParticipationUpdateAutocomplete from "../../autocomplete/update/participation";
import type { ParticipationUpdateAutocompleteProps } from "../../autocomplete/update/participation";
import CloseIconButton from "../../button/icon/close";
import ArtistListItem from "../../list/item/artist";

interface ArtistsUpdateFormProps<T> {
  data: T[];
  loading: boolean;
  loadingButtonProps: Omit<LoadingButtonProps, "onClick"> & {
    onClick: (value: Artist | undefined) => void;
  };
  participationUpdateAutocompleteProps: Omit<
    ParticipationUpdateAutocompleteProps,
    "participationId"
  >;
  onDestroy: (value: T) => void;
}
function ArtistsUpdateForm({
  data,
  loading,
  loadingButtonProps,
  participationUpdateAutocompleteProps,
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
            <ParticipationUpdateAutocomplete
              {...participationUpdateAutocompleteProps}
              loading={loading}
              participationId={participation.id}
              value={participation.roles.map((role) => ({
                ...role,
                participationId: participation.id,
              }))}
            />
          </Grid>
          <Grid
            alignItems="center"
            display="flex"
            item
            justifyContent="center"
            xs={1}
          >
            <CloseIconButton
              disabled={loading}
              onClick={() => onDestroy(participation)}
            />
          </Grid>
        </Grid>
      ))}
      <Box>
        <Grid container my={1} spacing={1}>
          <Grid item xs={10}>
            <SearchAutocomplete
              ChipProps={{ icon: <Person /> }}
              getOptionLabel={({ resource: { name } }) =>
                setLocale(name, router)
              }
              loading={loading}
              onChange={handleChangeAutocomplete<Artist, false, false, false>({
                onSelect: (_e, _v, _r, details) => setArtist(details.option),
              })}
              options={search.data || []}
              textFieldProps={{ label: "artist" }}
            />
          </Grid>
          <Grid alignItems="stretch" item style={{ display: "flex" }} xs={2}>
            <LoadingButton
              {...loadingButtonProps}
              disabled={!artist}
              endIcon={<SendIcon />}
              fullWidth
              loading={search.isLoading || loading}
              onClick={() => loadingButtonProps.onClick(artist)}
              type="button"
              variant="outlined"
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
