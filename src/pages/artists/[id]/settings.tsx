import React from "react";
import { useSnackbar } from "notistack";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import { Artist, Band, Prisma } from "@prisma/client";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import { trpc } from "../../../utils/trpc";
import ArtistLayout from "../../../components/layouts/show/artist";
import DefaultUpdateAutocomplete from "../../../components/elements/autocomplete/update/default";
import ResourceIcon from "../../../components/elements/icon/resource";
import setLocale from "../../../utils/setLocale";

const EditArtist: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const id = router.query.id as string;
  const { data } = trpc.useQuery([
    "artist.findUniqueArtist",
    {
      where: { id },
      include: {
        bands: true,
        writtenMusics: {
          include: {
            band: true,
            composers: true,
            lyrists: true,
          },
        },
        composedMusics: {
          include: {
            band: true,
            composers: true,
            lyrists: true,
          },
        },
        musics: {
          include: {
            band: true,
            composers: true,
            lyrists: true,
          },
        },
      },
    },
  ]);
  const searchBand = trpc.useMutation("search.band", {
    onError: () => {
      enqueueSnackbar("artist.search error");
    },
  });
  const update = trpc.useMutation("artist.updateOneArtist");
  const destroy = trpc.useMutation("artist.deleteOneArtist");
  const handleSubmit = (data: Artist) => update.mutate({ where: { id }, data });
  const handleDestroy = () =>
    destroy.mutate(
      { where: { id } },
      { onSuccess: () => router.push("/artists") }
    );
  if (!data) return <></>;
  const musicData = data as Prisma.ArtistGetPayload<{
    include: {
      bands: true;
      composedMusics: {
        include: { composers: true; lyrists: true; band: true };
      };
      writtenMusics: {
        include: { composers: true; lyrists: true; band: true };
      };
      musics: {
        include: { composers: true; lyrists: true; band: true };
      };
    };
  }>;
  return (
    <ArtistLayout data={data} activeTab="settings">
      <FormContainer defaultValues={data} onSuccess={handleSubmit}>
        <Grid container spacing={1} my={1}>
          <Grid item xs={10}>
            <TextFieldElement
              name={"name." + router.locale}
              label="Name"
              disabled={update.isLoading || destroy.isLoading}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={2} alignItems="stretch" style={{ display: "flex" }}>
            <LoadingButton
              type="submit"
              variant="outlined"
              disabled={update.isLoading || destroy.isLoading}
              loading={update.isLoading}
              endIcon={<SendIcon />}
              fullWidth
            >
              Update
            </LoadingButton>
          </Grid>
        </Grid>
      </FormContainer>
      <DefaultUpdateAutocomplete<Band, true>
        value={musicData.bands}
        options={searchBand.data || []}
        getOptionLabel={(option) => setLocale(option.name, router) || ""}
        ChipProps={{ icon: <ResourceIcon resource="band" /> }}
        loading={update.isLoading}
        textFieldProps={{
          label: "bands",
          margin: "dense",
          onChange: (e) =>
            searchBand.mutate({
              where: {
                name: {
                  is: { [router.locale]: { contains: e.currentTarget.value } },
                },
              },
              take: 10,
            }),
        }}
        onChange={{
          onSelect: (_e, _v, _r, details) =>
            update.mutate({
              where: { id },
              data: { bands: { connect: { id: details?.option.id } } },
            }),
          onRemove: (_e, _v, _r, details) =>
            update.mutate({
              where: { id },
              data: { bands: { disconnect: { id: details?.option.id } } },
            }),
        }}
        multiple
      />
      <br />
      <Button type="button" onClick={handleDestroy}>
        Delete Artist
      </Button>
    </ArtistLayout>
  );
};

export default EditArtist;
