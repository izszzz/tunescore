import axios from "axios-jsonp-pro"

const itunes = axios.create({
  baseURL: "https://itunes.apple.com",
})

type ItunesArtwork = Record<
  "artworkUrl30" | "artworkUrl60" | "artworkUrl100",
  string
>
export interface ItunesMusic extends ItunesArtwork {
  artistName: string
  artistViewUrl: string
  collectionArtistId: number
  collectionArtistViewUrl: string
  collectionCensoredName: string
  trackId: number
  trackViewUrl: string
  trackCensoredName: string
  previewUrl: string
  viewURL: string
  releaseDate: string
}
export interface ItunesArtist {
  amgArtistId: number
  artistId: number
  artistLinkUrl: string
  artistName: string
  artistType: "Artist"
  primaryGenreId: 21
  wrapperType: string
}
export interface ItunesAlbum extends ItunesArtwork {
  amgArtistId: number
  artistId: number
  artistName: string
  artistViewUrl: string
  collectionCensoredName: string
  collectionExplictness: string
  collectionId: number
  collectionName: string
  collectionPrice: number
  collectionType: "Album"
  collectionViewUrl: string
  copyright: string
  country: "USA"
  currency: "USD"
  primaryGenreName: "Pop"
  releaseDate: string
  trackCount: number
  wrapperType: "collection"
}
export interface ItunesResponse<T> {
  resultCount: number
  results: T[]
}

export interface BaseParams {
  entity: "musicArtist" | "album" | "song"
}

export interface BaseSearchParams {
  term: string
  limit: number
  offset: number
}

export interface BaseLookupParams {
  id: number | string
}

export interface LookupParams extends BaseParams, BaseLookupParams {}

export interface SearchParams extends BaseParams, BaseSearchParams {}

export function lookupItunes<T>(
  params: LookupParams
): Promise<ItunesResponse<T>> {
  return itunes.jsonp<null, ItunesResponse<T>>("/lookup", {
    params,
  })
}

export const lookupItunesArtist = ({id}: BaseLookupParams) =>
  lookupItunes<ItunesArtist>({id, entity: "musicArtist"})

export const lookupItunesAlbum = ({id}: BaseLookupParams) =>
  lookupItunes<ItunesAlbum>({id, entity: "album"})

export const lookupItunesMusic = ({id}: BaseLookupParams) =>
  lookupItunes<ItunesMusic>({id, entity: "song"})

export function searchItunes<T>(params: SearchParams) {
  return itunes.jsonp<null, ItunesResponse<T>>("/search", {
    params,
  })
}

export const searchItunesMusics = (params: BaseSearchParams) =>
  searchItunes<ItunesMusic>({...params, entity: "song"})

export const searchItunesArtists = (params: BaseSearchParams) =>
  searchItunes<ItunesArtist>({...params, entity: "musicArtist"})

export const searchItunesAlbums = (params: BaseSearchParams) =>
  searchItunes<ItunesAlbum>({...params, entity: "album"})
