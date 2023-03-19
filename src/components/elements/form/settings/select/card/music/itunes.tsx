import type { ItunesMusic } from "@izszzz/itunes-search-api";
import type { StreamingLink } from "@prisma/client";

import { itunes } from "../../../../../../../server/common/itunes";
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
  onSelect,
  onRemove,
  ...props
}: MusicItunesSelectFormProps) => (
  <ItunesSelectForm<ItunesMusic>
    {...props}
    largeCard={(value) =>
      value && <MusicItunesCard data={value} onClick={onRemove} />
    }
    lookup={itunes.lookupMusic}
    search={itunes.searchMusics}
    smallCard={(value) => (
      <MusicItunesSquareCard data={value} onClick={onSelect} />
    )}
  />
);

export default MusicItunesSelectForm;
