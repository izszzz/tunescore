const musics = [
  {
    title: {ja: "日本語のみ"},
    score: "",
    visibility: "PUBLIC" as const,
    type: "ORIGINAL" as const,
  },
  {
    title: {en: "only engilish"},
    score: "",
    visibility: "PUBLIC" as const,
    type: "ORIGINAL" as const,
  },
  {
    title: {
      ja: "日本語と英語",
      en: "english and japanese",
    },
    score: "",
    visibility: "PUBLIC" as const,
    type: "ORIGINAL" as const,
  },
  {
    title: {ja: "スコア"},
    score: "1.1 1.2 1.3 2.5",
    visibility: "PUBLIC" as const,
    type: "ORIGINAL" as const,
  },
]
export default musics
