import type { NextPage } from "next";
import { useRouter } from "next/router";
import YouTube from "react-youtube";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArtistChip from "../../../components/elements/chip/artist";
import BandChip from "../../../components/elements/chip/band";
import MusicLayout from "../../../components/layouts/show/music";
import ItunesButton from "../../../components/elements/button/itunes";
import setLocale from "../../../utils/setLocale";
import { trpc } from "../../../utils/trpc";
const Music: NextPage = () => {
  const router = useRouter();
  const { data } = trpc.useQuery([
    "music.show",
    { where: { id: router.query.id as string } },
  ]);
  if (!data) return <></>;
  return (
    <MusicLayout data={data} bookmarked={data.bookmarked} activeTab="info">
      {data.link?.streaming?.itunes && (
        <ItunesButton href={data.link?.streaming?.itunes} />
      )}
      {data.link?.streaming?.youtube && (
        <YouTube
          videoId={data.link?.streaming?.youtube}
          opts={{ width: "100%", height: "100%" }}
        />
      )}
      <Button
        variant="contained"
        onClick={() =>
          router.push({
            pathname: "/scores/[id]",
            query: { id: router.query.id as string },
          })
        }
        fullWidth
      >
        Watch Score
      </Button>
      <Button
        variant="contained"
        onClick={() =>
          router.push({
            pathname: "/scores/[id]/edit",
            query: { id: router.query.id as string },
          })
        }
        fullWidth
      >
        Edit Score
      </Button>
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
                {data.composers.map(({ id, name }) => (
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
                {data.lyrists.map(({ id, name }) => (
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
                {data.band && (
                  <BandChip
                    label={setLocale(data.band.name, router)}
                    onClick={() =>
                      data.band &&
                      router.push({
                        pathname: "/bands/[id]",
                        query: { id: data.band.id },
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
            {data.artists.map(({ id, name }) => (
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
