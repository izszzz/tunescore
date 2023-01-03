import { useRouter } from "next/router";
import BandLayout from "../../../components/layouts/show/band";
import { trpc } from "../../../utils/trpc";
import type { Prisma } from "@prisma/client";
import type { NextPage } from "next";
import { bandShowPath } from "../../../paths/bands/[id]";
import { useSession } from "next-auth/react";
import MusicLists from "../../../components/elements/list/music";
import ArtistLists from "../../../components/elements/list/artist";

const Band: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const path = bandShowPath({ router, session });
  const { data } = trpc.useQuery(path);
  if (!data) return <></>;
  const bandData = data as Prisma.BandGetPayload<{
    include: {
      artists: {
        include: {
          bands: true;
          _count: {
            select: {
              bookmarks: true;
            };
          };
        };
      };
      musics: {
        include: {
          band: true;
          user: true;
          participations: {
            include: { artist: true; roleMap: { include: { role: true } } };
          };
          bookmarks: true;
          _count: {
            select: {
              bookmarks: true;
            };
          };
        };
      };
      tagMaps: { include: { tag: true } };
      bookmarks: true;
    };
  }>;
  return (
    <BandLayout data={bandData} path={path} activeTab="info">
      <MusicLists data={bandData.musics} />
      <ArtistLists data={bandData.artists} />
    </BandLayout>
  );
};

export default Band;
