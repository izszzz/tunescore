import React, { useState } from "react";
import { useRouter } from "next/router";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SendIcon from "@mui/icons-material/Send";
import { useSnackbar } from "notistack";
import setLocale from "../../../../helpers/locale";
import { handleChangeAutocomplete } from "../../autocomplete/update";
import SearchAutocomplete from "../../autocomplete/search";
import { trpc } from "../../../../utils/trpc";
import ResourceIcon from "../../icon/resource";
import ArtistListItem from "../../list/item/artist";
import CloseIconButton from "../../button/icon/close";
import RoleUpdateAutocomplete from "../../autocomplete/update/role";
import type { RoleUpdateAutocompleteProps } from "../../autocomplete/update/role";
import type { ParticipatedArtist } from "../../../../helpers/participation";
import type { Artist } from "@prisma/client";
import type { LoadingButtonProps } from "@mui/lab/LoadingButton";

interface ArtistsUpdateFormProps<T> {
  data: T[];
  loading: boolean;
  loadingButtonProps: Omit<LoadingButtonProps, "onClick"> & {
    onClick: (value: Artist | undefined) => void;
  };
  roleUpdateAutocompleteProps: RoleUpdateAutocompleteProps;
  onDestroy: (value: ParticipatedArtist) => void;
}
function ArtistsUpdateForm({
  data,
  loading,
  loadingButtonProps,
  roleUpdateAutocompleteProps,
  onDestroy,
}: ArtistsUpdateFormProps<ParticipatedArtist>) {
  const { enqueueSnackbar } = useSnackbar(),
    [artist, setArtist] = useState<Artist>(),
    router = useRouter(),
    search = trpc.search.artist.useMutation({
      onError: () => {
        enqueueSnackbar("artist.search error");
      },
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
              getOptionLabel={(option) => setLocale(option.name, router)}
              ChipProps={{ icon: <ResourceIcon resource="ARTIST" /> }}
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
