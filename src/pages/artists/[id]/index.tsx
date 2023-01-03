import { useRouter } from "next/router";
import ArtistLayout, {
  ArtistLayoutProps,
} from "../../../components/layouts/show/artist";
import { trpc } from "../../../utils/trpc";
import type { NextPage } from "next";
import { artistShowPath } from "../../../paths/artists/[id]";
import { useSession } from "next-auth/react";
import MusicLists from "../../../components/elements/list/music";
import BandLists from "../../../components/elements/list/band";
import ParticipationLists from "../../../components/elements/list/participation";
import MusicListItem from "../../../components/elements/list/item/music";

const Artist: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const path = artistShowPath({ router, session });
  const { data } = trpc.useQuery(path);
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
