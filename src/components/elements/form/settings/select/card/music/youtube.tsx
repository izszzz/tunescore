import React from "react";

import type { StreamingLink } from "@prisma/client";

import { trpc } from "../../../../../../../utils/trpc";
import MusicYoutubeSquareCard from "../../../../../card/square/youtube/music";
import MusicYoutubeCard from "../../../../../card/youtube/music";
import YoutubeSelectForm from "../youtube";
import type { SearchResult } from "../youtube";

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
    <YoutubeSelectForm
      {...props}
      largeCard={(value) =>
        value && <MusicYoutubeCard data={value} onClick={onRemove} />
      }
      lookup={data?.items?.[0]}
      smallCard={(value) => (
        <MusicYoutubeSquareCard data={value} onClick={onSelect} />
      )}
      streamingLink={streamingLink}
      type="video"
    />
  );
};

export default MusicYoutubeSelectForm;
