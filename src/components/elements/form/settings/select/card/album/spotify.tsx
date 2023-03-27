import type { Link } from "@prisma/client";

import { trpc } from "../../../../../../../utils/trpc";
import AlbumSpotifyCard from "../../../../../card/spotify/album";
import AlbumSpotifySquareCard from "../../../../../card/square/spotify/album";
import SpotifySelectForm from "../spotify";

interface SpotifyAlbumSelectFormProps {
  link: Link | undefined;
  term: string;
  onSelect: (data: SpotifyApi.AlbumObjectFull) => void;
  onRemove: () => void;
}
const SpotifyAlbumSelectForm = ({
  link,
  term,
  onSelect,
  onRemove,
}: SpotifyAlbumSelectFormProps) => {
  const { data } = trpc.spotify.findUniqueAlbum.useQuery(link?.linkId),
    { data: searchData } = trpc.spotify.searchAlbums.useQuery(term);
  return (
    <SpotifySelectForm
      largeCard={(value) =>
        value && <AlbumSpotifyCard data={value} onClick={onRemove} />
      }
      link={link}
      lookup={data}
      search={searchData || []}
      smallCard={(value) => (
        <AlbumSpotifySquareCard data={value} onClick={onSelect} />
      )}
    />
  );
};

export default SpotifyAlbumSelectForm;
