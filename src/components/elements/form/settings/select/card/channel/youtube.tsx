import React, { useEffect, useState } from "react";
import Script from "next/script";
import CardSelectForm from "..";
import ChannelYoutubeCard from "../../../../../card/channel/youtube";
import type { StreamingLink } from "@prisma/client";

interface MusicYoutubeSelectFormProps {
  streamingLink: StreamingLink | null | undefined;
  term: string;
  onSelect: (data: gapi.client.youtube.SearchResult | undefined) => void;
  onRemove: () => void;
}

const ChannelYoutubeSelectForm = ({
  streamingLink,
  term,
  onSelect,
  onRemove,
}: MusicYoutubeSelectFormProps) => {
  const [options, setOptions] = useState<gapi.client.youtube.SearchResult[]>(
    []
  );
  const [value, setValue] = useState<gapi.client.youtube.Channel>();
  const [loading, setLoading] = useState(true);
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [current, setCurrent] = useState("");

  useEffect(() => {
    if (!loading)
      if (streamingLink?.youtube?.id)
        gapi.client.youtube.channels
          .list({ id: streamingLink?.youtube.id, part: "snippet" })
          .then((data) => data.result.items && setValue(data.result.items[0]));
      else
        gapi.client.youtube.search
          .list({
            q: term,
            part: "snippet",
            type: "channel",
            maxResults: 6,
            pageToken: current,
          })
          .then((data) => {
            data.result.items && setOptions(data.result.items);
            setRowsPerPage(data.result.pageInfo?.resultsPerPage || 0);
            setCount(data.result.pageInfo?.totalResults || 0);
            setNext(data.result?.nextPageToken || "");
            setPrev(data.result?.prevPageToken || "");
            setValue(undefined);
          })
          .catch((error) => {
            console.log(error);
          });
  }, [term, loading, current, streamingLink?.youtube]);

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
      <CardSelectForm
        value={value}
        options={options}
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
        nextIconButtonProps={{
          onClick: () => {
            setCurrent(next);
            setPage((p) => ++p);
          },
        }}
        backIconButtonProps={{
          onClick: () => {
            setCurrent(prev);
            setPage((p) => --p);
          },
        }}
      />
    </>
  );
};

export default ChannelYoutubeSelectForm;
