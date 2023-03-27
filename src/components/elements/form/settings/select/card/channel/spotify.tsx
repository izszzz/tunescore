import type { Link } from "@prisma/client";

import { trpc } from "../../../../../../../utils/trpc";
import ChannelSpotifyCard from "../../../../../card/spotify/channel";
import ChannelSpotifySquareCard from "../../../../../card/square/spotify/channel";
import SpotifySelectForm from "../spotify";

interface SpotifyChannelSelectFormProps {
  link: Link | undefined;
  term: string;
  onSelect: (data: SpotifyApi.ArtistObjectFull) => void;
  onRemove: () => void;
}
const SpotifyArtistSelectForm = ({
  link,
  term,
  onSelect,
  onRemove,
}: SpotifyChannelSelectFormProps) => {
  const { data } = trpc.spotify.findUniqueArtist.useQuery(link?.linkId),
    { data: searchData } = trpc.spotify.searchArtists.useQuery(term);
  return (
    <SpotifySelectForm
      largeCard={(value) =>
        value && <ChannelSpotifyCard data={value} onClick={onRemove} />
      }
      link={link}
      lookup={data}
      search={(searchData?.items as SpotifyApi.ArtistObjectFull[]) || []}
      smallCard={(value) => (
        <ChannelSpotifySquareCard data={value} onClick={onSelect} />
      )}
    />
  );
};

export default SpotifyArtistSelectForm;
