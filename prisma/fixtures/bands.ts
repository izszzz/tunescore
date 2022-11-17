import {Prisma} from "@prisma/client"
import {localeDummies} from "./common"
const bands: Prisma.Enumerable<Prisma.BandCreateManyInput> = [
  {name: {en: "TK from Ling tosite sigure", ja: "TK from 凛として時雨"}},
  ...(localeDummies(10) as Prisma.BandCreateManyInput[]),
]

export default bands
