import "@hotwired/turbo-rails"
import React from 'react';
import { createRoot } from 'react-dom/client';
// @ts-ignore
import * as Routes from  "./rails-routes"
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Musics from "./pages/Musics";
import { Gon } from "./interfaces";

const pages = [
	[Routes.new_user_session_path(), "signin", <SignIn/>],
	[Routes.new_user_registration_path(), "signup", <SignUp/>],
	[Routes.root_path(), "home", <Home/>],
	[Routes.musics_path(), "musics", <Musics/>]
]

document.addEventListener("turbo:load", function() {
	pages.map(([path, id, page])=>render(path, id, page))
})

function render(path: string, id: string, page: React.ReactNode){
	if(location.pathname === path){
		const e = document.getElementById(id);
		if (!e) throw new Error('Failed to find the root element');
		createRoot(e).render(page);
	}
}

declare global {
  interface Window {
    gon: Gon
  }
}