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