import type { NextPage } from "next";

import ResourceLists from "../../../components/elements/list/resource";
import ResourceShowLayout from "../../../components/layouts/show/resource";
import { resourceMusicShowQuery } from "../../../helpers/resource";

const Album: NextPage = () => (
  <ResourceShowLayout activeTab="info" getQuery={resourceMusicShowQuery}>
    {({ album }) => (
      <>
        {album?.band && (
          <ResourceLists
            data={[{ ...album.band.resource, band: album.band }]}
          />
        )}

        <ResourceLists
          data={
            album?.musics.map(({ resource, ...music }) => ({
              ...resource,
              music,
            })) ?? []
          }
        />

        <ResourceLists
          data={
            album?.artists.map(({ resource, ...artist }) => ({
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
