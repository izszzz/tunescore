import { z } from 'zod';
import { AlbumUpdateWithoutTagMapsInputObjectSchema } from './AlbumUpdateWithoutTagMapsInput.schema';
import { AlbumUncheckedUpdateWithoutTagMapsInputObjectSchema } from './AlbumUncheckedUpdateWithoutTagMapsInput.schema';
import { AlbumCreateWithoutTagMapsInputObjectSchema } from './AlbumCreateWithoutTagMapsInput.schema';
import { AlbumUncheckedCreateWithoutTagMapsInputObjectSchema } from './AlbumUncheckedCreateWithoutTagMapsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUpsertWithoutTagMapsInput> = z
  .object({
    update: z.union([
      z.lazy(() => AlbumUpdateWithoutTagMapsInputObjectSchema),
      z.lazy(() => AlbumUncheckedUpdateWithoutTagMapsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AlbumCreateWithoutTagMapsInputObjectSchema),
      z.lazy(() => AlbumUncheckedCreateWithoutTagMapsInputObjectSchema),
    ]),
  })
  .strict();

export const AlbumUpsertWithoutTagMapsInputObjectSchema = Schema;
