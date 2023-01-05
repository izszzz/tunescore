import React from "react";
import MusicYoutubeCard from "../../../../../card/music/youtube";
import YoutubeSelectForm from "../youtube";
import type { StreamingLink } from "@prisma/client";

interface MusicYoutubeSelectFormProps {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  onSelect: (data: gapi.client.youtube.SearchResult | undefined) => void;
  onRemove: () => void;
}

const MusicYoutubeSelectForm = ({
  onSelect,
  onRemove,
  ...props
}: MusicYoutubeSelectFormProps) => {
  <YoutubeSelectForm<Omit<gapi.client.youtube.Video, "id">>
    {...props}
    type="video"
    search={gapi.client.youtube.search.list}
    lookup={gapi.client.youtube.videos.list}
    largeCard={(value) =>
      value && <MusicYoutubeCard size="large" data={value} onClick={onRemove} />
    }
    smallCard={(value) =>
      value && <MusicYoutubeCard size="small" data={value} onClick={onSelect} />
    }
  />;
};

export default MusicYoutubeSelectForm;
