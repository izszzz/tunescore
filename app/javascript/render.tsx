import "@hotwired/turbo-rails"
import { createRoot } from 'react-dom/client';
import { Gon, Page } from "./interfaces";
import pages from "./pages";

document.addEventListener("turbo:load", function () {
	render(pages)
})

function render(pages: Page[]) {
	for (const { id, component } of pages) {
		const e = document.getElementById(id);
		if (e) {
			createRoot(e).render(component);
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