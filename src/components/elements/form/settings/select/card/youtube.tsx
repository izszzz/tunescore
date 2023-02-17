import React from "react";

import type { StreamingLink } from "@prisma/client";
import type { youtube_v3 } from "googleapis";

import { trpc } from "../../../../../../utils/trpc";

import CardSelectForm from ".";
import type { CardSelectFormProps } from ".";

export type Video = youtube_v3.Schema$Video;
export type VideoList = youtube_v3.Schema$VideoListResponse;
export type Channel = youtube_v3.Schema$Channel;
export type ChannelList = youtube_v3.Schema$ChannelListResponse;
export type SearchResult = youtube_v3.Schema$SearchResult;

interface YoutubeSelectFormProps<T>
  extends Pick<
    CardSelectFormProps<T, SearchResult[]>,
    "largeCard" | "smallCard"
  > {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  type: "video" | "channel";
  lookup: T | undefined;
}

function YoutubeSelectForm<T extends Video | Channel>({
  streamingLink,
  term,
  type,
  largeCard,
  smallCard,
  lookup,
}: YoutubeSelectFormProps<T>) {
  const { data } = trpc.youtube.search.useQuery({ term, type });
  if (!data) return <>loading</>;
  return (
    <CardSelectForm<T | undefined, SearchResult[]>
      link={streamingLink?.youtube}
      lookup={lookup}
      search={data.items}
      largeCard={largeCard}
      smallCard={smallCard}
      gridProps={{
        item: true,
        xs: 6,
        sm: 4,
        md: 4,
      }}
      tablePaginationProps={{
        count: 0,
        rowsPerPage: 0,
        page: 0,
        onPageChange: () => undefined,
      }}
    />
  );
}

export default YoutubeSelectForm;
