import type { NextPage } from "next";
import { useRouter } from "next/router";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import BandLayout from "../../../components/layouts/show/band";
import setLocale from "../../../utils/setLocale";
import { trpc } from "../../../utils/trpc";

const Band: NextPage = () => {
  const router = useRouter();
  const { data } = trpc.useQuery([
    "band.show",
    { where: { id: router.query.id as string } },
  ]);
  if (!data) return <></>;
  return (
    <BandLayout data={data} bookmarked={data.bookmarked} activeTab="info">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>music</TableCell>
              <TableCell>composer</TableCell>
              <TableCell>lyrist</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.musics.map((music) => (
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.artists.map(({ id, name }) => (
              <TableRow key={id}>
                <TableCell>
                  <Link
                    onClick={() =>
                      router.push({ pathname: "/artists/[id]", query: { id } })
                    }
                  >
                    {setLocale(name, router)}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BandLayout>
  );
};

export default Band;
