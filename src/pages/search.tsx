import { useSnackbar } from "notistack";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import React, { useState } from "react";
import { match } from "ts-pattern";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import DefaultSingleColumnLayout from "../components/layouts/single_column/default";
import { trpc } from "../utils/trpc";
import { musicPaginationPath } from "../paths/musics";
import { albumPaginationPath } from "../paths/albums";
import { bandPaginationPath } from "../paths/bands";
import { artistPaginationPath } from "../paths/artists";
import MusicLists from "../components/elements/list/music";
import AlbumLists from "../components/elements/list/album";
import ArtistLists from "../components/elements/list/artist";
import BandLists from "../components/elements/list/band";
import type { NextPage } from "next";

type Type = "music" | "album" | "band" | "artist";
const Search: NextPage = () => {
  const [type, setType] = useState<Type>("music");
  const { enqueueSnackbar } = useSnackbar();
  const session = useSession();
  const router = useRouter();
  const { data } = trpc.useQuery(
    match(type)
      .with("music", () => musicPaginationPath({ router, session }))
      .with("album", () => albumPaginationPath({ router, session }))
      .with("band", () => bandPaginationPath({ router, session }))
      .with("artist", () => artistPaginationPath({ router, session }))
      .exhaustive(),
    {
      onError: () => {
        enqueueSnackbar("music.index error");
      },
    }
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType((event.target as HTMLInputElement).value as Type);
  };
  if (!data) return <></>;
  return (
    <DefaultSingleColumnLayout contained>
      <FormControl>
        <FormLabel>Type</FormLabel>
        <RadioGroup value={type} onChange={handleChange}>
          <FormControlLabel value="music" control={<Radio />} label="music" />
          <FormControlLabel value="album" control={<Radio />} label="album" />
          <FormControlLabel value="band" control={<Radio />} label="band" />
          <FormControlLabel value="artist" control={<Radio />} label="artist" />
        </RadioGroup>
      </FormControl>
      {match(data)
        .with({ type: "music" }, (data) => <MusicLists data={data.data} />)
        .with({ type: "album" }, (data) => <AlbumLists data={data.data} />)
        .with({ type: "artist" }, (data) => <ArtistLists data={data.data} />)
        .with({ type: "band" }, (data) => <BandLists data={data.data} />)
        .exhaustive()}
    </DefaultSingleColumnLayout>
  );
};

export default Search;
