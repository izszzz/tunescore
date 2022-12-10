import { Prisma } from '@prisma/client';
import { localeDummies } from './common';
const artists: Prisma.Enumerable<Prisma.ArtistCreateManyInput> = [
  ...(localeDummies(10) as Prisma.ArtistCreateManyInput[]),
];
export default artists;
