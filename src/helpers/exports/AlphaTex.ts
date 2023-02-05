import { model as Model } from "@coderline/alphatab";
import { match, P } from "ts-pattern";
export const exportTex = (score: Model.Score) => {
  let result = "";
  const [tracks, metaData] = compileScore(score);
  result += metaData;
  result += tracks
    .map((track) => {
      let result = "";
      const [staves, metaData] = compileTrack(track);
      result += metaData;
      result += staves
        .map((stave) => {
          let result = "";
          const [bars, metaData] = compileStave(stave);
          result += metaData;
          bars
            .map((bar, i) => {
              let result = "";
              if (i > 0) return " | \r\n";
              const [voices, metaData] = compileBar(bar);
              voices
                .map((voice) => {
                  voice.beats
                    .map((beat) => {
                      let result = "";
                      const [notes, metaData] = compileBeat(beat);
                      result += metaData;
                      result += `${
                        beat.isRest
                          ? "r"
                          : notes.length > 1
                          ? `(${notes.map((note) => compileNote(note))})`
                          : notes.map((note) => compileNote(note).join(""))
                      }.${beat.duration} `;
                      return result;
                    })
                    .join("");
                })
                .join("");
              result += metaData;
              return result;
            })
            .join("");
          return result;
        })
        .join("");
      return result;
    })
    .join("");

  return result;
};

const compileScore = (score: Model.Score): [Model.Track[], string] => [
  score.tracks,
  createScoreMetaData(score),
];

const compileTrack = (track: Model.Track): [Model.Staff[], string] => [
  track.staves,
  createTrackMetaData(track),
];

const compileStave = (stave: Model.Staff): [Model.Bar[], string] => [
  stave.bars,
  createStaveMetaData(stave),
];

const compileBar = (bar: Model.Bar): [Model.Voice[], string] => [
  bar.voices,
  createBarMetaData(bar),
];

const compileBeat = (beat: Model.Beat): [Model.Note[], string] => {
  const beatEffects = addBeatEffects(beat);
  const metaData = beatEffects ? `{${beatEffects}}` : "";
  return [beat.notes, metaData];
};

export const compileNote = (note: Model.Note) => {
  let result = "";
  if (note.isDead) result += "x";
  else if (note.isTieDestination) result += "-";
  else
    result += `${note.fret}.${
      note.string +
      (note.beat?.voice.bar.staff.stringTuning.tunings.length || 0) +
      1
    }`;
  const noteEffects = addNoteEffects(note);
  const metaData = noteEffects ? `{${noteEffects}}` : "";
  return [result, metaData];
};

export const addNoteEffects = (note: Model.Note) => {
  let result = "";
  result += match(note.harmonicType)
    .with(0, () => "")
    .with(1, () => "nh ")
    .with(2, () => "ah ")
    .with(3, () => "ph ")
    .with(4, () => "th ")
    .with(5, () => "sh")
    .with(6, () => "fh")
    .exhaustive();
  result += match(note.slideOutType)
    .with(0, () => "")
    .with(1, () => "ss ")
    .with(2, () => "sl ")
    .with(3, () => "sol ")
    .with(4, () => "sod ")
    .with(5, () => "psd ")
    .with(6, () => "psu ")
    .exhaustive();
  result += match(note.slideInType)
    .with(0, () => "")
    .with(1, () => "sib ")
    .with(2, () => "sia ")
    .exhaustive();
  result += match(note.accentuated)
    .with(0, () => "")
    .with(1, () => "ac ")
    .with(2, () => "hac ")
    .exhaustive();
  if (note.hasBend) {
    result += createStringMetaData(
      [
        "b",
        "(",
        ...note.bendPoints.map(
          (bendPoint) => `${bendPoint.offset} ${bendPoint.value}`
        ),
        ")",
      ],
      false
    );
  }
  if (note.isTrill)
    result += createStringMetaData(
      ["tr", String(note.trillFret), String(note.trillSpeed)],
      false
    );
  if (note.vibrato != Model.VibratoType.None) result += "v ";
  if (note.isHammerPullOrigin) result += "h ";
  if (note.isGhost) result += "g ";
  if (note.isPalmMute) result += "pm ";
  if (note.isStaccato) result += "st ";
  if (note.isLetRing) result += "lr ";
  match(note.leftHandFinger)
    .with(P.union(-2, -1), () => null)
    .with(
      P.union(1, 2, 3, 4),
      (leftHandFinger) => (result += leftHandFinger + 1)
    );
  match(note.rightHandFinger)
    .with(P.union(-2, -1), () => null)
    .with(
      P.union(1, 2, 3, 4),
      (rightHandFinger) => (result += rightHandFinger + 1)
    );

  return result;
};

const addBeatEffects = (beat: Model.Beat) => {
  let result = "";
  result += match(beat.graceType)
    .with(0, () => "")
    .with(1, () => "gr ob ")
    .with(2, () => "gr ")
    .with(3, () => "")
    .exhaustive();
  result += match(beat.dots)
    .with(1, () => "d ")
    .with(2, () => "dd ")
    .otherwise(() => 0);
  result += match(beat.pickStroke)
    .with(0, () => "")
    .with(1, () => "su ")
    .with(2, () => "sd ")
    .exhaustive();
  if (beat.hasTuplet) {
    const tupletValue = match(beat.tupletDenominator)
      .with(P.union(3, 2), () => 3)
      .with(P.union(5, 4), () => 5)
      .with(P.union(6, 4), () => 6)
      .with(P.union(7, 4), () => 7)
      .with(P.union(9, 8), () => 7)
      .with(P.union(10, 8), () => 10)
      .with(P.union(12, 8), () => 12)
      .otherwise(() => 0);
    if (tupletValue != 0) {
      result += createStringMetaData(["tu", String(tupletValue)], false);
    }
  }
  if (beat.hasWhammyBar) {
    result += createStringMetaData(
      [
        "tbe",
        "(",
        ...beat.whammyBarPoints.map(
          (whammyBarPoint) => `${whammyBarPoint.offset} ${whammyBarPoint.value}`
        ),
        ")",
      ],
      false
    );
  }
  if (beat.isTremolo) {
    result += createStringMetaData(
      ["tp", String(beat.tremoloSpeed || 8)],
      false
    );
  }
  if (beat.fadeIn) result += "f ";
  if (beat.vibrato != Model.VibratoType.None) result += "v ";
  if (beat.slap) result += "s ";
  if (beat.pop) result += "p ";
  return result;
};
const createBarMetaData = (bar: Model.Bar) => {
  const { masterBar } = bar;
  let result = "";
  if (masterBar.index > 0) {
    const previousMasterBar = masterBar.previousMasterBar;
    const previousBar = bar.previousBar;
    if (
      previousMasterBar?.timeSignatureDenominator !=
        masterBar.timeSignatureDenominator ||
      previousMasterBar?.timeSignatureNumerator !=
        masterBar.timeSignatureNumerator
    ) {
      result += createStringMetaData([
        "ts",
        String(masterBar.timeSignatureNumerator),
        String(masterBar.timeSignatureDenominator),
      ]);
    }
    if (previousMasterBar?.keySignature != masterBar.keySignature) {
      const { keySignature } = masterBar;
      result += createStringMetaData([
        "ks",
        match(keySignature)
          .with(-7, () => "cb")
          .with(-6, () => "gb")
          .with(-5, () => "db")
          .with(-4, () => "ab")
          .with(-3, () => "eb")
          .with(-2, () => "bb")
          .with(-1, () => "f")
          .with(0, () => "c")
          .with(1, () => "g")
          .with(2, () => "d")
          .with(3, () => "a")
          .with(4, () => "e")
          .with(5, () => "b")
          .with(6, () => "f#")
          .with(7, () => "c#")
          .exhaustive(),
      ]);
    }
    if (bar.clef != previousBar?.clef) {
      result += createStringMetaData([
        "clef",
        match(bar.clef)
          .with(0, () => "n")
          .with(1, () => "c3")
          .with(2, () => "c4")
          .with(3, () => "f4")
          .with(4, () => "g2")
          .exhaustive(),
      ]);
    }
    if (masterBar.tempoAutomation != null) {
      result += createStringMetaData([
        "tempo",
        String(masterBar.tempoAutomation.value),
      ]);
    }
  }
  if (masterBar.isRepeatStart) result += createStringMetaData(["ro"]);
  if (masterBar.isRepeatEnd)
    result += createStringMetaData(["rc", String(masterBar.repeatCount + 1)]);

  return result;
};
const createStaveMetaData = (stave: Model.Staff) =>
  [
    createStringMetaData(["staff"], false),
    createStringMetaData(["tuning", getTuning(stave.stringTuning)], false),
    createStringMetaData(["capo", String(stave.capo)], false),
    createStringMetaData([
      "instrument",
      String(stave.track.playbackInfo.program),
    ]),
  ].join(" ");
const createScoreMetaData = (score: Model.Score) =>
  [
    createStringMetaData(["title", score.title]),
    createStringMetaData(["subtitle", score.subTitle]),
    createStringMetaData(["artist", score.artist]),
    createStringMetaData(["album", score.album]),
    createStringMetaData(["words", score.words]),
    createStringMetaData(["music", score.music]),
    createStringMetaData(["copyright", score.copyright]),
    createStringMetaData(["tempo", String(score.tempo)]),
  ].join("");
const createTrackMetaData = (track: Model.Track) =>
  createStringMetaData(["track", track.name, track.shortName]);
const getTuning = (tuning: Model.Tuning) =>
  tuning.tunings
    .map((tuning) => Model.Tuning.getTextForTuning(tuning, true))
    .join(" ");
export const createStringMetaData = (
  [key, ...values]: [string, ...string[]],
  newLine = true
) =>
  `\\${key}${values.map((value) => ` ${value}`).join("")}${
    newLine ? "\r\n" : ""
  }`;
