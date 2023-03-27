import type { ItunesMusic } from "@izszzz/itunes-search-api";
import type { Link } from "@prisma/client";

import { trpc } from "../../../../../../../utils/trpc";
import MusicItunesCard from "../../../../../card/itunes/music";
import MusicItunesSquareCard from "../../../../../card/square/itunes/music";
import ItunesSelectForm from "../itunes";

interface MusicItunesSelectFormProps {
  link: Link | undefined;
  term: string;
  onSelect: (data: ItunesMusic | undefined) => void;
  onRemove: () => void;
}
const MusicItunesSelectForm = ({
  link,
  term,
  onSelect,
  onRemove,
}: MusicItunesSelectFormProps) => {
  const { data } = trpc.itunes.findUniqueMusic.useQuery(link?.linkId),
    { data: searchData } = trpc.itunes.searchMusics.useQuery(term);
  return (
    <ItunesSelectForm<ItunesMusic>
      largeCard={(value) =>
        value && <MusicItunesCard data={value} onClick={onRemove} />
      }
      link={link}
      lookup={data}
      search={searchData}
      smallCard={(value) => (
        <MusicItunesSquareCard data={value} onClick={onSelect} />
      )}
      term={term}
    />
  );
};

export default MusicItunesSelectForm;
