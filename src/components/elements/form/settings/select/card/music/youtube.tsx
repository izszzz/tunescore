import React from "react";

import type { StreamingLink } from "@prisma/client";

import { trpc } from "../../../../../../../utils/trpc";
import YoutubeMusicCard from "../../../../../card/music/youtube";
import YoutubeSelectForm from "../youtube";
import type { SearchResult, Video } from "../youtube";

interface MusicYoutubeSelectFormProps {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  onSelect: (data: SearchResult | undefined) => void;
  onRemove: () => void;
}

const MusicYoutubeSelectForm = ({
  streamingLink,
  onSelect,
  onRemove,
  ...props
}: MusicYoutubeSelectFormProps) => {
  const { data } = trpc.youtube.findUniqueVideo.useQuery(
    streamingLink?.youtube?.id
  );
  return (
    <YoutubeSelectForm<Video>
      {...props}
      streamingLink={streamingLink}
      type="video"
      lookup={data?.items?.[0]}
      largeCard={(value) =>
        value && (
          <YoutubeMusicCard size="large" data={value} onClick={onRemove} />
        )
      }
      smallCard={(value) => (
        <YoutubeMusicCard size="small" data={value} onClick={onSelect} />
      )}
    />
  );
};

export default MusicYoutubeSelectForm;
