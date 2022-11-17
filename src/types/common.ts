import {Artist, Band, Music, Prisma} from "@prisma/client"

export type Resource = Music | Artist | Band
export type ResourceCreateInput =
  | Prisma.MusicCreateInput
  | Prisma.ArtistCreateInput
  | Prisma.BandCreateInput
export type ResourceCreateManyInput =
  | Prisma.MusicCreateManyInput
  | Prisma.ArtistCreateManyInput
  | Prisma.BandCreateManyInput
// TODO: add "album"
export type PrismaModelNameLowercase = Exclude<
  Lowercase<Prisma.ModelName>,
  "account" | "session" | "verificationtoken" | "album"
>
