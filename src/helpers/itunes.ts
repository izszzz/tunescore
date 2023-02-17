import axios from "axios-jsonp-pro";

const itunes = axios.create({
  baseURL: "https://itunes.apple.com",
});

type ItunesArtwork = Record<
  "artworkUrl30" | "artworkUrl60" | "artworkUrl100",
  string
>;
export interface ItunesMusic extends ItunesArtwork {
  artistName: string;
  artistViewUrl: string;
  collectionArtistId: number;
  collectionArtistViewUrl: string;
  collectionCensoredName: string;
  trackId: number;
  trackViewUrl: string;
  trackCensoredName: string;
  previewUrl: string;
  viewURL: string;
  releaseDate: string;
}
export interface ItunesArtist {
  amgArtistId: number;
  artistId: number;
  artistLinkUrl: string;
  artistName: string;
  artistType: "Artist";
  primaryGenreId: 21;
  wrapperType: string;
}
export interface ItunesAlbum extends ItunesArtwork {
  amgArtistId: number;
  artistId: number;
  artistName: string;
  artistViewUrl: string;
  collectionCensoredName: string;
  collectionExplictness: string;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  collectionType: "Album";
  collectionViewUrl: string;
  copyright: string;
  country: "USA";
  currency: "USD";
  primaryGenreName: "Pop";
  releaseDate: string;
  trackCount: number;
  wrapperType: "collection";
}
export interface ItunesResponse<T> {
  resultCount: number;
  results: T[];
}
export interface BaseParams {
  entity: "musicArtist" | "album" | "song";
}
export interface BaseSearchParams {
  term: string;
  limit: number;
  offset: number;
}
export interface BaseLookupParams {
  id: number | string;
}
export interface LookupParams extends BaseParams, BaseLookupParams {}
export interface SearchParams extends BaseParams, BaseSearchParams {}
export class Itunes {
  static lookup<T>(params: LookupParams): Promise<ItunesResponse<T>> {
    return itunes.jsonp<null, ItunesResponse<T>>("/lookup", {
      params,
    });
  }
  lookupArtist = ({ id }: BaseLookupParams) =>
    Itunes.lookup<ItunesArtist>({ id, entity: "musicArtist" });
  lookupAlbum = ({ id }: BaseLookupParams) =>
    Itunes.lookup<ItunesAlbum>({ id, entity: "album" });
  lookupMusic = ({ id }: BaseLookupParams) =>
    Itunes.lookup<ItunesMusic>({ id, entity: "song" });

  static search<T>(params: SearchParams) {
    return itunes.jsonp<null, ItunesResponse<T>>("/search", {
      params,
    });
  }
  searchMusics = (params: BaseSearchParams) =>
    Itunes.search<ItunesMusic>({ ...params, entity: "song" });
  searchArtists = (params: BaseSearchParams) =>
    Itunes.search<ItunesArtist>({ ...params, entity: "musicArtist" });
  searchAlbums = (params: BaseSearchParams) =>
    Itunes.search<ItunesAlbum>({ ...params, entity: "album" });
}

export const convertAffiliateLink = (url: string) => {
  const parsedUrl = new URL(url);
  parsedUrl.hostname = "geo.music.apple.com";
  parsedUrl.searchParams.set("at", "1000l38Sn");
  const path = parsedUrl.pathname.split("/");
  parsedUrl.searchParams.set("ct", path[1] + "_" + path[2]);
  parsedUrl.searchParams.set("app", path[1] + "_" + path[2]);
  return parsedUrl;
};
