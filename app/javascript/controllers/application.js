import { Application } from "@hotwired/stimulus"
import Dropdown from 'stimulus-dropdown'
import { Autocomplete } from 'stimulus-autocomplete'


const application = Application.start()
application.register('dropdown', Dropdown)
application.register('autocomplete', Autocomplete)
// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
