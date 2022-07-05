import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postBands: build.mutation<PostBandsApiResponse, PostBandsApiArg>({
      query: (queryArg) => ({
        url: `/bands`,
        method: "POST",
        params: { band: queryArg.band },
      }),
    }),
    postAlbums: build.mutation<PostAlbumsApiResponse, PostAlbumsApiArg>({
      query: (queryArg) => ({
        url: `/albums`,
        method: "POST",
        params: { album: queryArg.album },
      }),
    }),
    postArtists: build.mutation<PostArtistsApiResponse, PostArtistsApiArg>({
      query: (queryArg) => ({
        url: `/artists`,
        method: "POST",
        params: { artist: queryArg.artist },
      }),
    }),
    postMusics: build.mutation<PostMusicsApiResponse, PostMusicsApiArg>({
      query: (queryArg) => ({
        url: `/musics`,
        method: "POST",
        params: { music: queryArg.music },
      }),
    }),
    patchMusicsById: build.mutation<
      PatchMusicsByIdApiResponse,
      PatchMusicsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/musics/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type PostBandsApiResponse = /** status 201 creates a new Band */ {
  id?: number;
  name?: string;
};
export type PostBandsApiArg = {
  band?: {
    bookmarks_count?: string;
    name?: string;
  };
};
export type PostAlbumsApiResponse = /** status 201 creates a new Album */ {
  id?: number;
  title?: string;
};
export type PostAlbumsApiArg = {
  album?: {
    bookmarks_count?: string;
    title?: string;
  };
};
export type PostArtistsApiResponse = /** status 201 creates a new Artist */ {
  id?: number;
  name?: string;
};
export type PostArtistsApiArg = {
  artist?: {
    bookmarks_count?: string;
    name?: string;
  };
};
export type PostMusicsApiResponse = /** status 201 creates a new Music */ {
  id?: number;
  title?: string;
  user?: any | null;
};
export type PostMusicsApiArg = {
  music?: {
    band?: string;
    bookmarks_count?: string;
    score?: string;
    title?: string;
    user?: string;
  };
};
export type PatchMusicsByIdApiResponse = /** status 200 creates a new Music */ {
  id?: number;
  title?: string;
  user?: any | null;
};
export type PatchMusicsByIdApiArg = {
  id: number;
  body: {
    music?: {
      user?: any | null;
      band?: any | null;
      title?: string;
      bookmarks_count?: string;
      score?: string;
    };
  };
};
export const {
  usePostBandsMutation,
  usePostAlbumsMutation,
  usePostArtistsMutation,
  usePostMusicsMutation,
  usePatchMusicsByIdMutation,
} = injectedRtkApi;
