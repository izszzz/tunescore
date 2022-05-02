import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
	connect(){
		const api = new alphaTab.AlphaTabApi(document.querySelector(".at-main"), {
			file: "https://www.alphatab.net/files/canon.gp",
		})
		this.setupOverlay(api)
	}
	setupOverlay(api){
		const overlay = document.querySelector(".at-overlay");
		api.renderStarted.on(() => { overlay.style.display = 'flex'; });
		api.renderFinished.on(() => { overlay.style.display = 'none'; });
	}
}