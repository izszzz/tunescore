import { Prisma } from "@prisma/client";
import { localeDummies } from "./common";

const musics: Prisma.Enumerable<Prisma.MusicCreateManyInput> = [
  {
    title: { ja: "日本語のみ" },
    score: "",
    visibility: "PUBLIC",
    type: "ORIGINAL",
  },
  {
    title: { en: "only engilish" },
    score: "",
    visibility: "PUBLIC",
    type: "ORIGINAL",
  },
  {
    title: {
      ja: "日本語と英語",
      en: "english and japanese",
    },
    score: "",
    visibility: "PUBLIC",
    type: "ORIGINAL",
  },
  {
    title: { ja: "スコア" },
    score: "1.1 1.2 1.3 2.5",
    visibility: "PUBLIC",
    type: "ORIGINAL",
  },
  ...(localeDummies<Prisma.MusicCreateManyInput>(10, {
    visibility: "PUBLIC",
    type: "ORIGINAL",
    score: "",
  }) as Prisma.MusicCreateManyInput[]),
];
export default musics;
