import type { StreamingLink } from "@prisma/client";

import { trpc } from "../../../../../../../utils/trpc";
import ChannelSpotifyCard from "../../../../../card/spotify/channel";
import ChannelSpotifySquareCard from "../../../../../card/square/spotify/channel";
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
  return (
    <SpotifySelectForm
      streamingLink={streamingLink}
      lookup={data}
      search={(searchData?.items as SpotifyApi.ArtistObjectFull[]) || []}
      largeCard={(value) =>
        value && <ChannelSpotifyCard data={value} onClick={onRemove} />
      }
      smallCard={(value) => (
        <ChannelSpotifySquareCard data={value} onClick={onSelect} />
      )}
    />
  );
};

export default SpotifyArtistSelectForm;
