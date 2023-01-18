import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useQueryClient } from "@tanstack/react-query";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import DeleteAlert from "../../../components/elements/alert/delete";
import BandUpdateAutocomplete from "../../../components/elements/autocomplete/update/band";
import ItunesAlbumSelectForm from "../../../components/elements/form/settings/select/card/album/itunes";
import MusicYoutubeSelectForm from "../../../components/elements/form/settings/select/card/music/youtube";
import SingleRowForm from "../../../components/elements/form/single_row";
import AlbumLayout from "../../../components/layouts/show/album";
import type { AlbumLayoutProps } from "../../../components/layouts/show/album";
import { convertAffiliateLink } from "../../../helpers/itunes";
import setLocale from "../../../helpers/locale";
import { albumShowQuery } from "../../../paths/albums/[id]";
import { trpc } from "../../../utils/trpc";

const Album: NextPage = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const query = albumShowQuery({ router, session: useSession().data });
  const { data } = trpc.album.findUniqueAlbum.useQuery(query);
  const update = trpc.album.updateOneAlbum.useMutation({
    onSuccess: (data) => {
      queryClient.setQueryData([["album", "findUniqueAlbum"], query], data);
    },
  });
  const destroy = trpc.album.deleteOneAlbum.useMutation();
  if (!data) return <></>;
  const title = setLocale(data.title, router);
  const albumData = data as AlbumLayoutProps["data"];
  return (
    <AlbumLayout data={albumData} query={query} activeTab="settings">
      <SingleRowForm
        data={albumData}
        loading={update.isLoading}
        formContainerProps={{
          onSuccess: ({ title }) =>
            update.mutate({ ...query, data: { title } }),
        }}
        textFieldElementProps={{
          name: "title",
        }}
      />
      <BandUpdateAutocomplete
        value={albumData.band}
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
      <ItunesAlbumSelectForm
        term={title}
        streamingLink={data.link?.streaming}
        onSelect={(value) =>
          value &&
          update.mutate({
            ...query,
            data: {
              link: {
                streaming: {
                  ...data.link?.streaming,
                  itunes: {
                    id: convertAffiliateLink(
                      value.collectionViewUrl
                    ).toString(),
                    image: {
                      size: {
                        small: value.artworkUrl30,
                        medium: value.artworkUrl60,
                        large: value.artworkUrl100,
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
        term={title}
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

      <DeleteAlert
        loadingButtonProps={{
          onClick: () => destroy.mutate({ ...query }),
          loading: destroy.isLoading,
        }}
      />
    </AlbumLayout>
  );
};

export default Album;
