import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import YouTube from "react-youtube";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import ArtistChip from "../../../components/elements/chip/artist";
import BandChip from "../../../components/elements/chip/band";
import MusicLayout from "../../../components/layouts/show/music";
import ItunesButton from "../../../components/elements/button/itunes";
import setLocale from "../../../helpers/setLocale";
import { trpc } from "../../../utils/trpc";
import ScoreButtonGroup from "../../../components/elements/button/group/score";
import VoteAlert from "../../../components/elements/alert/vote";
import type {
  MusicLayoutProps,
} from "../../../components/layouts/show/music";
import type { NextPage } from "next";
const Music: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const { data } = trpc.useQuery([
    "music.findUniqueMusic",
    {
      where: { id: router.query.id as string },
      include: {
        user: true,
        band: true,
        artists: true,
        composers: true,
        lyrists: true,
        pulls: { where: { status: "VOTE" }, include: { vote: true }, take: 3 },
        bookmarks: { where: { id: session.data?.user?.id } },
      },
    },
  ]);
  if (!data) return <></>;
  const musicData = data as MusicLayoutProps["data"];
  return (
    <MusicLayout data={musicData} activeTab="info">
      {data.link?.streaming?.itunes?.id && (
        <ItunesButton href={data.link?.streaming?.itunes.id} />
      )}
      {data.link?.streaming?.youtube?.id && (
        <YouTube
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
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Composer</TableCell>
              <TableCell>
                {musicData.composers.map(({ id, name }) => (
                  <ArtistChip
                    key={id}
                    label={setLocale(name, router)}
                    onClick={() =>
                      router.push({ pathname: "/artists/[id]", query: { id } })
                    }
                  />
                ))}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Lyrist</TableCell>
              <TableCell>
                {musicData.lyrists.map(({ id, name }) => (
                  <ArtistChip
                    key={id}
                    label={setLocale(name, router)}
                    onClick={() =>
                      router.push({ pathname: "/artists/[id]", query: { id } })
                    }
                  />
                ))}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Band</TableCell>
              <TableCell>
                {musicData.band && (
                  <BandChip
                    label={setLocale(musicData.band.name, router)}
                    onClick={() =>
                      musicData.band &&
                      router.push({
                        pathname: "/bands/[id]",
                        query: { id: musicData.band.id },
                      })
                    }
                  />
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {musicData.artists.map(({ id, name }) => (
              <TableRow key={id}>
                <TableCell />
                <TableCell>
                  <ArtistChip
                    label={setLocale(name, router)}
                    onClick={() =>
                      router.push({ pathname: "/artists/[id]", query: { id } })
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MusicLayout>
  );
};

export default Music;
