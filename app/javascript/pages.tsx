import React from "react"
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Musics from "./pages/Musics";
import Music from "./pages/Music";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import Bands from "./pages/Bands";
import Band from "./pages/Band";
import Albums from "./pages/Albums";
import Album from "./pages/Album";
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
	createData("artists", <Artists />),
	createData("artist", <Artist />),
	createData("bands", <Bands />),
	createData("band", <Band />),
	createData("albums", <Albums />),
	createData("album", <Album />),
	createData("score", <Score />),
	createData("score_edit", <ScoreEdit />)
]

export default pages 