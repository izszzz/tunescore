import React from "react";

import type { Link } from "@prisma/client";

import { trpc } from "../../../../../../../utils/trpc";
import ChannelYoutubeSquareCard from "../../../../../card/square/youtube/channel";
import ChannelYoutubeCard from "../../../../../card/youtube/channel";
import YoutubeSelectForm from "../youtube";
import type { SearchResult } from "../youtube";

interface ChannelYoutubeSelectFormProps {
  link: Link | undefined;
  term: string;
  onSelect: (data: SearchResult | undefined) => void;
  onRemove: () => void;
}

const ChannelYoutubeSelectForm = ({
  link,
  onSelect,
  onRemove,
  ...props
}: ChannelYoutubeSelectFormProps) => {
  const { data } = trpc.youtube.findUniqueChannel.useQuery(link?.linkId);
  return (
    <YoutubeSelectForm
      {...props}
      largeCard={(value) =>
        value && <ChannelYoutubeCard data={value} onClick={onRemove} />
      }
      link={link}
      lookup={data?.items?.[0]}
      smallCard={(value) => (
        <ChannelYoutubeSquareCard data={value} onClick={onSelect} />
      )}
      type="channel"
    />
  );
};

export default ChannelYoutubeSelectForm;
