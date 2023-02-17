import React from "react";

import type { StreamingLink } from "@prisma/client";

import { trpc } from "../../../../../../../utils/trpc";
import ChannelYoutubeCard from "../../../../../card/channel/youtube";
import YoutubeSelectForm from "../youtube";
import type { SearchResult, Channel } from "../youtube";

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
  const { data } = trpc.youtube.channel.useQuery(streamingLink?.youtube?.id);
  if (!data) return <>loading</>;
  return (
    <YoutubeSelectForm<Channel>
      {...props}
      type="channel"
      streamingLink={streamingLink}
      lookup={data?.items?.[0]}
      largeCard={(value) =>
        value && (
          <ChannelYoutubeCard size="large" data={value} onClick={onRemove} />
        )
      }
      smallCard={(value) => (
        <ChannelYoutubeCard size="small" data={value} onClick={onSelect} />
      )}
    />
  );
};

export default ChannelYoutubeSelectForm;
