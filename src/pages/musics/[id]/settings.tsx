import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useQueryClient } from "react-query";
import { useSession } from "next-auth/react";
import MusicLayout from "../../../components/layouts/show/music";
import BandUpdateAutocomplete from "../../../components/elements/autocomplete/update/band";
import ArtistsUpdateForm from "../../../components/elements/form/settings/artists";
import DefaultUpdateAutocomplete from "../../../components/elements/autocomplete/update/default";
import ResourceIcon from "../../../components/elements/icon/resource";
import DangerAlert from "../../../components/elements/alert/delete";
import MusicItunesSelectForm from "../../../components/elements/form/settings/select/card/itunes";
import MusicYoutubeSelectForm from "../../../components/elements/form/settings/select/card/youtube";
import setLocale from "../../../helpers/setLocale";
import { createPath } from "../../../helpers/createPath";
import { trpc } from "../../../utils/trpc";
import SingleRowForm from "../../../components/elements/form/single_row";
import type {
  MusicLayoutProps,
} from "../../../components/layouts/show/music";
import type { Artist } from "@prisma/client";
import type { NextPage } from "next";

const SettingsMusic: NextPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const session = useSession();
  const { enqueueSnackbar } = useSnackbar();
  const id = router.query.id as string;
  const path = createPath([
    "music.findUniqueMusic",
    {
      where: { id },
      include: {
        user: true,
        band: true,
        artists: true,
        composers: true,
        lyrists: true,
        bookmarks: { where: { id: session.data?.user?.id } },
      },
    },
  ]);
  const query = path[1];
  const { data } = trpc.useQuery(path);
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
      queryClient.setQueryData<typeof data>(path, data);
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
      <SingleRowForm
        data={musicData}
        loading={update.isLoading}
        formContainerProps={{
          onSuccess: ({ title }) => {
            update.mutate({ ...query, data: { title } });
          },
        }}
        textFieldElementProps={{
          name: "title",
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
              ...query,
              data: { band: { disconnect: true } },
            }),
          onSelect: (_e, _v, _r, details) =>
            update.mutate({
              ...query,
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
              ...query,
              data: { composers: { connect: { id: details?.option.id } } },
            }),
          onRemove: (_e, _v, _r, details) =>
            update.mutate({
              ...query,
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
              ...query,
              data: { lyrists: { connect: { id: details?.option.id } } },
            }),
          onRemove: (_e, _v, _r, details) =>
            update.mutate({
              ...query,
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
              ...query,
              data: { artists: { connect: { id: artist?.id } } },
            }),
        }}
        onDestroy={(artist) =>
          update.mutate({
            ...query,
            data: { artists: { disconnect: { id: artist.id } } },
          })
        }
      />

      <Typography variant="h4">iTunes</Typography>
      <Divider />

      <MusicItunesSelectForm
        term={setLocale(data.title, router) || ""}
        streamingLink={data.link?.streaming}
        onSelect={(value) =>
          update.mutate({
            ...query,
            data: {
              link: {
                streaming: {
                  ...data.link?.streaming,
                  itunes: {
                    id: value?.trackViewUrl,
                    image: {
                      size: {
                        small: value?.artworkUrl30,
                        medium: value?.artworkUrl60,
                        large: value?.artworkUrl100,
                      },
                    },
                  },
                },
              },
            },
          })
        }
        onRemove={() =>
          update.mutate({
            ...query,
            data: {
              link: {
                streaming: { ...data.link?.streaming, itunes: undefined },
              },
            },
          })
        }
      />

      <Typography variant="h4">Youtube</Typography>
      <Divider />

      <MusicYoutubeSelectForm
        term={setLocale(data.title, router) || ""}
        streamingLink={data.link?.streaming}
        onSelect={(value) =>
          value?.id &&
          data.link &&
          update.mutate({
            ...query,
            data: {
              link: {
                streaming: {
                  ...data.link.streaming,
                  youtube: {
                    id: value.id.videoId,
                    image: {
                      size: {
                        small: value.snippet?.thumbnails?.standard?.url,
                        medium: value.snippet?.thumbnails?.medium?.url,
                        large: value.snippet?.thumbnails?.high?.url,
                      },
                    },
                  },
                },
              },
            },
          })
        }
        onRemove={() =>
          update.mutate({
            ...query,
            data: {
              link: {
                streaming: { ...data.link?.streaming, youtube: undefined },
              },
            },
          })
        }
      />
      <Typography variant="h4">Danger Zone</Typography>
      <Divider />

      <DangerAlert
        loadingButtonProps={{
          onClick: () => destroy.mutate({ ...query }),
          loading: destroy.isLoading,
        }}
      />
    </MusicLayout>
  );
};

export default SettingsMusic;
