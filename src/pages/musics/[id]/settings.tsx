import React from "react";
import type { NextPage } from "next";
import { Artist } from "@prisma/client";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MusicLayout, {
  MusicLayoutProps,
} from "../../../components/layouts/show/music";
import BandUpdateAutocomplete from "../../../components/elements/autocomplete/update/band";
import DefaultSettingsForm from "../../../components/elements/form/settings/default";
import ArtistsUpdateForm from "../../../components/elements/form/settings/artists";
import DefaultUpdateAutocomplete from "../../../components/elements/autocomplete/update/default";
import ResourceIcon from "../../../components/elements/icon/resource";
import LinkForm from "../../../components/elements/form/settings/link";
import MusicItunesSelectForm from "../../../components/elements/form/settings/select/card/itunes";
import MusicYoutubeSelectForm from "../../../components/elements/form/settings/select/card/youtube";
import setLocale from "../../../utils/setLocale";
import { useRouter } from "next/router";
import { trpc } from "../../../utils/trpc";
import { useSnackbar } from "notistack";
import { useQueryClient } from "react-query";

const SettingsMusic: NextPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const id = router.query.id as string;
  const { enqueueSnackbar } = useSnackbar();
  const { data } = trpc.useQuery([
    "music.findUniqueMusic",
    {
      where: { id },
      include: {
        user: true,
        band: true,
        artists: true,
        composers: true,
        lyrists: true,
      },
    },
  ]);
  const destroy = trpc.useMutation("music.deleteOneMusic", {
    onSuccess: () => {
      enqueueSnackbar("music.destroy success");
      router.push("/musics");
    },
    onError: () => {
      enqueueSnackbar("music.destroy error");
    },
  });
  const update = trpc.useMutation(`music.updateOneMusic`, {
    onSuccess: (data) => {
      queryClient.setQueryData<typeof data>(
        ["music.findUniqueMusic", { where: { id } }],
        data
      );
      enqueueSnackbar("music.update success");
    },
    onError: () => {
      enqueueSnackbar("music.update error");
    },
  });
  const searchBand = trpc.useMutation("search.band", {
    onError: () => {
      enqueueSnackbar("band.search error");
    },
  });
  const searchArtist = trpc.useMutation("search.artist", {
    onError: () => {
      enqueueSnackbar("artist.search error");
    },
  });
  if (!data) return <></>;
  const musicData = data as MusicLayoutProps["data"];
  return (
    <MusicLayout data={musicData} activeTab="settings">
      <Typography variant="h4"> Info</Typography>
      <Divider />
      <DefaultSettingsForm
        data={musicData}
        name="title"
        updateLoadingButtonProps={{
          onClick: ({ id, title }) =>
            update.mutate({ where: { id }, data: { title } }),
          loading: update.isLoading,
        }}
        destroyLoadingButtonProps={{
          onClick: (data) => destroy.mutate({ where: { id: data.id } }),
          loading: destroy.isLoading,
        }}
      />
      <BandUpdateAutocomplete
        value={musicData.band}
        options={searchBand.data || []}
        getOptionLabel={(option) => setLocale(option.name, router) || ""}
        loading={update.isLoading}
        onChange={{
          onClear: () =>
            update.mutate({
              where: { id },
              data: { band: { disconnect: true } },
            }),
          onSelect: (_e, _v, _r, details) =>
            update.mutate({
              where: { id },
              data: { band: { connect: { id: details?.option.id } } },
            }),
        }}
        textFieldProps={{
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
      />
      <DefaultUpdateAutocomplete<Artist, true>
        value={musicData.composers}
        options={searchArtist.data || []}
        getOptionLabel={(option) => setLocale(option.name, router) || ""}
        ChipProps={{ icon: <ResourceIcon resource="artist" /> }}
        loading={update.isLoading}
        textFieldProps={{
          label: "composers",
          margin: "dense",
          onChange: (e) =>
            searchArtist.mutate({
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
              data: { composers: { connect: { id: details?.option.id } } },
            }),
          onRemove: (_e, _v, _r, details) =>
            update.mutate({
              where: { id },
              data: { composers: { disconnect: { id: details?.option.id } } },
            }),
        }}
        multiple
      />
      <DefaultUpdateAutocomplete<Artist, true>
        value={musicData.lyrists}
        options={searchArtist.data || []}
        getOptionLabel={(option) => setLocale(option.name, router) || ""}
        ChipProps={{ icon: <ResourceIcon resource="artist" /> }}
        loading={update.isLoading}
        textFieldProps={{
          label: "lyrists",
          margin: "dense",
          onChange: (e) =>
            searchArtist.mutate({
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
              data: { lyrists: { connect: { id: details?.option.id } } },
            }),
          onRemove: (_e, _v, _r, details) =>
            update.mutate({
              where: { id },
              data: { lyrists: { disconnect: { id: details?.option.id } } },
            }),
        }}
        multiple
      />
      <ArtistsUpdateForm
        data={musicData.artists}
        autocompleteProps={{
          options: searchArtist.data || [],
          loading: searchArtist.isLoading,
          getOptionLabel: (option) => setLocale(option.name, router) || "",
          textFieldProps: {
            label: "Artist",
            onChange: (e) =>
              searchArtist.mutate({
                where: {
                  name: {
                    is: {
                      [router.locale]: { contains: e.currentTarget.value },
                    },
                  },
                },
                take: 10,
              }),
          },
        }}
        loadingButtonProps={{
          loading: update.isLoading,
          onClick: (artist) =>
            update.mutate({
              where: { id },
              data: { artists: { connect: { id: artist?.id } } },
            }),
        }}
        onDestroy={(artist) =>
          update.mutate({
            where: { id },
            data: { artists: { disconnect: { id: artist.id } } },
          })
        }
      />

      <Typography variant="h4">SNS</Typography>
      <Divider />
      <LinkForm defaultValue={data.link} resource="music" />
      <Typography variant="h6">itunes</Typography>

      <MusicItunesSelectForm
        term={setLocale(data.title, router) || ""}
        streamingLink={data.link?.streaming}
        onSelect={(value) =>
          update.mutate({
            where: { id },
            data: {
              link: {
                streaming: {
                  ...data.link?.streaming,
                  itunes: value?.trackViewUrl,
                },
              },
            },
          })
        }
        onRemove={() =>
          update.mutate({
            where: { id },
            data: {
              link: {
                streaming: { ...data.link?.streaming, itunes: undefined },
              },
            },
          })
        }
      />
      <MusicYoutubeSelectForm
        term={setLocale(data.title, router) || ""}
        streamingLink={data.link?.streaming}
        onSelect={(value) =>
          update.mutate({
            where: { id },
            data: {
              link: {
                streaming: {
                  ...data.link?.streaming,
                  youtube: value?.id?.videoId,
                },
              },
            },
          })
        }
        onRemove={() =>
          update.mutate({
            where: { id },
            data: {
              link: {
                streaming: { ...data.link?.streaming, youtube: undefined },
              },
            },
          })
        }
      />
    </MusicLayout>
  );
};

export default SettingsMusic;
