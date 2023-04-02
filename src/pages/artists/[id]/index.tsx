import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import ResourceListItem from "../../../components/elements/list/item/resource";
import ParticipationLists from "../../../components/elements/list/participation";
import ResourceLists from "../../../components/elements/list/resource";
import ArtistLayout from "../../../components/layouts/show/artist";
import type { ArtistLayoutProps } from "../../../components/layouts/show/artist";
import { artistShowQuery } from "../../../paths/artists/[id]";
import { trpc } from "../../../utils/trpc";

const Artist: NextPage = () => {
  const router = useRouter<"/artists/[id]">();
  const query = artistShowQuery({ router, session: useSession().data });
  const { data } = trpc.resource.findUniqueResource.useQuery(query);
  if (!data) return <></>;
  const artistData = data as ArtistLayoutProps["data"],
    { artist } = artistData;
  return (
    <ArtistLayout activeTab="info" data={artistData} query={query}>
      <ResourceLists
        data={
          artist?.bands.map(({ resource, ...band }) => ({
            ...resource,
            band,
          })) ?? []
        }
      />
      <ParticipationLists data={artist?.participations ?? []}>
        {(participation, data) => (
          <ResourceListItem
            data={{ ...data.music.resource, music: data.music }}
          >
            {participation}
          </ResourceListItem>
        )}
      </ParticipationLists>
    </ArtistLayout>
  );
};

export default Artist;
