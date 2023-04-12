import { defineArtistFactory } from "../generated/fabbrica";

import { defineResourceArtistFactory } from "./resource";

export const ArtistFactory = defineArtistFactory({
    defaultData: {
      resource: defineResourceArtistFactory(),
    },
  }),
  ResourceArtistFactory = defineResourceArtistFactory({
    artist: { create: {} },
  });
