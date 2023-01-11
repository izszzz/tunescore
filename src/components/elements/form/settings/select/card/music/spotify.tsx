import axios from "axios";
import SpotifySelectForm from "../spotify";
import MusicSpotifyCard from "../../../../../card/music/spotify";
import type { StreamingLink } from "@prisma/client";

interface SpotifyMusicSelectFormProps {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  onSelect: (data: SpotifyApi.SingleTrackResponse | undefined) => void;
  onRemove: () => void;
}
const SpotifyMusicSelectForm = ({
  onSelect,
  onRemove,
  ...props
}: SpotifyMusicSelectFormProps) => (
  <SpotifySelectForm
    {...props}
    type={["track"]}
    lookup={(id) =>
      axios.get<{ body: SpotifyApi.SingleTrackResponse }>(
        `/api/spotify/tracks/${id}`
      )
    }
    largeCard={(value) =>
      value && <MusicSpotifyCard size="large" data={value} onClick={onRemove} />
    }
    smallCard={(value) =>
      value && <MusicSpotifyCard size="small" data={value} onClick={onSelect} />
    }
  />
);

export default SpotifyMusicSelectForm;
