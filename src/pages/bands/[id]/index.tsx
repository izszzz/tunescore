import type { NextPage } from "next";

import ResourceLists from "../../../components/elements/list/resource";
import ResourceShowLayout from "../../../components/layouts/show/resource";

const Band: NextPage = () => (
  <ResourceShowLayout activeTab="info">
    {({ band }) => (
      <>
        <ResourceLists
          data={
            band?.musics.map(({ resource, ...music }) => ({
              ...resource,
              music,
            })) ?? []
          }
        />
        <ResourceLists
          data={
            band?.artists.map(({ resource, ...artist }) => ({
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
