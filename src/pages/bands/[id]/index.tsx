import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import BandLayout from "../../../components/layouts/show/band";
import { trpc } from "../../../utils/trpc";
import { bandShowPath } from "../../../paths/bands/[id]";
import MusicLists from "../../../components/elements/list/music";
import ArtistLists from "../../../components/elements/list/artist";
import AppleButton from "../../../components/elements/button/link/itunes";
import YoutubeButton from "../../../components/elements/button/link/youtube";
import type { NextPage } from "next";
import type { BandLayoutProps } from "../../../components/layouts/show/band";

const Band: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const path = bandShowPath({ router, session });
  const { data } = trpc.useQuery(path);
  if (!data) return <></>;
  const bandData = data as BandLayoutProps["data"];
  return (
    <BandLayout data={bandData} path={path} activeTab="info">
      {data.link?.streaming?.itunes?.id && (
        <AppleButton href={data.link?.streaming?.itunes.id} />
      )}
      {data.link?.streaming?.youtube?.id && (
        <YoutubeButton href={data.link?.streaming?.youtube.id} />
      )}
      <MusicLists data={bandData.musics} />
      <ArtistLists data={bandData.artists} />
    </BandLayout>
  );
};

export default Band;
