import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import type { GetServerSideProps, NextPage } from "next";

import BandUpdateAutocomplete from "../../../components/elements/autocomplete/update/band";
import ItunesAlbumSelectForm from "../../../components/elements/form/settings/select/card/album/itunes";
import SpotifyAlbumSelectForm from "../../../components/elements/form/settings/select/card/album/spotify";
import MusicYoutubeSelectForm from "../../../components/elements/form/settings/select/card/music/youtube";
import SettingsShowLayout from "../../../components/layouts/show/settings";
import { clearBandMutate, selectBandMutate } from "../../../helpers";
import { convertAffiliateLink } from "../../../helpers/itunes";
import {
  findLinkItunes,
  findLinkSpotify,
  findLinkYoutube,
  removeItunesMutate,
  removeSpotifyMutate,
  removeYoutubeMutate,
  selectItunesMutate,
  selectSpotifyMutate,
  selectYoutubeMutate,
} from "../../../helpers/link";
import setLocale from "../../../helpers/locale";
import { resourceAlbumShowQuery } from "../../../helpers/resource";
import { redirectToSignIn } from "../../../helpers/user";

const AlbumSettings: NextPage = () => (
  <SettingsShowLayout getQuery={resourceAlbumShowQuery}>
    {({ data, update, router, query }) => {
      const { album, links, id, name } = data,
        locale = setLocale(name, router);
      return (
        <>
          <BandUpdateAutocomplete
            loading={update.isLoading}
            onChange={{
              onClear: () => update.mutate({ ...query, ...clearBandMutate }),
              onSelect: (_e, _v, _r, d) =>
                update.mutate({
                  ...query,
                  ...selectBandMutate(d?.option.id),
                }),
            }}
            value={album?.band}
          />

          <Typography variant="h4">Spotify</Typography>
          <Divider />

          <SpotifyAlbumSelectForm
            link={findLinkSpotify(links)}
            onRemove={() =>
              update.mutate({
                ...query,
                ...removeSpotifyMutate(id),
              })
            }
            onSelect={({ id, images }) =>
              update.mutate({
                ...query,
                ...selectSpotifyMutate({
                  id,
                  images: [
                    images[2]?.url ?? null,
                    images[1]?.url ?? null,
                    images[0]?.url ?? null,
                  ],
                }),
              })
            }
            term={locale}
          />

          <Typography variant="h4">iTunes</Typography>
          <Divider />

          <ItunesAlbumSelectForm
            link={findLinkItunes(links)}
            onRemove={() =>
              update.mutate({ ...query, ...removeItunesMutate(id) })
            }
            onSelect={(value) =>
              value &&
              update.mutate({
                ...query,
                ...selectItunesMutate({
                  id: convertAffiliateLink(value.collectionViewUrl).toString(),
                  images: [
                    value.artworkUrl30,
                    value.artworkUrl60,
                    value.artworkUrl100,
                  ],
                }),
              })
            }
            term={locale}
          />

          <Typography variant="h4">Youtube</Typography>
          <Divider />

          <MusicYoutubeSelectForm
            link={findLinkYoutube(links)}
            onRemove={() =>
              update.mutate({
                ...query,
                ...removeYoutubeMutate(id),
              })
            }
            onSelect={(value) =>
              value?.id?.videoId &&
              update.mutate({
                ...query,
                ...selectYoutubeMutate({
                  id: value.id.videoId,
                  images: [
                    value.snippet?.thumbnails?.standard?.url ?? null,
                    value.snippet?.thumbnails?.medium?.url ?? null,
                    value.snippet?.thumbnails?.high?.url ?? null,
                  ],
                }),
              })
            }
            term={locale}
          />
        </>
      );
    }}
  </SettingsShowLayout>
);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const redirect = await redirectToSignIn(ctx);
  return { props: {}, redirect };
};

export default AlbumSettings;
