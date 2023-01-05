import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import setLocale from "../../../helpers/locale";
import { trpc } from "../../../utils/trpc";
import ArtistLayout from "../../../components/layouts/show/artist";
import SingleRowForm from "../../../components/elements/form/single_row";
import BandUpdateAutocomplete from "../../../components/elements/autocomplete/update/band";
import { artistShowPath } from "../../../paths/artists/[id]";
import DeleteAlert from "../../../components/elements/alert/delete";
import ItunesArtistSelectForm from "../../../components/elements/form/settings/select/card/channel/itunes";
import { convertAffiliateLink } from "../../../helpers/itunes";
import ChannelYoutubeSelectForm from "../../../components/elements/form/settings/select/card/channel/youtube";
import type { NextPage } from "next";
import type { ArtistLayoutProps } from "../../../components/layouts/show/artist";

const EditArtist: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const path = artistShowPath({ router, session });
  const query = path[1];
  const { data } = trpc.useQuery(path);
  const update = trpc.useMutation("artist.updateOneArtist");
  const destroy = trpc.useMutation("artist.deleteOneArtist");

  if (!data) return <></>;
  const artistData = data as ArtistLayoutProps["data"];
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
      <ItunesArtistSelectForm
        term={setLocale(data.name, router)}
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
                    id: convertAffiliateLink(value.artistLinkUrl).toString(),
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

      <ChannelYoutubeSelectForm
        term={setLocale(data.name, router)}
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
                    id: value.id.channelId,
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
    </ArtistLayout>
  );
};

export default EditArtist;
