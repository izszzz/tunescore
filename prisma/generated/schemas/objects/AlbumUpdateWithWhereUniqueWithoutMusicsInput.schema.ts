import { z } from 'zod';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumUpdateWithoutMusicsInputObjectSchema } from './AlbumUpdateWithoutMusicsInput.schema';
import { AlbumUncheckedUpdateWithoutMusicsInputObjectSchema } from './AlbumUncheckedUpdateWithoutMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUpdateWithWhereUniqueWithoutMusicsInput> = z
  .object({
    where: z.lazy(() => AlbumWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => AlbumUpdateWithoutMusicsInputObjectSchema),
      z.lazy(() => AlbumUncheckedUpdateWithoutMusicsInputObjectSchema),
    ]),
  })
  .strict();

export const AlbumUpdateWithWhereUniqueWithoutMusicsInputObjectSchema = Schema;
