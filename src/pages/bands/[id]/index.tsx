import type { NextPage } from "next";

import ResourceLists from "../../../components/elements/list/resource";
import ResourceShowLayout from "../../../components/layouts/show/resource";
import { resourceBandShowQuery } from "../../../helpers/resource";

const Band: NextPage = () => (
  <ResourceShowLayout activeTab="info" getQuery={resourceBandShowQuery}>
    {(data) => (
      <>
        <ResourceLists
          data={
            data?.band?.musics.map(({ resource, ...music }) => ({
              ...resource,
              music,
            })) ?? []
          }
        />
        <ResourceLists
          data={
            data?.band?.artists.map(({ resource, ...artist }) => ({
              ...resource,
              artist,
            })) ?? []
          }
        />
      </>
    )}
  </ResourceShowLayout>
);

export default Band;
