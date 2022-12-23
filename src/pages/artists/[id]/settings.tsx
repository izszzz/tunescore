import React from "react";
import { useSnackbar } from "notistack";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Band, Prisma } from "@prisma/client";
import Button from "@mui/material/Button";
import { trpc } from "../../../utils/trpc";
import ArtistLayout from "../../../components/layouts/show/artist";
import DefaultUpdateAutocomplete from "../../../components/elements/autocomplete/update/default";
import ResourceIcon from "../../../components/elements/icon/resource";
import setLocale from "../../../helpers/setLocale";
import SingleRowForm from "../../../components/elements/form/single_row";
import { createPath } from "../../../helpers/createPath";

const EditArtist: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const id = router.query.id as string;
  const path = createPath([
    "artist.findUniqueArtist",
    {
      where: { id: router.query.id as string },
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
        bookmarks: true,
      },
    },
  ]);
  const query = path[1];
  const { data } = trpc.useQuery(path);
  const searchBand = trpc.useMutation("search.band", {
    onError: () => {
      enqueueSnackbar("artist.search error");
    },
  });
  const update = trpc.useMutation("artist.updateOneArtist");
  const destroy = trpc.useMutation("artist.deleteOneArtist");
  const handleDestroy = () =>
    destroy.mutate(
      { where: { id } },
      { onSuccess: () => router.push("/artists") }
    );
  if (!data) return <></>;
  const artistData = data as Prisma.ArtistGetPayload<{
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
      bookmarks: true;
    };
  }>;
  return (
    <ArtistLayout data={artistData} activeTab="settings">
      <SingleRowForm
        data={artistData}
        loading={update.isLoading}
        formContainerProps={{
          onSuccess: ({ name }) => update.mutate({ ...query, data: { name } }),
        }}
        textFieldElementProps={{
          name: "name",
        }}
      />
      <DefaultUpdateAutocomplete<Band, true>
        value={artistData.bands}
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
              ...query,
              data: { bands: { connect: { id: details?.option.id } } },
            }),
          onRemove: (_e, _v, _r, details) =>
            update.mutate({
              ...query,
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
