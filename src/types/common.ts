import type { Artist, Band, Music, Prisma } from "@prisma/client";

export type Resource = Music | Artist | Band;
export type ResourceCreateInput =
  | Prisma.MusicCreateInput
  | Prisma.ArtistCreateInput
  | Prisma.BandCreateInput;
export type ResourceCreateManyInput =
  | Prisma.MusicCreateManyInput
  | Prisma.ArtistCreateManyInput
  | Prisma.BandCreateManyInput;
export type PrismaModelNameLowercase = Exclude<
  Lowercase<Prisma.ModelName>,
  | "user"
  | "account"
  | "session"
  | "verificationtoken"
  | "musiclink"
  | "bandlink"
  | "artistlink"
>;
