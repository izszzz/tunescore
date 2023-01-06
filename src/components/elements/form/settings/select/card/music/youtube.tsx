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
  <YoutubeSelectForm
    {...props}
    type="video"
    search={gapi.client.youtube.search.list}
    lookup={gapi.client.youtube.videos.list}
    largeCard={(value) =>
      value && (
        <MusicYoutubeCard
          size="large"
          data={value as gapi.client.youtube.Video}
          onClick={onRemove}
        />
      )
    }
    smallCard={(value) =>
      value && (
        <MusicYoutubeCard
          size="small"
          data={value as gapi.client.youtube.SearchResult}
          onClick={onSelect}
        />
      )
    }
  />;
};

export default MusicYoutubeSelectForm;
