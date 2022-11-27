import { z } from 'zod';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumCreateWithoutBandInputObjectSchema } from './AlbumCreateWithoutBandInput.schema';
import { AlbumUncheckedCreateWithoutBandInputObjectSchema } from './AlbumUncheckedCreateWithoutBandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumCreateOrConnectWithoutBandInput> = z
  .object({
    where: z.lazy(() => AlbumWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AlbumCreateWithoutBandInputObjectSchema),
      z.lazy(() => AlbumUncheckedCreateWithoutBandInputObjectSchema),
    ]),
  })
  .strict();

export const AlbumCreateOrConnectWithoutBandInputObjectSchema = Schema;
