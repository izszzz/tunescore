import "@hotwired/turbo-rails"
import React from "react"
import CssBaseline from '@mui/material/CssBaseline';
import { createRoot } from 'react-dom/client';
import { Gon, Page } from "./interfaces";
import pages from "./pages";
import GonContextProvider from './contexts/GonContext';

document.addEventListener("turbo:load", function () {
	render(pages)
})

function render(pages: Page[]) {
	for (const { id, component } of pages) {
		const e = document.getElementById(id);
		if (e) {
			createRoot(e).render(
				<GonContextProvider>
					<CssBaseline>
						{component}
					</CssBaseline>
				</GonContextProvider>
			);
			return
		} else {
			continue
		}
	}
	throw new Error('Failed to find the root element');
}

declare global {
	interface Window {
		gon: Gon
	}
}