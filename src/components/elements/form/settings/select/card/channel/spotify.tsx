import type { StreamingLink } from "@prisma/client";

import { trpc } from "../../../../../../../utils/trpc";
import SpotifyArtistCard from "../../../../../card/channel/spotify";
import SpotifySelectForm from "../spotify";

interface SpotifyArtistSelectFormProps {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  onSelect: (data: SpotifyApi.ArtistObjectFull) => void;
  onRemove: () => void;
}
const SpotifyArtistSelectForm = ({
  streamingLink,
  term,
  onSelect,
  onRemove,
}: SpotifyArtistSelectFormProps) => {
  const { data } = trpc.spotify.findUniqueArtist.useQuery(
      streamingLink?.spotify?.id
    ),
    { data: searchData } = trpc.spotify.searchArtists.useQuery(term);
  return (
    <SpotifySelectForm
      streamingLink={streamingLink}
      lookup={data}
      search={(searchData?.items as SpotifyApi.ArtistObjectFull[]) || []}
      largeCard={(value) =>
        value && (
          <SpotifyArtistCard size="large" data={value} onClick={onRemove} />
        )
      }
      smallCard={(value) => (
        <SpotifyArtistCard size="small" data={value} onClick={onSelect} />
      )}
    />
  );
};

export default SpotifyArtistSelectForm;
