import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAlbums: build.query<GetAlbumsApiResponse, GetAlbumsApiArg>({
      query: () => ({ url: `/albums` }),
    }),
    getMusics: build.query<GetMusicsApiResponse, GetMusicsApiArg>({
      query: () => ({ url: `/musics` }),
    }),
    postMusics: build.mutation<PostMusicsApiResponse, PostMusicsApiArg>({
      query: (queryArg) => ({
        url: `/musics`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getMusicsById: build.query<GetMusicsByIdApiResponse, GetMusicsByIdApiArg>({
      query: (queryArg) => ({ url: `/musics/${queryArg.id}` }),
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
    deleteMusicsById: build.mutation<
      DeleteMusicsByIdApiResponse,
      DeleteMusicsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/musics/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    getMusicsNew: build.query<GetMusicsNewApiResponse, GetMusicsNewApiArg>({
      query: () => ({ url: `/musics/new` }),
    }),
    getMusicsByIdEdit: build.query<
      GetMusicsByIdEditApiResponse,
      GetMusicsByIdEditApiArg
    >({
      query: (queryArg) => ({ url: `/musics/${queryArg.id}/edit` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type GetAlbumsApiResponse = unknown;
export type GetAlbumsApiArg = void;
export type GetMusicsApiResponse = unknown;
export type GetMusicsApiArg = void;
export type PostMusicsApiResponse = unknown;
export type PostMusicsApiArg = {
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
export type GetMusicsByIdApiResponse = unknown;
export type GetMusicsByIdApiArg = {
  id: number;
};
export type PatchMusicsByIdApiResponse = unknown;
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
export type DeleteMusicsByIdApiResponse = unknown;
export type DeleteMusicsByIdApiArg = {
  id: number;
};
export type GetMusicsNewApiResponse = unknown;
export type GetMusicsNewApiArg = void;
export type GetMusicsByIdEditApiResponse = unknown;
export type GetMusicsByIdEditApiArg = {
  id: number;
};
export const {
  useGetAlbumsQuery,
  useGetMusicsQuery,
  usePostMusicsMutation,
  useGetMusicsByIdQuery,
  usePatchMusicsByIdMutation,
  useDeleteMusicsByIdMutation,
  useGetMusicsNewQuery,
  useGetMusicsByIdEditQuery,
} = injectedRtkApi;
