import { useRouter } from "next/router";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";
import { Link } from "@mui/material";
import setLocale from "../../../helpers/setLocale";
import ArtistLayout from "../../../components/layouts/show/artist";
import { trpc } from "../../../utils/trpc";
import type { Prisma } from "@prisma/client";
import type { NextPage } from "next";
import { artistShowPath } from "../../../paths/artists/[id]";
import { getRouterId } from "../../../helpers/router";
import { useSession } from "next-auth/react";

const Artist: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const path = artistShowPath({ router, session });
  const { data } = trpc.useQuery(path);
  if (!data) return <></>;
  const artistData = data as Prisma.ArtistGetPayload<{
    include: {
      bands: true;
      bookmarks: true;
      tagMaps: { include: { tag: true } };
      composedMusics: {
        include: { composers: true; lyrists: true; band: true };
      };
      writtenMusics: {
        include: { composers: true; lyrists: true; band: true };
      };
      musics: {
        include: { composers: true; lyrists: true; band: true };
      };
    };
  }>;
  return (
    <ArtistLayout data={artistData} path={path} activeTab="info">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>band</TableCell>
              <TableCell>
                {artistData.bands.map(({ id, name }) => (
                  <Chip
                    key={id}
                    label={setLocale(name, router)}
                    onClick={() =>
                      router.push({ pathname: "/bands/[id]", query: { id } })
                    }
                  />
                ))}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <p>composedMusics</p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>title</TableCell>
              <TableCell>band</TableCell>
              <TableCell>composer</TableCell>
              <TableCell>lyrist</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {artistData.composedMusics.map((music) => (
              <TableRow key={music.id}>
                <TableCell>
                  <Link
                    onClick={() =>
                      router.push({
                        pathname: "/musics/[id]",
                        query: { id: music.id },
                      })
                    }
                  >
                    {setLocale(music.title, router)}
                  </Link>
                </TableCell>
                <TableCell>
                  {music.band && (
                    <Chip
                      label={setLocale(music.band.name, router)}
                      onClick={() =>
                        music.band &&
                        router.push({
                          pathname: "/bands/[id]",
                          query: { id: music.band.id },
                        })
                      }
                    />
                  )}
                </TableCell>
                <TableCell>
                  {" "}
                  {music.composers.map(({ id, name }) => (
                    <Chip
                      key={id}
                      label={setLocale(name, router)}
                      onClick={() =>
                        router.push({
                          pathname: "/artists/[id]",
                          query: { id },
                        })
                      }
                    />
                  ))}
                </TableCell>
                <TableCell>
                  {" "}
                  {music.lyrists.map(({ id, name }) => (
                    <Chip
                      key={id}
                      label={setLocale(name, router)}
                      onClick={() =>
                        router.push({
                          pathname: "/artists/[id]",
                          query: { id },
                        })
                      }
                    />
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p>writtenMusics</p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>title</TableCell>
              <TableCell>band</TableCell>
              <TableCell>composer</TableCell>
              <TableCell>lyrist</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {artistData.composedMusics.map((music) => (
              <TableRow key={music.id}>
                <TableCell>
                  <Link
                    onClick={() =>
                      router.push({
                        pathname: "/musics/[id]",
                        query: { id: music.id },
                      })
                    }
                  >
                    {setLocale(music.title, router)}
                  </Link>
                </TableCell>
                <TableCell>
                  {music.band && (
                    <Chip
                      label={setLocale(music.band.name, router)}
                      onClick={() =>
                        music.band &&
                        router.push({
                          pathname: "/bands/[id]",
                          query: { id: music.band.id },
                        })
                      }
                    />
                  )}
                </TableCell>
                <TableCell>
                  {" "}
                  {music.composers.map(({ id, name }) => (
                    <Chip
                      key={id}
                      label={setLocale(name, router)}
                      onClick={() =>
                        router.push({
                          pathname: "/artists/[id]",
                          query: { id },
                        })
                      }
                    />
                  ))}
                </TableCell>
                <TableCell>
                  {" "}
                  {music.lyrists.map(({ id, name }) => (
                    <Chip
                      key={id}
                      label={setLocale(name, router)}
                      onClick={() =>
                        router.push({
                          pathname: "/artists/[id]",
                          query: { id },
                        })
                      }
                    />
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      musics
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>title</TableCell>
              <TableCell>band</TableCell>
              <TableCell>composer</TableCell>
              <TableCell>lyrist</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {artistData.musics.map((music) => (
              <TableRow key={music.id}>
                <TableCell>
                  <Link
                    onClick={() =>
                      router.push({
                        pathname: "/musics/[id]",
                        query: { id: music.id },
                      })
                    }
                  >
                    {setLocale(music.title, router)}
                  </Link>
                </TableCell>
                <TableCell>
                  {music.band && (
                    <Chip
                      label={setLocale(music.band.name, router)}
                      onClick={() =>
                        music.band &&
                        router.push({
                          pathname: "/bands/[id]",
                          query: { id: music.band.id },
                        })
                      }
                    />
                  )}
                </TableCell>
                <TableCell>
                  {" "}
                  {music.composers.map(({ id, name }) => (
                    <Chip
                      key={id}
                      label={setLocale(name, router)}
                      onClick={() =>
                        router.push({
                          pathname: "/artists/[id]",
                          query: { id },
                        })
                      }
                    />
                  ))}
                </TableCell>
                <TableCell>
                  {" "}
                  {music.lyrists.map(({ id, name }) => (
                    <Chip
                      key={id}
                      label={setLocale(name, router)}
                      onClick={() =>
                        router.push({
                          pathname: "/artists/[id]",
                          query: { id },
                        })
                      }
                    />
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ArtistLayout>
  );
};

export default Artist;
