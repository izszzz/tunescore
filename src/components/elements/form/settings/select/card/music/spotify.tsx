import type { StreamingLink } from "@prisma/client";

import { trpc } from "../../../../../../../utils/trpc";
import MusicSpotifyCard from "../../../../../card/music/spotify";
import SpotifySelectForm from "../spotify";

interface SpotifyMusicSelectFormProps {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  onSelect: (data: SpotifyApi.TrackObjectFull) => void;
  onRemove: () => void;
}
const SpotifyMusicSelectForm = ({
  streamingLink,
  onSelect,
  onRemove,
  ...props
}: SpotifyMusicSelectFormProps) => {
  const { data } = trpc.spotify.findUniqueTrack.useQuery(
    streamingLink?.spotify?.id
  );
  return (
    <SpotifySelectForm<SpotifyApi.SingleTrackResponse>
      {...props}
      streamingLink={streamingLink}
      lookup={data}
      largeCard={(value) =>
        value && (
          <MusicSpotifyCard size="large" data={value} onClick={onRemove} />
        )
      }
      smallCard={(value) => (
        <MusicSpotifyCard size="small" data={value} onClick={onSelect} />
      )}
    />
  );
};

export default SpotifyMusicSelectForm;
