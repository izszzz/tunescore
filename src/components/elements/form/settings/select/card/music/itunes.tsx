import {
  searchItunesMusics,
  lookupItunesMusic,
} from "../../../../../../../helpers/itunes";
import MusicItunesCard from "../../../../../card/music/itunes";
import ItunesSelectForm from "../itunes";
import type { ItunesMusic } from "../../../../../../../helpers/itunes";
import type { StreamingLink } from "@prisma/client";

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
  <ItunesSelectForm
    {...props}
    search={searchItunesMusics}
    lookup={lookupItunesMusic}
    largeCard={(value) =>
      value && <MusicItunesCard size="large" data={value} onClick={onRemove} />
    }
    smallCard={(value) =>
      value && <MusicItunesCard size="small" data={value} onClick={onSelect} />
    }
  />
);

export default MusicItunesSelectForm;
