import React from "react";

import type { StreamingLink } from "@prisma/client";
import axios from "axios";

import MusicYoutubeCard from "../../../../../card/music/youtube";
import YoutubeSelectForm from "../youtube";
import type { SearchResult, Video, VideoList } from "../youtube";

interface MusicYoutubeSelectFormProps {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  onSelect: (data: SearchResult | undefined) => void;
  onRemove: () => void;
}

const MusicYoutubeSelectForm = ({
  onSelect,
  onRemove,
  ...props
}: MusicYoutubeSelectFormProps) => {
  return (
    <YoutubeSelectForm<Video>
      {...props}
      type="video"
      lookup={async (id) =>
        await axios
          .get<VideoList>(`/api/youtube/videos/${id}`)
          .then(({ data }) => data.items && data.items[0])
      }
      largeCard={(value) =>
        value && (
          <MusicYoutubeCard size="large" data={value} onClick={onRemove} />
        )
      }
      smallCard={(value) => (
        <MusicYoutubeCard size="small" data={value} onClick={onSelect} />
      )}
    />
  );
};

export default MusicYoutubeSelectForm;
