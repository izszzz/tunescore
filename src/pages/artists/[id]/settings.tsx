import React from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import { trpc } from "../../../utils/trpc";
import ArtistLayout from "../../../components/layouts/show/artist";
import SingleRowForm from "../../../components/elements/form/single_row";
import type { Prisma } from "@prisma/client";
import type { NextPage } from "next";
import BandUpdateAutocomplete from "../../../components/elements/autocomplete/update/band";
import { getRouterId } from "../../../helpers/router";
import { useSession } from "next-auth/react";
import { artistShowPath } from "../../../paths/artists/[id]";

const EditArtist: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const id = getRouterId(router);
  const path = artistShowPath({ router, session });
  const query = path[1];
  const { data } = trpc.useQuery(path);
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
      tagMaps: { include: { tag: true } };
    };
  }>;
  return (
    <ArtistLayout data={artistData} path={path} activeTab="settings">
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
      <BandUpdateAutocomplete
        value={artistData.bands}
        loading={update.isLoading}
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
