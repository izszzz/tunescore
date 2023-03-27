import type { Link } from "@prisma/client";

import { trpc } from "../../../../../../../utils/trpc";
import MusicSpotifyCard from "../../../../../card/spotify/music";
import MusicSpotifySquareCard from "../../../../../card/square/spotify/music";
import SpotifySelectForm from "../spotify";

interface SpotifyMusicSelectFormProps {
  link: Link | undefined;
  term: string;
  onSelect: (data: SpotifyApi.TrackObjectFull) => void;
  onRemove: () => void;
}
const SpotifyMusicSelectForm = ({
  link,
  term,
  onSelect,
  onRemove,
}: SpotifyMusicSelectFormProps) => {
  const { data } = trpc.spotify.findUniqueTrack.useQuery(link?.linkId),
    { data: searchData } = trpc.spotify.searchTracks.useQuery(term);
  return (
    <SpotifySelectForm
      largeCard={(value) =>
        value && <MusicSpotifyCard data={value} onClick={onRemove} />
      }
      link={link}
      lookup={data}
      search={(searchData?.items as SpotifyApi.TrackObjectFull[]) || []}
      smallCard={(value) => (
        <MusicSpotifySquareCard data={value} onClick={onSelect} />
      )}
    />
  );
};

export default SpotifyMusicSelectForm;
