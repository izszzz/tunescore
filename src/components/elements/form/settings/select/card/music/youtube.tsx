import React from "react";
import axios from "axios";
import MusicYoutubeCard from "../../../../../card/music/youtube";
import YoutubeSelectForm from "../youtube";
import type { SearchResult, Video, VideoList } from "../youtube";
import type { StreamingLink } from "@prisma/client";

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
    <YoutubeSelectForm
      {...props}
      type="video"
      lookup={(id) => axios.get<VideoList>(`/api/youtube/videos/${id}`)}
      largeCard={(value) =>
        value && (
          <MusicYoutubeCard
            size="large"
            data={value as Video}
            onClick={onRemove}
          />
        )
      }
      smallCard={(value) =>
        value && (
          <MusicYoutubeCard
            size="small"
            data={value as SearchResult}
            onClick={onSelect}
          />
        )
      }
    />
  );
};

export default MusicYoutubeSelectForm;
