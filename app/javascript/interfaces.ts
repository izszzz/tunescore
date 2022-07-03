import { AlphaTabApi } from "../../node_modules/@coderline/alphatab/dist/alphaTab";

export interface Gon{
	authenticity_token: string
	currentUser: schema.User
	musics: schema.Music[]
	music: schema.Music
	artists: schema.Artist[]
	artist: schema.Artist
	bands: schema.Band[]
	band: schema.Band
	albums: schema.Album[]
	album: schema.Album
}

export interface Page {
	id: string
	component: React.ReactNode
}

declare global {
	interface Window {
		gon: Gon
		alphaTab: {
			AlphaTabApi: typeof AlphaTabApi;
			LayoutMode: {
				Page: 0;
				Horizontal: 1;
			}
		}
	}
}