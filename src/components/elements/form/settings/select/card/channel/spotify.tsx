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
      largeCard={(value) =>
        value && <ChannelSpotifyCard data={value} onClick={onRemove} />
      }
      lookup={data}
      search={(searchData?.items as SpotifyApi.ArtistObjectFull[]) || []}
      smallCard={(value) => (
        <ChannelSpotifySquareCard data={value} onClick={onSelect} />
      )}
      streamingLink={streamingLink}
    />
  );
};

export default SpotifyArtistSelectForm;
