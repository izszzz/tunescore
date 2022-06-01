import {Controller} from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["main", "overlay", "tracks", "track"]

  mainTargetConnected(target) {
    if (!window.alphaTab) return setTimeout(() => this.setApi(target), 500)
    this.setApi(target)
  }
  setApi(main) {
    const api = new window.alphaTab.AlphaTabApi(main, {
      file: "https://www.alphatab.net/files/canon.gp",
    })
    this.setOverlay(api)
    this.setTracks(api)
  }

  setOverlay(api) {
    api.renderStarted.on(() => {
      this.overlayTarget.style.display = "flex"
    })
    api.renderFinished.on(() => {
      this.overlayTarget.style.display = "none"
    })
  }

  setTracks(api) {
    // helper function to create individual items
    const trackTarget = this.trackTarget
    function createTrackItem(track) {
      const trackItem = trackTarget.content.cloneNode(true).firstElementChild
      trackItem.querySelector(".at-track-name").innerText = track.name
      trackItem.track = track
      trackItem.onclick = e => {
        e.stopPropagation()
        // here we use some API function of alphaTab.
        // check the reference docs for the details.
        api.renderTracks([track])
      }
      return trackItem
    }

    const trackList = this.tracksTarget
    // fill track list when the score is loaded
    api.scoreLoaded.on(score => {
      // clear items
      trackList.innerHTML = ""
      // generate a track item for all tracks of the score
      score.tracks.forEach(track => {
        trackList.appendChild(createTrackItem(track))
      })
    })

    // mark the rendered track as active in the list
    api.renderStarted.on(() => {
      // collect tracks being rendered
      const tracks = new Map()
      // here we access the currently rendered tracks of alphaTab
      api.tracks.forEach(t => {
        tracks.set(t.index, t)
      })
      // mark the item as active or not
      const trackItems = trackList.querySelectorAll(".at-track")
      trackItems.forEach(trackItem => {
        if (tracks.has(trackItem.track.index)) {
          trackItem.classList.add("active")
        } else {
          trackItem.classList.remove("active")
        }
      })
    })
  }
}
