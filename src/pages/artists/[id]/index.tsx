import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import BandLists from "../../../components/elements/list/band";
import MusicListItem from "../../../components/elements/list/item/music";
import ParticipationLists from "../../../components/elements/list/participation";
import ArtistLayout from "../../../components/layouts/show/artist";
import type { ArtistLayoutProps } from "../../../components/layouts/show/artist";
import { artistShowQuery } from "../../../paths/artists/[id]";
import { trpc } from "../../../utils/trpc";

const Artist: NextPage = () => {
  const router = useRouter();
  const query = artistShowQuery({ router, session: useSession().data });
  const { data } = trpc.artist.findUniqueArtist.useQuery(query);
  if (!data) return <></>;
  const artistData = data as ArtistLayoutProps["data"];
  return (
    <ArtistLayout data={artistData} query={query} activeTab="info">
      <BandLists data={artistData.bands} />
      <ParticipationLists data={artistData.participations}>
        {(data) => <MusicListItem data={data.music} />}
      </ParticipationLists>
    </ArtistLayout>
  );
};

export default Artist;
