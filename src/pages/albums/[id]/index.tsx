import type { NextPage } from "next";

import ResourceLists from "../../../components/elements/list/resource";
import ResourceShowLayout from "../../../components/layouts/show/resource";
import { resourceAlbumShowQuery } from "../../../helpers/resource";

const Album: NextPage = () => (
  <ResourceShowLayout activeTab="info" getQuery={resourceAlbumShowQuery}>
    {(data) => (
      <>
        {data?.album?.band && (
          <ResourceLists
            data={[{ ...data?.album.band.resource, band: data?.album.band }]}
          />
        )}

        <ResourceLists
          data={
            data?.album?.musics.map(({ resource, ...music }) => ({
              ...resource,
              music,
            })) ?? []
          }
        />

        <ResourceLists
          data={
            data?.album?.artists.map(({ resource, ...artist }) => ({
              ...resource,
              artist,
            })) ?? []
          }
        />
      </>
    )}
  </ResourceShowLayout>
);

export default Album;
