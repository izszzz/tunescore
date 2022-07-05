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
export const { usePostBandsMutation } = injectedRtkApi;
