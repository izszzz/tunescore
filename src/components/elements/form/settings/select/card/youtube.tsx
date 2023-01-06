import React, { useEffect, useState } from "react";
import Script from "next/script";
import CardSelectForm from ".";
import type { CardSelectFormProps } from ".";
import type { StreamingLink } from "@prisma/client";

interface YoutubeSelectFormProps
  extends Pick<
    CardSelectFormProps<
      | gapi.client.youtube.Video
      | gapi.client.youtube.Channel
      | gapi.client.youtube.SearchResult
      | undefined
    >,
    "largeCard" | "smallCard"
  > {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  type: "video" | "channel";
  search: typeof gapi.client.youtube.search.list;
  lookup:
    | typeof gapi.client.youtube.videos.list
    | typeof gapi.client.youtube.channels.list;
}

function YoutubeSelectForm({
  streamingLink,
  term,
  type,
  largeCard,
  smallCard,
  search,
  lookup,
}: YoutubeSelectFormProps) {
  const [options, setOptions] = useState<gapi.client.youtube.SearchResult[]>(
    []
  );
  const [value, setValue] = useState<
    gapi.client.youtube.Video | gapi.client.youtube.Channel | undefined
  >();
  const [loading, setLoading] = useState(true);
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [count, setCount] = useState(0);
  const [page] = useState(0);
  const [current] = useState("");

  useEffect(() => {
    if (!loading)
      if (streamingLink?.youtube?.id)
        lookup({ id: streamingLink?.youtube.id, part: "snippet" }).then(
          (data) => {
            if (!data.result.items) return;
            if (!data.result.items[0]) return;
            data.result.items[0] && setValue(data.result.items[0]);
          }
        );
      else
        search({
          q: term,
          part: "snippet",
          type,
          videoCategoryId: "10",
          maxResults: 6,
          pageToken: current,
        })
          .then((data) => {
            data.result.items && setOptions(data.result.items);
            setRowsPerPage(data.result.pageInfo?.resultsPerPage || 0);
            setCount(data.result.pageInfo?.totalResults || 0);
            setValue(undefined);
          })
          .catch((error) => {
            console.log(error);
          });
  }, [term, loading, current, streamingLink?.youtube, lookup, search, type]);

  const handleLoad = () => {
    gapi.load("client", () =>
      gapi.client
        .init({ apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY })
        .then(() =>
          gapi.client
            .load("https://youtube.googleapis.com/$discovery/rest?version=v3")
            .then(() => setLoading(false))
        )
    );
  };

  return (
    <>
      <Script src="https://apis.google.com/js/api.js" onReady={handleLoad} />
      <CardSelectForm<
        | gapi.client.youtube.Video
        | gapi.client.youtube.Channel
        | gapi.client.youtube.SearchResult
        | undefined
      >
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
