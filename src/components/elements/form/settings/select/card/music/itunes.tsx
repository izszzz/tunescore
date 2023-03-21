import type { ItunesMusic } from "@izszzz/itunes-search-api";
import type { StreamingLink } from "@prisma/client";

import { trpc } from "../../../../../../../utils/trpc";
import MusicItunesCard from "../../../../../card/itunes/music";
import MusicItunesSquareCard from "../../../../../card/square/itunes/music";
import ItunesSelectForm from "../itunes";

interface MusicItunesSelectFormProps {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  onSelect: (data: ItunesMusic | undefined) => void;
  onRemove: () => void;
}
const MusicItunesSelectForm = ({
  streamingLink,
  term,
  onSelect,
  onRemove,
}: MusicItunesSelectFormProps) => {
  const { data } = trpc.itunes.findUniqueMusic.useQuery(
      streamingLink?.itunes?.id
    ),
    { data: searchData } = trpc.itunes.searchMusics.useQuery(term);
  return (
    <ItunesSelectForm<ItunesMusic>
      largeCard={(value) =>
        value && <MusicItunesCard data={value} onClick={onRemove} />
      }
      lookup={data}
      search={searchData}
      smallCard={(value) => (
        <MusicItunesSquareCard data={value} onClick={onSelect} />
      )}
      streamingLink={streamingLink}
      term={term}
    />
  );
};

export default MusicItunesSelectForm;
