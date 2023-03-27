import React from "react";

import type { Link } from "@prisma/client";

import { trpc } from "../../../../../../../utils/trpc";
import MusicYoutubeSquareCard from "../../../../../card/square/youtube/music";
import MusicYoutubeCard from "../../../../../card/youtube/music";
import YoutubeSelectForm from "../youtube";
import type { SearchResult } from "../youtube";

interface MusicYoutubeSelectFormProps {
  link: Link | undefined;
  term: string;
  onSelect: (data: SearchResult | undefined) => void;
  onRemove: () => void;
}

const MusicYoutubeSelectForm = ({
  link,
  onSelect,
  onRemove,
  ...props
}: MusicYoutubeSelectFormProps) => {
  const { data } = trpc.youtube.findUniqueVideo.useQuery(link?.linkId);
  return (
    <YoutubeSelectForm
      {...props}
      largeCard={(value) =>
        value && <MusicYoutubeCard data={value} onClick={onRemove} />
      }
      link={link}
      lookup={data?.items?.[0]}
      smallCard={(value) => (
        <MusicYoutubeSquareCard data={value} onClick={onSelect} />
      )}
      type="video"
    />
  );
};

export default MusicYoutubeSelectForm;
