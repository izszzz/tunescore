import type { NextPage } from "next";

import ResourceListItem from "../../../components/elements/list/item/resource";
import ParticipationLists from "../../../components/elements/list/participation";
import ResourceLists from "../../../components/elements/list/resource";
import ResourceShowLayout from "../../../components/layouts/show/resource";

const Artist: NextPage = () => (
  <ResourceShowLayout activeTab="info">
    {({ artist }) => (
      <>
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
      </>
    )}
  </ResourceShowLayout>
);

export default Artist;
