import {Prisma} from "@prisma/client"
import {localeDummies} from "./common"
const artists: Prisma.Enumerable<Prisma.ArtistCreateManyInput> = [
  {name: {ja: "TK"}},
  {name: {ja: "ピエール中野"}},
  {name: {ja: "345", en: "345"}},
  ...(localeDummies(10) as Prisma.ArtistCreateManyInput[]),
]
export default artists
