import React from "react";
import axios from "axios";
import ChannelYoutubeCard from "../../../../../card/channel/youtube";
import YoutubeSelectForm from "../youtube";
import type { ChannelList, SearchResult, Channel } from "../youtube";
import type { StreamingLink } from "@prisma/client";

interface ChannelYoutubeSelectFormProps {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  onSelect: (data: SearchResult | undefined) => void;
  onRemove: () => void;
}

const ChannelYoutubeSelectForm = ({
  onSelect,
  onRemove,
  ...props
}: ChannelYoutubeSelectFormProps) => (
  <YoutubeSelectForm<Channel>
    {...props}
    type="channel"
    lookup={(id) =>
      axios
        .get<ChannelList>(`/api/youtube/channels/${id}`)
        .then(({ data }) => data.items && data.items[0])
    }
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

export default ChannelYoutubeSelectForm;
