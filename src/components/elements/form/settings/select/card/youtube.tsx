import React from "react";
import axios from "axios";
import CardSelectForm from ".";
import type { youtube_v3 } from "googleapis";
import type { CardSelectFormProps } from ".";
import type { StreamingLink } from "@prisma/client";

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
  lookup: (id: string) => Promise<T | undefined>;
}

function YoutubeSelectForm<T extends Video | Channel>({
  streamingLink,
  term,
  type,
  largeCard,
  smallCard,
  lookup,
}: YoutubeSelectFormProps<T>) {
  return (
    <CardSelectForm<T | undefined, SearchResult[]>
      link={streamingLink?.youtube}
      lookup={(id) => lookup(id).then((data) => data)}
      search={() =>
        axios
          .get<youtube_v3.Schema$SearchListResponse>("/api/youtube/search", {
            params: { term, type },
          })
          .then(({ data }) => data.items)
      }
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
