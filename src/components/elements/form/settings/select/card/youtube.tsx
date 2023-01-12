import React, { useEffect, useState } from "react";
import axios from "axios";
import CardSelectForm from ".";
import type { AxiosResponse } from "axios";
import type { youtube_v3 } from "googleapis";
import type { CardSelectFormProps } from ".";
import type { StreamingLink } from "@prisma/client";

export type Video = youtube_v3.Schema$Video;
export type VideoList = youtube_v3.Schema$VideoListResponse;
export type Channel = youtube_v3.Schema$Channel;
export type ChannelList = youtube_v3.Schema$ChannelListResponse;
export type SearchResult = youtube_v3.Schema$SearchResult;

interface YoutubeSelectFormProps
  extends Pick<
    CardSelectFormProps<Video | Channel | SearchResult | undefined>,
    "largeCard" | "smallCard"
  > {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  type: "video" | "channel";
  lookup: (id: string) => Promise<AxiosResponse<VideoList | ChannelList>>;
}

function YoutubeSelectForm({
  streamingLink,
  term,
  type,
  largeCard,
  smallCard,
  lookup,
}: YoutubeSelectFormProps) {
  const [options, setOptions] = useState<SearchResult[]>([]);
  const [value, setValue] = useState<Video | Channel | undefined>();
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [count, setCount] = useState(0);
  const [page] = useState(0);
  const [current] = useState("");

  useEffect(() => {
    if (streamingLink?.youtube?.id)
      lookup(streamingLink.youtube.id).then(({ data }) => {
        if (!data.items) return;
        if (!data.items[0]) return;
        data.items[0] && setValue(data.items[0]);
      });
    else
      axios
        .get<youtube_v3.Schema$SearchListResponse>("/api/youtube/search", {
          params: { term, type },
        })
        .then(({ data }) => {
          data.items && setOptions(data.items);
          setRowsPerPage(data.pageInfo?.resultsPerPage || 0);
          setCount(data.pageInfo?.totalResults || 0);
          setValue(undefined);
        });
  }, [term, current, streamingLink?.youtube, lookup, type]);

  return (
    <>
      <CardSelectForm<Video | Channel | SearchResult | undefined>
        value={value}
        options={options}
        largeCard={largeCard}
        smallCard={smallCard}
        gridProps={{
          item: true,
          xs: 6,
          sm: 4,
          md: 4,
        }}
        tablePaginationProps={{
          count,
          rowsPerPage,
          page,
          onPageChange: () => undefined,
        }}
      />
    </>
  );
}

export default YoutubeSelectForm;
