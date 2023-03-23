import type { StreamingLink } from "@prisma/client";

import { trpc } from "../../../../../../../utils/trpc";
import AlbumSpotifyCard from "../../../../../card/spotify/album";
import AlbumSpotifySquareCard from "../../../../../card/square/spotify/album";
import SpotifySelectForm from "../spotify";

interface SpotifyAlbumSelectFormProps {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  onSelect: (data: SpotifyApi.AlbumObjectFull) => void;
  onRemove: () => void;
}
const SpotifyAlbumSelectForm = ({
  streamingLink,
  term,
  onSelect,
  onRemove,
}: SpotifyAlbumSelectFormProps) => {
  const { data } = trpc.spotify.findUniqueAlbum.useQuery(
      streamingLink?.spotify?.id
    ),
    { data: searchData } = trpc.spotify.searchAlbums.useQuery(term);
  return (
    <SpotifySelectForm
      largeCard={(value) =>
        value && <AlbumSpotifyCard data={value} onClick={onRemove} />
      }
      lookup={data}
      search={searchData || []}
      smallCard={(value) => (
        <AlbumSpotifySquareCard data={value} onClick={onSelect} />
      )}
      streamingLink={streamingLink}
    />
  );
};

export default SpotifyAlbumSelectForm;
