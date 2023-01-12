import React from "react";
import axios from "axios";
import ChannelYoutubeCard from "../../../../../card/channel/youtube";
import YoutubeSelectForm from "../youtube";
import type { ChannelList } from "../youtube";
import type { StreamingLink } from "@prisma/client";

interface ChannelYoutubeSelectFormProps {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  onSelect: (data: gapi.client.youtube.SearchResult | undefined) => void;
  onRemove: () => void;
}

const ChannelYoutubeSelectForm = ({
  onSelect,
  onRemove,
  ...props
}: ChannelYoutubeSelectFormProps) => (
  <YoutubeSelectForm
    {...props}
    type="channel"
    lookup={(id) => axios.get<ChannelList>(`/api/youtube/channels/${id}`)}
    largeCard={(value) =>
      value && (
        <ChannelYoutubeCard
          size="large"
          data={value as gapi.client.youtube.Channel}
          onClick={onRemove}
        />
      )
    }
    smallCard={(value) =>
      value && (
        <ChannelYoutubeCard
          size="small"
          data={value as gapi.client.youtube.SearchResult}
          onClick={onSelect}
        />
      )
    }
  />
);

export default ChannelYoutubeSelectForm;
