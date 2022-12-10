import { Prisma } from '@prisma/client';
import { localeDummies } from './common';
const bands: Prisma.Enumerable<Prisma.BandCreateManyInput> = [
  ...(localeDummies(10) as Prisma.BandCreateManyInput[]),
];

export default bands;
