import type { StreamingLink } from "@prisma/client";

import { trpc } from "../../../../../../../utils/trpc";
import SpotifyMusicCard from "../../../../../card/music/spotify";
import SpotifySelectForm from "../spotify";

interface SpotifyMusicSelectFormProps {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  onSelect: (data: SpotifyApi.TrackObjectFull) => void;
  onRemove: () => void;
}
const SpotifyMusicSelectForm = ({
  streamingLink,
  term,
  onSelect,
  onRemove,
}: SpotifyMusicSelectFormProps) => {
  const { data } = trpc.spotify.findUniqueTrack.useQuery(
      streamingLink?.spotify?.id
    ),
    { data: searchData } = trpc.spotify.searchTracks.useQuery(term);
  return (
    <SpotifySelectForm
      streamingLink={streamingLink}
      lookup={data}
      search={(searchData?.items as SpotifyApi.TrackObjectFull[]) || []}
      largeCard={(value) =>
        value && (
          <SpotifyMusicCard size="large" data={value} onClick={onRemove} />
        )
      }
      smallCard={(value) => (
        <SpotifyMusicCard size="small" data={value} onClick={onSelect} />
      )}
    />
  );
};

export default SpotifyMusicSelectForm;
