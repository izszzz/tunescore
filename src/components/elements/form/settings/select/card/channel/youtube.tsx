import React from "react";

import type { StreamingLink } from "@prisma/client";

import { trpc } from "../../../../../../../utils/trpc";
import ChannelYoutubeSquareCard from "../../../../../card/square/youtube/channel";
import ChannelYoutubeCard from "../../../../../card/youtube/channel";
import YoutubeSelectForm from "../youtube";
import type { SearchResult } from "../youtube";

interface ChannelYoutubeSelectFormProps {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  onSelect: (data: SearchResult | undefined) => void;
  onRemove: () => void;
}

const ChannelYoutubeSelectForm = ({
  streamingLink,
  onSelect,
  onRemove,
  ...props
}: ChannelYoutubeSelectFormProps) => {
  const { data } = trpc.youtube.findUniqueChannel.useQuery(
    streamingLink?.youtube?.id
  );
  return (
    <YoutubeSelectForm
      {...props}
      largeCard={(value) =>
        value && <ChannelYoutubeCard data={value} onClick={onRemove} />
      }
      lookup={data?.items?.[0]}
      smallCard={(value) => (
        <ChannelYoutubeSquareCard data={value} onClick={onSelect} />
      )}
      streamingLink={streamingLink}
      type="channel"
    />
  );
};

export default ChannelYoutubeSelectForm;
