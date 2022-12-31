import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import YouTube from "react-youtube";
import Box from "@mui/material/Box";
import MusicLayout from "../../../components/layouts/show/music";
import ItunesButton from "../../../components/elements/button/itunes";
import { trpc } from "../../../utils/trpc";
import ScoreButtonGroup from "../../../components/elements/button/group/score";
import VoteAlert from "../../../components/elements/alert/vote";
import type { MusicLayoutProps } from "../../../components/layouts/show/music";
import type { NextPage } from "next";
import BandLists from "../../../components/elements/list/band";
import ArtistLists from "../../../components/elements/list/artist";
import Typography from "@mui/material/Typography";
import { musicShowPath } from "../../../paths/musics/[id]";
import { getRouterId } from "../../../helpers/router";
import { getCurrentUserId } from "../../../helpers/user";

const Music: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const id = getRouterId(router);
  const path = musicShowPath({ router, session });
  const { data } = trpc.useQuery(path);
  if (!data) return <></>;
  const musicData = data as MusicLayoutProps["data"];
  return (
    <MusicLayout data={musicData} path={path} activeTab="info">
      {data.link?.streaming?.itunes?.id && (
        <ItunesButton href={data.link?.streaming?.itunes.id} />
      )}
      {data.link?.streaming?.youtube?.id && (
        <YouTube
          className="youtubeContainer"
          videoId={data.link?.streaming?.youtube.id}
          opts={{ width: "100%", height: "100%" }}
        />
      )}
      <ScoreButtonGroup
        watchButton={{
          route: {
            pathname: "/scores/[id]",
            query: { id },
          },
        }}
        editButton={{
          route: {
            pathname: "/scores/[id]/edit",
            query: { id },
          },
          hidden: !(
            data.type === "ORIGINAL" &&
            musicData.user?.id === getCurrentUserId(session)
          ),
        }}
      />

      {musicData.pulls.map((pull) => (
        <Box key={pull.id} mb={2}>
          <VoteAlert
            data={pull}
            goodIconButtonProps={{ disabled: true }}
            badIconButtonProps={{ disabled: true }}
          />
        </Box>
      ))}

      <Typography variant="h6">Band</Typography>
      {musicData.band && <BandLists data={[musicData.band]} />}

      <Typography variant="h6">Composers</Typography>
      <ArtistLists data={musicData.composers} />

      <Typography variant="h6">Lyrists</Typography>
      <ArtistLists data={musicData.lyrists} />

      <Typography variant="h6">Artists</Typography>
      <ArtistLists data={musicData.artists} />
    </MusicLayout>
  );
};

export default Music;
