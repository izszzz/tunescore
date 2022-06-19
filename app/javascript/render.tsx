import "@hotwired/turbo-rails"
import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
// @ts-ignore
import * as Routes from  "./rails-routes"

document.addEventListener("turbo:load", function() {
	switch (location.pathname){
		case Routes.new_user_session_path(): 
			render("signin", <SignIn/>)
			break;
		case Routes.new_user_registration_path(): 
			render("signup", <SignUp/>)
			break;
		case Routes.root_path():
			render("home", <Home/>)
			break;
	}
})

function render(id: string, page: React.ReactNode){
	const e = document.getElementById(id);
	if (!e) throw new Error('Failed to find the root element');
	createRoot(e).render(page);
}

declare global {
  interface Window {
    gon: {
			currentUser: null
		}
  }
}