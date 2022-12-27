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
import { createPath } from "../../../helpers/createPath";
import BandLists from "../../../components/elements/list/band";
import ArtistLists from "../../../components/elements/list/artist";
import Typography from "@mui/material/Typography";

const Music: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const path = createPath([
    "music.findUniqueMusic",
    {
      where: { id: router.query.id as string },
      include: {
        user: true,
        band: {
          include: {
            _count: {
              select: {
                bookmarks: true,
                artists: true,
                musics: true,
              },
            },
          },
        },
        artists: {
          include: {
            bands: true,
            _count: {
              select: {
                bookmarks: true,
              },
            },
          },
        },
        composers: {
          include: {
            bands: true,
            _count: {
              select: {
                bookmarks: true,
              },
            },
          },
        },
        lyrists: {
          include: {
            bands: true,
            _count: {
              select: {
                bookmarks: true,
              },
            },
          },
        },
        pulls: { where: { status: "VOTE" }, include: { vote: true }, take: 3 },
        bookmarks: {
          where: {
            user: { id: session.data?.user?.id },
            resourceType: "Music",
          },
        },
      },
    },
  ]);
  const { data } = trpc.useQuery(path);
  if (!data) return <></>;
  const musicData = data as MusicLayoutProps["data"];
  return (
    <MusicLayout data={musicData} activeTab="info">
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
            query: { id: router.query.id as string },
          },
        }}
        editButton={{
          route: {
            pathname: "/scores/[id]/edit",
            query: { id: router.query.id as string },
          },
          hidden: !(
            data.type === "ORIGINAL" &&
            musicData.user?.id === session.data?.user?.id
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
