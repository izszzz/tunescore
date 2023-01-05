import React from "react";
import ChannelYoutubeCard from "../../../../../card/channel/youtube";
import YoutubeSelectForm from "../youtube";
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
}: ChannelYoutubeSelectFormProps) => {
  <YoutubeSelectForm<Omit<gapi.client.youtube.Video, "id">>
    {...props}
    type="channel"
    search={gapi.client.youtube.search.list}
    lookup={gapi.client.youtube.videos.list}
    largeCard={(value) =>
      value && (
        <ChannelYoutubeCard size="large" data={value} onClick={onRemove} />
      )
    }
    smallCard={(value) =>
      value && (
        <ChannelYoutubeCard size="small" data={value} onClick={onSelect} />
      )
    }
  />;
};

export default ChannelYoutubeSelectForm;
