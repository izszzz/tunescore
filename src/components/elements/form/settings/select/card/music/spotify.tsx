import axios from "axios";
import SpotifySelectForm from "../spotify";
import MusicSpotifyCard from "../../../../../card/music/spotify";
import type { StreamingLink } from "@prisma/client";

interface SpotifyMusicSelectFormProps {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  onSelect: (data: SpotifyApi.TrackObjectFull) => void;
  onRemove: () => void;
}
const SpotifyMusicSelectForm = ({
  onSelect,
  onRemove,
  ...props
}: SpotifyMusicSelectFormProps) => (
  <SpotifySelectForm<SpotifyApi.TrackObjectFull>
    {...props}
    type={["track"]}
    lookup={async (id) =>
      await axios.get<SpotifyApi.TrackObjectFull>(`/api/spotify/tracks/${id}`)
    }
    largeCard={(value) =>
      value && <MusicSpotifyCard size="large" data={value} onClick={onRemove} />
    }
    smallCard={(value) => (
      <MusicSpotifyCard size="small" data={value} onClick={onSelect} />
    )}
  />
);

export default SpotifyMusicSelectForm;
