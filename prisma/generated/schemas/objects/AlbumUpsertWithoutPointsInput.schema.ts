import { z } from 'zod';
import { AlbumUpdateWithoutPointsInputObjectSchema } from './AlbumUpdateWithoutPointsInput.schema';
import { AlbumUncheckedUpdateWithoutPointsInputObjectSchema } from './AlbumUncheckedUpdateWithoutPointsInput.schema';
import { AlbumCreateWithoutPointsInputObjectSchema } from './AlbumCreateWithoutPointsInput.schema';
import { AlbumUncheckedCreateWithoutPointsInputObjectSchema } from './AlbumUncheckedCreateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUpsertWithoutPointsInput> = z
  .object({
    update: z.union([
      z.lazy(() => AlbumUpdateWithoutPointsInputObjectSchema),
      z.lazy(() => AlbumUncheckedUpdateWithoutPointsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AlbumCreateWithoutPointsInputObjectSchema),
      z.lazy(() => AlbumUncheckedCreateWithoutPointsInputObjectSchema),
    ]),
  })
  .strict();

export const AlbumUpsertWithoutPointsInputObjectSchema = Schema;
