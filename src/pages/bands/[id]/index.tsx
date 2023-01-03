import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import BandLayout from "../../../components/layouts/show/band";
import { trpc } from "../../../utils/trpc";
import { bandShowPath } from "../../../paths/bands/[id]";
import MusicLists from "../../../components/elements/list/music";
import ArtistLists from "../../../components/elements/list/artist";
import type { NextPage } from "next";
import type {
  BandLayoutProps,
} from "../../../components/layouts/show/band";

const Band: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const path = bandShowPath({ router, session });
  const { data } = trpc.useQuery(path);
  if (!data) return <></>;
  const bandData = data as BandLayoutProps["data"];
  return (
    <BandLayout data={bandData} path={path} activeTab="info">
      <MusicLists data={bandData.musics} />
      <ArtistLists data={bandData.artists} />
    </BandLayout>
  );
};

export default Band;
