import type { StreamingLink } from "@prisma/client";

import { trpc } from "../../../../../../../utils/trpc";
import SpotifyChannelCard from "../../../../../card/channel/spotify";
import SpotifySelectForm from "../spotify";

interface SpotifyChannelSelectFormProps {
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
}: SpotifyChannelSelectFormProps) => {
  const { data } = trpc.spotify.findUniqueArtist.useQuery(
      streamingLink?.spotify?.id
    ),
    { data: searchData } = trpc.spotify.searchArtists.useQuery(term);
  if (!data) return <></>;
  return (
    <SpotifySelectForm
      streamingLink={streamingLink}
      lookup={data}
      search={(searchData?.items as SpotifyApi.ArtistObjectFull[]) || []}
      largeCard={(value) =>
        value && (
          <SpotifyChannelCard size="large" data={value} onClick={onRemove} />
        )
      }
      smallCard={(value) => (
        <SpotifyChannelCard size="small" data={value} onClick={onSelect} />
      )}
    />
  );
};

export default SpotifyArtistSelectForm;
