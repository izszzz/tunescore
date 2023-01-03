import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useQueryClient } from "react-query";
import { useSession } from "next-auth/react";
import MusicLayout from "../../../components/layouts/show/music";
import BandUpdateAutocomplete from "../../../components/elements/autocomplete/update/band";
import DangerAlert from "../../../components/elements/alert/delete";
import MusicItunesSelectForm from "../../../components/elements/form/settings/select/card/itunes";
import MusicYoutubeSelectForm from "../../../components/elements/form/settings/select/card/youtube";
import setLocale from "../../../helpers/locale";
import { trpc } from "../../../utils/trpc";
import SingleRowForm from "../../../components/elements/form/single_row";
import { musicShowPath } from "../../../paths/musics/[id]";
import TagUpdateAutocomplete from "../../../components/elements/autocomplete/update/tag";
import { getRouterId } from "../../../helpers/router";
import type { NextPage } from "next";
import type { MusicLayoutProps } from "../../../components/layouts/show/music";

const SettingsMusic: NextPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const session = useSession();
  const { enqueueSnackbar } = useSnackbar();
  const id = getRouterId(router);
  const path = musicShowPath({ router, session });
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
  const searchArtist = trpc.useMutation("search.artist", {
    onError: () => {
      enqueueSnackbar("artist.search error");
    },
  });
  if (!data) return <></>;
  const musicData = data as MusicLayoutProps["data"];
  return (
    <MusicLayout data={musicData} path={path} activeTab="settings">
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
      />
      <TagUpdateAutocomplete
        value={musicData.tagMaps.map((tagMap) => tagMap.tag)}
        loading={update.isLoading}
        onChange={{
          onSelect: (_e, _v, _r, details) =>
            details &&
            update.mutate({
              ...query,
              data: {
                tagMaps: {
                  create: {
                    tag: { connect: { id: details.option.id } },
                    resourceType: "Music",
                  },
                },
              },
            }),
          onRemove: (_e, _v, _r, details) =>
            details &&
            update.mutate({
              ...query,
              data: {
                tagMaps: {
                  delete: {
                    resourceId_tagId_resourceType: {
                      resourceType: "Music",
                      resourceId: id,
                      tagId: details.option.id,
                    },
                  },
                },
              },
            }),
        }}
      />

      <Typography variant="h4">iTunes</Typography>
      <Divider />

      <MusicItunesSelectForm
        term={setLocale(data.title, router)}
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
        term={setLocale(data.title, router)}
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
