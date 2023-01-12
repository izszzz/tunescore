import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { artistShowPath } from "../../../paths/artists/[id]";
import ArtistLayout from "../../../components/layouts/show/artist";
import { trpc } from "../../../utils/trpc";
import BandLists from "../../../components/elements/list/band";
import ParticipationLists from "../../../components/elements/list/participation";
import MusicListItem from "../../../components/elements/list/item/music";
import type { NextPage } from "next";
import type { ArtistLayoutProps } from "../../../components/layouts/show/artist";

const Artist: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const path = artistShowPath({ router, session });
  const { data } = trpc.useQuery(undefined, path);
  if (!data) return <></>;
  const artistData = data as ArtistLayoutProps["data"];
  return (
    <ArtistLayout data={artistData} path={path} activeTab="info">
      <BandLists data={artistData.bands} />
      <ParticipationLists data={artistData.participations}>
        {(data) => <MusicListItem data={data.music} />}
      </ParticipationLists>
    </ArtistLayout>
  );
};

export default Artist;
