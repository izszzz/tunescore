import React from "react"
import CssBaseline from '@mui/material/CssBaseline';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import { Page } from "./interfaces";
import pages from "./pages";
import GonContextProvider from './contexts/Gon';
import { store } from "./store/store"
// @ts-ignore
import { Turbo } from "@hotwired/turbo-rails"
Turbo.session.drive = false

document.addEventListener("turbo:load", function () {
	render(pages)
})

function render(pages: Page[]) {
	for (const { id, component } of pages) {
		const e = document.getElementById(id);
		if (e) {
			createRoot(e).render(
				<GonContextProvider>
					<Provider store={store}>
						<CssBaseline>
							{component}
						</CssBaseline>
					</Provider>
				</GonContextProvider>
			);
			return
		} else {
			continue
		}
	}
	throw new Error('Failed to find the root element');
}

