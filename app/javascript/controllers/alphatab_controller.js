import {Controller} from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["main", "overlay", "tracks", "track", "viewport", "songTitle", "songArtist", "countIn", "metronome", "loop", "print", "zoom", "layout", "playerProgress", "playerPause", "playerStop"]

  mainTargetConnected(target) {
    if (!window.alphaTab) return setTimeout(() => this.setApi(target), 500)
    this.setApi(target)
  }
  setApi(main) {
    const api = new window.alphaTab.AlphaTabApi(main, {
      file: "https://www.alphatab.net/files/canon.gp",
      player: {
        enablePlayer: true,
        soundFont: 'https://cdn.jsdelivr.net/npm/@coderline/alphatab@latest/dist/soundfont/sonivox.sf2',
        scrollElement: this.viewportTarget // this is the element to scroll during playback
      }
    })
    this.setOverlay(api)
    this.setTracks(api)
    this.setSongInfo(api)
    this.setCountIn(api)
    this.setMetronome(api)
    this.setLoop(api)
    this.setPrint(api)
    this.setZoom(api)
    this.setLayout(api)
    this.setPlayerProgress(api)
    this.setPlayerControl(api)
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

  setSongInfo(api){
    api.scoreLoaded.on((score) => {
      this.songTitleTarget.innerText = score.title;
      this.songArtistTarget.innerText = score.artist;
    });
  }

  setCountIn(api){
      this.countInTarget.onclick = () => {
        countIn.classList.toggle('active');
        if (countIn.classList.contains('active')) {
          api.countInVolume = 1;
        } else {
          api.countInVolume = 0;
        }
      };
  }

  setMetronome(api){
    this.metronomeTarget.onclick = () => {
        metronome.classList.toggle("active");
        if (metronome.classList.contains("active")) {
          api.metronomeVolume = 1;
        } else {
          api.metronomeVolume = 0;
        }
      };
  }

  setLoop(api){
    this.loopTarget.onclick = () => {
      loop.classList.toggle("active");
      api.isLooping = loop.classList.contains("active");
    };
  }

  setPrint(api){
    this.printTarget.onclick = () => {
      api.print();
    };
  }

  setZoom(api){
    this.zoomTarget.onchange = () => {
      const zoomLevel = parseInt(zoom.value) / 100;
      api.settings.display.scale = zoomLevel;
      api.updateSettings();
      api.render();
    }
  }

  setLayout(api){
    this.layoutTarget.onchange = () => {
      switch (layout.value) {
        case "horizontal":
          api.settings.display.layoutMode = alphaTab.LayoutMode.Horizontal;
          break;
        case "page":
          api.settings.display.layoutMode = alphaTab.LayoutMode.Page;
          break;
      }
      api.updateSettings();
      api.render();
    };
  }

  setPlayerProgress(api){
    const playerIndicator = this.playerProgressTarget
    api.soundFontLoad.on((e) => {
      const percentage = Math.floor((e.loaded / e.total) * 100);
      playerIndicator.innerText = percentage + "%";
    });
    api.playerReady.on(() => {
      playerIndicator.style.display = "none";
    });
  }

  setPlayerControl(api){
    const playPause = this.playerPauseTarget
    const stop =  this.playerStopTarget
    playPause.onclick = (e) => {
      if (e.target.classList.contains("disabled")) {
        return;
      }
      api.playPause();
    };
    stop.onclick = (e) => {
      if (e.target.classList.contains("disabled")) {
        return;
      }
      api.stop();
    };
    api.playerReady.on(() => {
      playPause.classList.remove("disabled");
      stop.classList.remove("disabled");
    });
    api.playerStateChanged.on((e) => {
      const icon = playPause.querySelector("i.fas");
      if (e.state === alphaTab.synth.PlayerState.Playing) {
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
      } else {
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
      }
    });
  }
}
