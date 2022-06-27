import React from "react"
import Home from './pages/Home';
import SignUp from './pages/Devise/SignUp';
import SignIn from './pages/Devise/SignIn';
import Musics from "./pages/Musics/Index";
import Music from "./pages/Musics/Show";
import MusicNew from "./pages/Musics/New";
import Artists from "./pages/Artists/Index";
import Artist from "./pages/Artists/Show";
import ArtistNew from './pages/Artists/New';
import Bands from "./pages/Bands/Index";
import Band from "./pages/Bands/Show";
import BandNew from "./pages/Bands/New";
import Albums from "./pages/Albums/Index";
import Album from "./pages/Albums/Show";
import AlbumNew from "./pages/Albums/New";
import Score from "./pages/Score/Show";
import ScoreEdit from "./pages/Score/Edit";

function createData(
	id: string,
	component: React.ReactNode,
) {
	return { id, component };
}

const pages = [
	createData("signin", <SignIn />),
	createData("signup", <SignUp />),
	createData("home", <Home />),
	createData("musics", <Musics />),
	createData("music", <Music />),
	createData("music_new", <MusicNew />),
	createData("artists", <Artists />),
	createData("artist", <Artist />),
	createData("artist_new", <ArtistNew />),
	createData("bands", <Bands />),
	createData("band", <Band />),
	createData("band_new", <BandNew />),

	createData("albums", <Albums />),
	createData("album", <Album />),
	createData("album_new", <AlbumNew />),
	createData("score", <Score />),
	createData("score_edit", <ScoreEdit />)
]

export default pages 