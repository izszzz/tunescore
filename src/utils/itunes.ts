import axios from "axios-jsonp-pro"
import {UseQueryOptions} from "react-query"
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

export const limit = 12
const itunes = axios.create({
  baseURL: "https://itunes.apple.com",
})
type TermType = string | undefined
export interface LookupQueryFnArgs<T> {
  id: number | string | null | undefined
  options?: UseQueryOptions<T[]>
}

export const lookupItunesArtist = ({
  id,
}: LookupQueryFnArgs<ItunesArtist>): Promise<ItunesResponse<ItunesArtist>> =>
  itunes.jsonp<null, ItunesResponse<ItunesArtist>>("/lookup", {
    params: {
      id,
      entity: "musicArtist",
    },
  })
export const lookupItunesAlbum = ({
  id,
}: LookupQueryFnArgs<ItunesAlbum>): Promise<ItunesResponse<ItunesAlbum>> =>
  itunes.jsonp<null, ItunesResponse<ItunesAlbum>>("/lookup", {
    params: {id, entity: "album"},
  })
export const lookupItunesMusic = ({
  id,
}: LookupQueryFnArgs<ItunesMusic>): Promise<ItunesResponse<ItunesMusic>> =>
  itunes.jsonp<null, ItunesResponse<ItunesMusic>>("/lookup", {
    params: {id, entity: "song"},
  })

export const searchItunesMusics = (
  term: TermType,
  offset: number
): Promise<ItunesResponse<ItunesMusic>> =>
  itunes.jsonp<null, ItunesResponse<ItunesMusic>>("/search", {
    params: {
      entity: "song",
      term,
      limit,
      offset,
    },
  })
export const searchItunesArtists = (
  term: TermType,
  offset: number
): Promise<ItunesResponse<ItunesArtist>> =>
  itunes.jsonp<null, ItunesResponse<ItunesArtist>>("/search", {
    params: {
      entity: "musicArtist",
      term,
      limit,
      offset,
    },
  })
export const searchItunesAlbums = (
  term: TermType,
  offset: number
): Promise<ItunesResponse<ItunesAlbum>> =>
  itunes.jsonp<null, ItunesResponse<ItunesAlbum>>("/search", {
    params: {
      entity: "album",
      term,
      limit,
      offset,
    },
  })
