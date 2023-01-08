import { model as Model } from "@coderline/alphatab";
export default class AlphaTexExporter {
  _builder: string;
  constructor() {
    this._builder = "";
  }
  Export(score: Model.Score) {
    this.Score(score);
  }
  Score(score: Model.Score) {
    this.ScoreMetaData(score);
    console.log(score);
    score.tracks.forEach((track) => {
      this.TrackMetaData(track);
      this.Bars(track);
    });
  }
  ToTex() {
    return this._builder;
  }
  ScoreMetaData(score: Model.Score) {
    this.StringMetaData("title", score.title);
    this.StringMetaData("subtitle", score.subTitle);
    this.StringMetaData("artist", score.artist);
    this.StringMetaData("album", score.album);
    this.StringMetaData("words", score.words);
    this.StringMetaData("music", score.music);
    this.StringMetaData("copyright", score?.copyright);
    this._builder += "\\tempo ";
    this._builder += score.tempo;
    this._builder += "" + "\r\n";
    this._builder += ".";
    this._builder += "" + "\r\n";
  }
  TrackMetaData(track: Model.Track) {
    this._builder += "" + "\r\n";
    // eslint-disable-next-line no-useless-escape
    this._builder += `\\track \"${track.name}\" \"${track.shortName}\"`;
    this._builder += "" + "\r\n";
  }
  StaveMetaData(stave: Model.Staff) {
    this._builder += "\\staff ";
    this._builder += "" + "\r\n";
    if (stave.capo > 0) {
      this._builder += `\\capo ${stave.capo}`;
    }
    this._builder += "\\tuning";
    stave.stringTuning.tunings.forEach((tuning) => {
      this._builder += " ";
      this._builder += Model.Tuning.getTextForTuning(tuning, true);
    });
    this._builder += "" + "\r\n";
    this._builder += `\\instrument ${stave.track.playbackInfo.program}`;
    this._builder += "" + "\r\n";
    this._builder += "" + "\r\n";
  }
  StringMetaData(key: string, value: string) {
    if (value && value.trim() === "") {
      this._builder += "\\";
      this._builder += key;
      this._builder += ' "';
      this._builder += value.replace('"', '\\"');
      this._builder += '"';
      this._builder += "" + "\r\n";
    }
  }
  Bars(track: Model.Track) {
    track.staves.forEach((stave) => {
      this.StaveMetaData(stave);
      stave.bars.forEach((bar, i) => {
        if (i > 0) {
          this._builder += " |";
          this._builder += "" + "\r\n";
        }
        this.Bar(bar);
      });
    });
  }
  Bar(bar: Model.Bar) {
    this.BarMeta(bar);
    if (bar.voices[0]) this.Voice(bar.voices[0]);
  }
  Voice(voice: Model.Voice) {
    voice.beats.forEach((beat) => this.Beat(beat));
  }
  Beat(beat: Model.Beat) {
    if (beat.isRest) {
      this._builder += "r";
    } else {
      if (beat.notes.length > 1) {
        this._builder += "(";
      }
      beat.notes.forEach((note) => this.Note(note));
      if (beat.notes.length > 1) {
        this._builder += ")";
      }
    }
    this._builder += ".";
    this._builder += beat.duration;
    this._builder += " ";
    this.BeatEffects(beat);
  }
  Note(note: Model.Note) {
    if (note.isDead) {
      this._builder += "x";
    } else if (note.isTieDestination) {
      this._builder += "-";
    } else {
      this._builder += note.fret;
    }
    this._builder += ".";
    if (note.beat.voice.bar.staff.track.staves[0])
      this._builder +=
        note.beat.voice.bar.staff.track.staves[0].stringTuning.tunings.length -
        note.string +
        1;
    this._builder += " ";
    this.NoteEffects(note);
  }
  NoteEffects(note: Model.Note) {
    let hasEffectOpen = false;
    if (note.hasBend) {
      hasEffectOpen = this.EffectOpen(hasEffectOpen);
      this._builder += "b (";

      for (let i = 0; i < note.bendPoints.length; i++) {
        console.log(note);
        this._builder += note.bendPoints[i]?.offset;
        this._builder += " ";
        this._builder += note.bendPoints[i]?.value;
        this._builder += " ";
      }
      this._builder += ")";
    }
    switch (note.harmonicType) {
      case Model.HarmonicType.Natural:
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "nh ";
        break;
      case Model.HarmonicType.Artificial:
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "ah ";
        break;
      case Model.HarmonicType.Tap:
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "th ";
        break;
      case Model.HarmonicType.Pinch:
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "ph ";
        break;
      case Model.HarmonicType.Semi:
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "sh ";
        break;
    }
    if (note.isTrill) {
      hasEffectOpen = this.EffectOpen(hasEffectOpen);
      this._builder += "tr ";
      this._builder += note.trillFret;
      this._builder += " ";
      switch (note.trillSpeed) {
        case Model.Duration.Sixteenth:
          this._builder += "16 ";
          break;
        case Model.Duration.ThirtySecond:
          this._builder += "32 ";
          break;
        case Model.Duration.SixtyFourth:
          this._builder += "64 ";
          break;
      }
    }
    if (note.vibrato != Model.VibratoType.None) {
      hasEffectOpen = this.EffectOpen(hasEffectOpen);
      this._builder += "v ";
    }
    switch (note.slideOutType) {
      case Model.SlideOutType.Legato:
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "sl ";
        break;
      case Model.SlideOutType.Shift:
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "ss ";
        break;
      case Model.SlideOutType.PickSlideDown:
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "psd ";
        break;
      case Model.SlideOutType.PickSlideUp:
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "psu ";
        break;
      case Model.SlideOutType.OutUp:
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "sou ";
        break;
      case Model.SlideOutType.OutDown:
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "sod ";
        break;
    }
    switch (note.slideInType) {
      case Model.SlideInType.IntoFromBelow:
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "sib ";
        break;
      case Model.SlideInType.IntoFromAbove:
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "sia ";
        break;
    }
    if (note.isHammerPullOrigin) {
      hasEffectOpen = this.EffectOpen(hasEffectOpen);
      this._builder += "h ";
    }
    if (note.isGhost) {
      hasEffectOpen = this.EffectOpen(hasEffectOpen);
      this._builder += "g ";
    }
    if (note.accentuated == Model.AccentuationType.Normal) {
      hasEffectOpen = this.EffectOpen(hasEffectOpen);
      this._builder += "ac ";
    } else if (note.accentuated == Model.AccentuationType.Heavy) {
      hasEffectOpen = this.EffectOpen(hasEffectOpen);
      this._builder += "hac ";
    }
    if (note.isPalmMute) {
      hasEffectOpen = this.EffectOpen(hasEffectOpen);
      this._builder += "pm ";
    }
    if (note.isStaccato) {
      hasEffectOpen = this.EffectOpen(hasEffectOpen);
      this._builder += "st ";
    }
    if (note.isLetRing) {
      hasEffectOpen = this.EffectOpen(hasEffectOpen);
      this._builder += "lr ";
    }
    switch (note.leftHandFinger) {
      case Model.Fingers.Thumb:
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "1 ";
        break;
      case Model.Fingers.IndexFinger:
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "2 ";
        break;
      case Model.Fingers.MiddleFinger:
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "3 ";
        break;
      case Model.Fingers.AnnularFinger:
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "4 ";
        break;
      case Model.Fingers.LittleFinger:
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "5 ";
        break;
    }
    switch (note.rightHandFinger) {
      case Model.Fingers.Thumb:
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "1 ";
        break;
      case Model.Fingers.IndexFinger:
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "2 ";
        break;
      case Model.Fingers.MiddleFinger:
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "3 ";
        break;
      case Model.Fingers.AnnularFinger:
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "4 ";
        break;
      case Model.Fingers.LittleFinger:
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "5 ";
        break;
    }
    this.EffectClose(hasEffectOpen);
  }
  EffectOpen(hasBeatEffectOpen: boolean) {
    if (!hasBeatEffectOpen) {
      this._builder += "{";
    }
    return true;
  }
  EffectClose(hasBeatEffectOpen: boolean) {
    if (hasBeatEffectOpen) {
      this._builder += "}";
    }
  }
  BeatEffects(beat: Model.Beat) {
    let hasEffectOpen = false;
    if (beat.fadeIn) {
      hasEffectOpen = this.EffectOpen(hasEffectOpen);
      this._builder += "f ";
    }
    switch (beat.graceType) {
      case Model.GraceType.OnBeat:
        this._builder += "gr ob ";
        break;
      case Model.GraceType.BeforeBeat:
        this._builder += "gr ";
        break;
    }
    if (beat.vibrato != Model.VibratoType.None) {
      hasEffectOpen = this.EffectOpen(hasEffectOpen);
      this._builder += "v ";
    }
    if (beat.slap) {
      hasEffectOpen = this.EffectOpen(hasEffectOpen);
      this._builder += "s ";
    }
    if (beat.pop) {
      hasEffectOpen = this.EffectOpen(hasEffectOpen);
      this._builder += "p ";
    }
    if (beat.dots == 2) {
      hasEffectOpen = this.EffectOpen(hasEffectOpen);
      this._builder += "dd ";
    } else if (beat.dots == 1) {
      hasEffectOpen = this.EffectOpen(hasEffectOpen);
      this._builder += "d ";
    }
    //TODO:
    //     if (beat.PickStroke == Model.PickStrokeType.Up) {
    //       hasEffectOpen = this.EffectOpen(hasEffectOpen)
    //       this._builder += "su "
    //     } else if (beat.PickStroke == Model.PickStrokeType.Down) {
    //       hasEffectOpen = this.EffectOpen(hasEffectOpen)
    //       this._builder += "sd "
    //     }
    if (beat.hasTuplet) {
      let tupletValue = 0;
      if (beat.tupletDenominator == 3 && beat.tupletNumerator == 2) {
        tupletValue = 3;
      } else if (beat.tupletDenominator == 5 && beat.tupletNumerator == 4) {
        tupletValue = 5;
      } else if (beat.tupletDenominator == 6 && beat.tupletNumerator == 4) {
        tupletValue = 6;
      } else if (beat.tupletDenominator == 7 && beat.tupletNumerator == 4) {
        tupletValue = 7;
      } else if (beat.tupletDenominator == 9 && beat.tupletNumerator == 8) {
        tupletValue = 9;
      } else if (beat.tupletDenominator == 10 && beat.tupletNumerator == 8) {
        tupletValue = 10;
      } else if (beat.tupletDenominator == 11 && beat.tupletNumerator == 8) {
        tupletValue = 11;
      } else if (beat.tupletDenominator == 12 && beat.tupletNumerator == 8) {
        tupletValue = 12;
      }
      if (tupletValue != 0) {
        hasEffectOpen = this.EffectOpen(hasEffectOpen);
        this._builder += "tu ";
        this._builder += tupletValue;
        this._builder += " ";
      }
    }
    if (beat.hasWhammyBar) {
      hasEffectOpen = this.EffectOpen(hasEffectOpen);
      this._builder += "tbe (";
      for (let i = 0; i < beat.whammyBarPoints.length; i++) {
        this._builder += beat.whammyBarPoints[i]?.offset;
        this._builder += " ";
        this._builder += beat.whammyBarPoints[i]?.value;
        this._builder += " ";
      }
      this._builder += ")";
    }
    if (beat.isTremolo) {
      hasEffectOpen = this.EffectOpen(hasEffectOpen);
      this._builder += "tp ";
      //TODO:
      //       if (beat.TremoloSpeed == AlphaTab.Model.Duration.Eighth) {
      //         this._builder += "8 "
      //       } else if (beat.TremoloSpeed == AlphaTab.Model.Duration.Sixteenth) {
      //         this._builder += "16 "
      //       } else if (beat.TremoloSpeed == AlphaTab.Model.Duration.ThirtySecond) {
      //         this._builder += "32 "
      //       } else {
      //         this._builder += "8 "
      //       }
    }
    this.EffectClose(hasEffectOpen);
  }
  BarMeta(bar: Model.Bar) {
    const masterBar = bar.masterBar;
    if (masterBar.index > 0) {
      const previousMasterBar = masterBar.previousMasterBar;
      const previousBar = bar.previousBar;
      if (
        previousMasterBar?.timeSignatureDenominator !=
          masterBar.timeSignatureDenominator ||
        previousMasterBar?.timeSignatureNumerator !=
          masterBar.timeSignatureNumerator
      ) {
        this._builder += "\\ts ";
        this._builder += masterBar.timeSignatureNumerator;
        this._builder += " ";
        this._builder += masterBar.timeSignatureDenominator;
        this._builder += "" + "\r\n";
      }
      if (previousMasterBar?.keySignature != masterBar.keySignature) {
        this._builder += "\\ks ";
        switch (masterBar.keySignature) {
          case -7:
            this._builder += "cb";
            break;
          case -6:
            this._builder += "gb";
            break;
          case -5:
            this._builder += "db";
            break;
          case -4:
            this._builder += "ab";
            break;
          case -3:
            this._builder += "eb";
            break;
          case -2:
            this._builder += "bb";
            break;
          case -1:
            this._builder += "f";
            break;
          case 0:
            this._builder += "c";
            break;
          case 1:
            this._builder += "g";
            break;
          case 2:
            this._builder += "d";
            break;
          case 3:
            this._builder += "a";
            break;
          case 4:
            this._builder += "e";
            break;
          case 5:
            this._builder += "b";
            break;
          case 6:
            this._builder += "f#";
            break;
          case 7:
            this._builder += "c#";
            break;
        }
        this._builder += "" + "\r\n";
      }
      if (bar.clef != previousBar?.clef) {
        this._builder += "\\clef ";
        switch (bar.clef) {
          case Model.Clef.Neutral:
            this._builder += "n";
            break;
          case Model.Clef.C3:
            this._builder += "c3";
            break;
          case Model.Clef.C4:
            this._builder += "c4";
            break;
          case Model.Clef.F4:
            this._builder += "f4";
            break;
          case Model.Clef.G2:
            this._builder += "g2";
            break;
        }
        this._builder += "" + "\r\n";
      }
      if (masterBar.tempoAutomation != null) {
        this._builder += "\\tempo ";
        this._builder += masterBar.tempoAutomation.value;
        this._builder += "" + "\r\n";
      }
    }
    if (masterBar.isRepeatStart) {
      this._builder += "\\ro ";
      this._builder += "" + "\r\n";
    }
    if (masterBar.isRepeatEnd) {
      this._builder += "\\rc ";
      this._builder += masterBar.repeatCount + 1;
      this._builder += "" + "\r\n";
    }
  }
}
// AlphaTab.Exporter.AlphaTexExporter = function (){
//     this._builder = null;
//     this._builder = new String();
// };
// AlphaTab.Exporter.AlphaTexExporter.prototype = {
//     Export: function (track){
//         this.Score(track);
//     },
//     Score: function (track){
//         this.MetaData(track);
//         this.Bars(track);
//     },
//     ToTex: function (){
//         return this._builder;
//     },
//     MetaData: function (track){
//         const score = track.Score;
//         this.StringMetaData("title", score.Title);
//         this.StringMetaData("subtitle", score.SubTitle);
//         this.StringMetaData("artist", score.Artist);
//         this.StringMetaData("album", score.Album);
//         this.StringMetaData("words", score.Words);
//         this.StringMetaData("music", score.Music);
//         this.StringMetaData("copyright", score.Copyright);
//         this._builder+="\\tempo ";
//         this._builder+=score.Tempo;
//         this._builder+=""+'\r\n';
//         if (track.Capo > 0){
//             this._builder+="\\capo ";
//             this._builder+=track.Capo;
//             this._builder+=""+'\r\n';
//         }
//         this._builder+="\\tuning";
//         for (let i = 0; i < track.Tuning.length; i++){
//             this._builder+=" ";
//             this._builder+=AlphaTab.Model.Tuning.GetTextForTuning(track.Tuning[i], true);
//         }
//         this._builder+="\\instrument ";
//         this._builder+=track.PlaybackInfo.Program;
//         this._builder+=""+'\r\n';
//         this._builder+=".";
//         this._builder+=""+'\r\n';
//     },
//     StringMetaData: function (key, value){
//         if (!AlphaTab.Platform.Std.IsNullOrWhiteSpace(value)){
//             this._builder+="\\";
//             this._builder+=key;
//             this._builder+=" \"";
//             this._builder+=value.replace("\"","\\\"");
//             this._builder+="\"";
//             this._builder+=""+'\r\n';
//         }
//     },
//     Bars: function (track){
//         // alphatab only supports single staves,
//         for (let i = 0; i < 1; i++){
//             for (let j = 0; j < track.Staves[i].Bars.length; j++){
//                 if (i > 0){
//                     this._builder+=" |";
//                     this._builder+=""+'\r\n';
//                 }
//                 this.Bar(track.Staves[i].Bars[j]);
//             }
//         }
//     },
//     Bar: function (bar){
//         this.BarMeta(bar);
//         this.Voice(bar.Voices[0]);
//     },
//     Voice: function (voice){
//         for (let i = 0; i < voice.Beats.length; i++){
//             this.Beat(voice.Beats[i]);
//         }
//     },
//     Beat: function (beat){
//         if (beat.get_IsRest()){
//             this._builder+="r";
//         }
//         else {
//             if (beat.Notes.length > 1){
//                 this._builder+="(";
//             }
//             for (let i = 0; i < beat.Notes.length; i++){
//                 this.Note(beat.Notes[i]);
//             }
//             if (beat.Notes.length > 1){
//                 this._builder+=")";
//             }
//         }
//         this._builder+=".";
//         this._builder+=beat.Duration;
//         this._builder+=" ";
//         this.BeatEffects(beat);
//     },
//     Note: function (note){
//         if (note.IsDead){
//             this._builder+="x";
//         }
//         else if (note.IsTieDestination){
//             this._builder+="-";
//         }
//         else {
//             this._builder+=note.Fret;
//         }
//         this._builder+=".";
//         this._builder+=note.Beat.Voice.Bar.Staff.Track.Tuning.length - note.String + 1;
//         this._builder+=" ";
//         this.NoteEffects(note);
//     },
//     NoteEffects: function (note){
//         let hasEffectOpen = false;
//         if (note.get_HasBend()){
//             hasEffectOpen = this.EffectOpen(hasEffectOpen);
//             this._builder+="be (";
//             for (let i = 0; i < note.BendPoints.length; i++){
//                 this._builder+=note.BendPoints[i].Offset;
//                 this._builder+=" ";
//                 this._builder+=note.BendPoints[i].Value;
//                 this._builder+=" ";
//             }
//             this._builder+=")";
//         }
//         switch (note.HarmonicType){
//             case AlphaTab.Model.HarmonicType.Natural:
//                 hasEffectOpen = this.EffectOpen(hasEffectOpen);
//                 this._builder+="nh ";
//                 break;
//             case AlphaTab.Model.HarmonicType.Artificial:
//                 hasEffectOpen = this.EffectOpen(hasEffectOpen);
//                 this._builder+="ah ";
//                 break;
//             case AlphaTab.Model.HarmonicType.Tap:
//                 hasEffectOpen = this.EffectOpen(hasEffectOpen);
//                 this._builder+="th ";
//                 break;
//             case AlphaTab.Model.HarmonicType.Pinch:
//                 hasEffectOpen = this.EffectOpen(hasEffectOpen);
//                 this._builder+="ph ";
//                 break;
//             case AlphaTab.Model.HarmonicType.Semi:
//                 hasEffectOpen = this.EffectOpen(hasEffectOpen);
//                 this._builder+="sh ";
//                 break;
//         }
//         if (note.get_IsTrill()){
//             hasEffectOpen = this.EffectOpen(hasEffectOpen);
//             this._builder+="tr ";
//             this._builder+=note.get_TrillFret();
//             this._builder+=" ";
//             switch (note.TrillSpeed){
//                 case AlphaTab.Model.Duration.Sixteenth:
//                     this._builder+="16 ";
//                     break;
//                 case AlphaTab.Model.Duration.ThirtySecond:
//                     this._builder+="32 ";
//                     break;
//                 case AlphaTab.Model.Duration.SixtyFourth:
//                     this._builder+="64 ";
//                     break;
//             }
//         }
//         if (note.Vibrato != AlphaTab.Model.VibratoType.None){
//             hasEffectOpen = this.EffectOpen(hasEffectOpen);
//             this._builder+="v ";
//         }
//         if (note.SlideType == AlphaTab.Model.SlideType.Legato){
//             hasEffectOpen = this.EffectOpen(hasEffectOpen);
//             this._builder+="sl ";
//         }
//         if (note.SlideType == AlphaTab.Model.SlideType.Shift){
//             hasEffectOpen = this.EffectOpen(hasEffectOpen);
//             this._builder+="ss ";
//         }
//         if (note.IsHammerPullOrigin){
//             hasEffectOpen = this.EffectOpen(hasEffectOpen);
//             this._builder+="h ";
//         }
//         if (note.IsGhost){
//             hasEffectOpen = this.EffectOpen(hasEffectOpen);
//             this._builder+="g ";
//         }
//         if (note.Accentuated == AlphaTab.Model.AccentuationType.Normal){
//             hasEffectOpen = this.EffectOpen(hasEffectOpen);
//             this._builder+="ac ";
//         }
//         else if (note.Accentuated == AlphaTab.Model.AccentuationType.Heavy){
//             hasEffectOpen = this.EffectOpen(hasEffectOpen);
//             this._builder+="hac ";
//         }
//         if (note.IsPalmMute){
//             hasEffectOpen = this.EffectOpen(hasEffectOpen);
//             this._builder+="pm ";
//         }
//         if (note.IsStaccato){
//             hasEffectOpen = this.EffectOpen(hasEffectOpen);
//             this._builder+="st ";
//         }
//         if (note.IsLetRing){
//             hasEffectOpen = this.EffectOpen(hasEffectOpen);
//             this._builder+="lr ";
//         }
//         switch (note.LeftHandFinger){
//             case AlphaTab.Model.Fingers.Thumb:
//                 hasEffectOpen = this.EffectOpen(hasEffectOpen);
//                 this._builder+="1 ";
//                 break;
//             case AlphaTab.Model.Fingers.IndexFinger:
//                 hasEffectOpen = this.EffectOpen(hasEffectOpen);
//                 this._builder+="2 ";
//                 break;
//             case AlphaTab.Model.Fingers.MiddleFinger:
//                 hasEffectOpen = this.EffectOpen(hasEffectOpen);
//                 this._builder+="3 ";
//                 break;
//             case AlphaTab.Model.Fingers.AnnularFinger:
//                 hasEffectOpen = this.EffectOpen(hasEffectOpen);
//                 this._builder+="4 ";
//                 break;
//             case AlphaTab.Model.Fingers.LittleFinger:
//                 hasEffectOpen = this.EffectOpen(hasEffectOpen);
//                 this._builder+="5 ";
//                 break;
//         }
//         switch (note.RightHandFinger){
//             case AlphaTab.Model.Fingers.Thumb:
//                 hasEffectOpen = this.EffectOpen(hasEffectOpen);
//                 this._builder+="1 ";
//                 break;
//             case AlphaTab.Model.Fingers.IndexFinger:
//                 hasEffectOpen = this.EffectOpen(hasEffectOpen);
//                 this._builder+="2 ";
//                 break;
//             case AlphaTab.Model.Fingers.MiddleFinger:
//                 hasEffectOpen = this.EffectOpen(hasEffectOpen);
//                 this._builder+="3 ";
//                 break;
//             case AlphaTab.Model.Fingers.AnnularFinger:
//                 hasEffectOpen = this.EffectOpen(hasEffectOpen);
//                 this._builder+="4 ";
//                 break;
//             case AlphaTab.Model.Fingers.LittleFinger:
//                 hasEffectOpen = this.EffectOpen(hasEffectOpen);
//                 this._builder+="5 ";
//                 break;
//         }
//         this.EffectClose(hasEffectOpen);
//     },
//     EffectOpen: function (hasBeatEffectOpen){
//         if (!hasBeatEffectOpen){
//             this._builder+="{";
//         }
//         return true;
//     },
//     EffectClose: function (hasBeatEffectOpen){
//         if (hasBeatEffectOpen){
//             this._builder+="}";
//         }
//     },
//     BeatEffects: function (beat){
//         let hasEffectOpen = false;
//         if (beat.FadeIn){
//             hasEffectOpen = this.EffectOpen(hasEffectOpen);
//             this._builder+="f ";
//         }
//         switch (beat.GraceType){
//             case AlphaTab.Model.GraceType.OnBeat:
//                 this._builder+="gr ob ";
//                 break;
//             case AlphaTab.Model.GraceType.BeforeBeat:
//                 this._builder+="gr ";
//                 break;
//         }
//         if (beat.Vibrato != AlphaTab.Model.VibratoType.None){
//             hasEffectOpen = this.EffectOpen(hasEffectOpen);
//             this._builder+="v ";
//         }
//         if (beat.Slap){
//             hasEffectOpen = this.EffectOpen(hasEffectOpen);
//             this._builder+="s ";
//         }
//         if (beat.Pop){
//             hasEffectOpen = this.EffectOpen(hasEffectOpen);
//             this._builder+="p ";
//         }
//         if (beat.Dots == 2){
//             hasEffectOpen = this.EffectOpen(hasEffectOpen);
//             this._builder+="dd ";
//         }
//         else if (beat.Dots == 1){
//             hasEffectOpen = this.EffectOpen(hasEffectOpen);
//             this._builder+="d ";
//         }
//         if (beat.PickStroke == AlphaTab.Model.PickStrokeType.Up){
//             hasEffectOpen = this.EffectOpen(hasEffectOpen);
//             this._builder+="su ";
//         }
//         else if (beat.PickStroke == AlphaTab.Model.PickStrokeType.Down){
//             hasEffectOpen = this.EffectOpen(hasEffectOpen);
//             this._builder+="sd ";
//         }
//         if (beat.get_HasTuplet()){
//             let tupletValue = 0;
//             if (beat.TupletDenominator == 3 && beat.TupletNumerator == 2){
//                 tupletValue = 3;
//             }
//             else if (beat.TupletDenominator == 5 && beat.TupletNumerator == 4){
//                 tupletValue = 5;
//             }
//             else if (beat.TupletDenominator == 6 && beat.TupletNumerator == 4){
//                 tupletValue = 6;
//             }
//             else if (beat.TupletDenominator == 7 && beat.TupletNumerator == 4){
//                 tupletValue = 7;
//             }
//             else if (beat.TupletDenominator == 9 && beat.TupletNumerator == 8){
//                 tupletValue = 9;
//             }
//             else if (beat.TupletDenominator == 10 && beat.TupletNumerator == 8){
//                 tupletValue = 10;
//             }
//             else if (beat.TupletDenominator == 11 && beat.TupletNumerator == 8){
//                 tupletValue = 11;
//             }
//             else if (beat.TupletDenominator == 12 && beat.TupletNumerator == 8){
//                 tupletValue = 12;
//             }
//             if (tupletValue != 0){
//                 hasEffectOpen = this.EffectOpen(hasEffectOpen);
//                 this._builder+="tu ";
//                 this._builder+=tupletValue;
//                 this._builder+=" ";
//             }
//         }
//         if (beat.get_HasWhammyBar()){
//             hasEffectOpen = this.EffectOpen(hasEffectOpen);
//             this._builder+="tbe (";
//             for (let i = 0; i < beat.WhammyBarPoints.length; i++){
//                 this._builder+=beat.WhammyBarPoints[i].Offset;
//                 this._builder+=" ";
//                 this._builder+=beat.WhammyBarPoints[i].Value;
//                 this._builder+=" ";
//             }
//             this._builder+=")";
//         }
//         if (beat.get_IsTremolo()){
//             hasEffectOpen = this.EffectOpen(hasEffectOpen);
//             this._builder+="tp ";
//             if (beat.TremoloSpeed == AlphaTab.Model.Duration.Eighth){
//                 this._builder+="8 ";
//             }
//             else if (beat.TremoloSpeed == AlphaTab.Model.Duration.Sixteenth){
//                 this._builder+="16 ";
//             }
//             else if (beat.TremoloSpeed == AlphaTab.Model.Duration.ThirtySecond){
//                 this._builder+="32 ";
//             }
//             else {
//                 this._builder+="8 ";
//             }
//         }
//         this.EffectClose(hasEffectOpen);
//     },
//     BarMeta: function (bar){
//         const masterBar = bar.get_MasterBar();
//         if (masterBar.Index > 0){
//             const previousMasterBar = masterBar.PreviousMasterBar;
//             const previousBar = bar.PreviousBar;
//             if (previousMasterBar.TimeSignatureDenominator != masterBar.TimeSignatureDenominator || previousMasterBar.TimeSignatureNumerator != masterBar.TimeSignatureNumerator){
//                 this._builder+="\\ts ";
//                 this._builder+=masterBar.TimeSignatureNumerator;
//                 this._builder+=" ";
//                 this._builder+=masterBar.TimeSignatureDenominator;
//                 this._builder+=""+'\r\n';
//             }
//             if (previousMasterBar.KeySignature != masterBar.KeySignature){
//                 this._builder+="\\ks ";
//                 switch (masterBar.KeySignature){
//                     case -7:
//                         this._builder+="cb";
//                         break;
//                     case -6:
//                         this._builder+="gb";
//                         break;
//                     case -5:
//                         this._builder+="db";
//                         break;
//                     case -4:
//                         this._builder+="ab";
//                         break;
//                     case -3:
//                         this._builder+="eb";
//                         break;
//                     case -2:
//                         this._builder+="bb";
//                         break;
//                     case -1:
//                         this._builder+="f";
//                         break;
//                     case 0:
//                         this._builder+="c";
//                         break;
//                     case 1:
//                         this._builder+="g";
//                         break;
//                     case 2:
//                         this._builder+="d";
//                         break;
//                     case 3:
//                         this._builder+="a";
//                         break;
//                     case 4:
//                         this._builder+="e";
//                         break;
//                     case 5:
//                         this._builder+="b";
//                         break;
//                     case 6:
//                         this._builder+="f#";
//                         break;
//                     case 7:
//                         this._builder+="c#";
//                         break;
//                 }
//                 this._builder+=""+'\r\n';
//             }
//             if (bar.Clef != previousBar.Clef){
//                 this._builder+="\\clef ";
//                 switch (bar.Clef){
//                     case AlphaTab.Model.Clef.Neutral:
//                         this._builder+="n";
//                         break;
//                     case AlphaTab.Model.Clef.C3:
//                         this._builder+="c3";
//                         break;
//                     case AlphaTab.Model.Clef.C4:
//                         this._builder+="c4";
//                         break;
//                     case AlphaTab.Model.Clef.F4:
//                         this._builder+="f4";
//                         break;
//                     case AlphaTab.Model.Clef.G2:
//                         this._builder+="g2";
//                         break;
//                 }
//                 this._builder+=""+'\r\n';
//             }
//             if (masterBar.TempoAutomation != null){
//                 this._builder+="\\tempo ";
//                 this._builder+=masterBar.TempoAutomation.Value;
//                 this._builder+=""+'\r\n';
//             }
//         }
//         if (masterBar.IsRepeatStart){
//             this._builder+="\\ro ";
//             this._builder+=""+'\r\n';
//         }
//         if (masterBar.get_IsRepeatEnd()){
//             this._builder+="\\rc ";
//             this._builder+=masterBar.RepeatCount + 1;
//             this._builder+=""+'\r\n';
//         }
//     }
// };
