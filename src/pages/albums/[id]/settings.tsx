import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { trpc } from "../../../utils/trpc";
import setLocale from "../../../helpers/locale";
import { convertAffiliateLink } from "../../../helpers/itunes";
import AlbumLayout from "../../../components/layouts/show/album";
import { albumShowPath } from "../../../paths/albums/[id]";
import SingleRowForm from "../../../components/elements/form/single_row";
import ItunesAlbumSelectForm from "../../../components/elements/form/settings/select/card/album/itunes";
import MusicYoutubeSelectForm from "../../../components/elements/form/settings/select/card/music/youtube";
import DeleteAlert from "../../../components/elements/alert/delete";
import BandUpdateAutocomplete from "../../../components/elements/autocomplete/update/band";
import type { AlbumLayoutProps } from "../../../components/layouts/show/album";
import type { NextPage } from "next";

const Album: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const path = albumShowPath({ router, session });
  const query = path[1];
  const { data } = trpc.useQuery(path);
  const update = trpc.useMutation("album.updateOneAlbum");
  const destroy = trpc.useMutation("album.deleteOneAlbum");
  if (!data) return <></>;
  const title = setLocale(data.title, router);
  const albumData = data as AlbumLayoutProps["data"];
  return (
    <AlbumLayout data={albumData} path={path} activeTab="settings">
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
