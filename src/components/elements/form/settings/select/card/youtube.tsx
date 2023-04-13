import React from "react";

import type { Link } from "@prisma/client";
import type { youtube_v3 } from "googleapis";

import { trpc } from "../../../../../../utils/trpc";

import CardSelectForm from ".";
import type { CardSelectFormProps } from ".";

export type Video = youtube_v3.Schema$Video;
export type Channel = youtube_v3.Schema$Channel;
export type SearchResult = youtube_v3.Schema$SearchResult;

interface YoutubeSelectFormProps<T>
  extends Pick<
    CardSelectFormProps<T, SearchResult[]>,
    "largeCard" | "smallCard"
  > {
  link: Link | undefined;
  term: string;
  type: "video" | "channel";
  lookup: T | undefined;
}

function YoutubeSelectForm<T extends Video | Channel>({
  link,
  term,
  type,
  largeCard,
  smallCard,
  lookup,
}: YoutubeSelectFormProps<T>) {
  const { data } = trpc.youtube.search.useQuery({ term, type });
  return (
    <CardSelectForm<T | undefined, SearchResult[]>
      gridProps={{ item: true, xs: 6, sm: 4, md: 4 }}
      largeCard={largeCard}
      link={link}
      lookup={lookup}
      search={data?.items || []}
      smallCard={smallCard}
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
