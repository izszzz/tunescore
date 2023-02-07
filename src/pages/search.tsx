import React, { useState } from "react";

import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { match } from "ts-pattern";

import AlbumLists from "../components/elements/list/album";
import ArtistLists from "../components/elements/list/artist";
import BandLists from "../components/elements/list/band";
import MusicLists from "../components/elements/list/music";
import DefaultSingleColumnLayout from "../components/layouts/single_column/default";
import { albumPaginationQuery } from "../paths/albums";
import { artistPaginationPath } from "../paths/artists";
import { bandPaginationQuery } from "../paths/bands";
import { musicPaginationQuery } from "../paths/musics";
import { trpc } from "../utils/trpc";

type Type = "music" | "album" | "band" | "artist";
const Search: NextPage = () => {
  const [type, setType] = useState<Type>("music");
  const { data: session } = useSession();
  const router = useRouter();
  const { data } = match(type)
    .with("music", () =>
      trpc.pagination.music.useQuery(musicPaginationQuery({ router, session }))
    )
    .with("album", () =>
      trpc.pagination.album.useQuery(albumPaginationQuery({ router, session }))
    )
    .with("band", () =>
      trpc.pagination.band.useQuery(bandPaginationQuery({ router, session }))
    )
    .with("artist", () =>
      trpc.pagination.artist.useQuery(artistPaginationPath({ router, session }))
    )
    .exhaustive();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType((event.target as HTMLInputElement).value as Type);
  };
  if (!data) return <></>;
  return (
    <DefaultSingleColumnLayout contained>
      <>
        <FormControl>
          <FormLabel>Type</FormLabel>
          <RadioGroup value={type} onChange={handleChange}>
            <FormControlLabel value="music" control={<Radio />} label="music" />
            <FormControlLabel value="album" control={<Radio />} label="album" />
            <FormControlLabel value="band" control={<Radio />} label="band" />
            <FormControlLabel
              value="artist"
              control={<Radio />}
              label="artist"
            />
          </RadioGroup>
        </FormControl>
        {match(data)
          .with({ type: "music" }, (data) => <MusicLists data={data.data} />)
          .with({ type: "album" }, (data) => <AlbumLists data={data.data} />)
          .with({ type: "artist" }, (data) => <ArtistLists data={data.data} />)
          .with({ type: "band" }, (data) => <BandLists data={data.data} />)
          .exhaustive()}
      </>
    </DefaultSingleColumnLayout>
  );
};

export default Search;
