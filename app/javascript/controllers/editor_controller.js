import {Controller} from "@hotwired/stimulus"
import Split from "split.js"

export default class extends Controller {
	static targets = ["split0", "split1", "alphatab"]
	static values = {
		score: String
	}	
	model

	connect(){
		//setup split.js
		Split([this.split0Target, this.split1Target])
		//setup monaco editor
		window.require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs' }});
		window.require(["vs/editor/editor.main"], () => {
			this.model = monaco.editor.createModel(this.scoreValue,"javascript")
			this.editor = monaco.editor.create(this.split0Target, {
				value: "",
				language: 'javascript',
				theme: 'vs-dark',
				automaticLayout: true,
			});
			this.editor.setModel(this.model)
			this.model.onDidChangeContent((event) => this.change(event.changes[0].text))
		});
	}
	change(value){
		const alphatabController = this.application.getControllerForElementAndIdentifier(this.alphatabTarget, 'alphatab')
		alphatabController.changeMethod(value)
	}
}