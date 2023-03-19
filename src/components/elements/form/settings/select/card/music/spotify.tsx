import type { StreamingLink } from "@prisma/client";

import { trpc } from "../../../../../../../utils/trpc";
import MusicSpotifyCard from "../../../../../card/spotify/music";
import MusicSpotifySquareCard from "../../../../../card/square/spotify/music";
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
      largeCard={(value) =>
        value && <MusicSpotifyCard data={value} onClick={onRemove} />
      }
      lookup={data}
      search={(searchData?.items as SpotifyApi.TrackObjectFull[]) || []}
      smallCard={(value) => (
        <MusicSpotifySquareCard data={value} onClick={onSelect} />
      )}
      streamingLink={streamingLink}
    />
  );
};

export default SpotifyMusicSelectForm;
