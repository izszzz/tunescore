import { z } from 'zod';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumUpdateWithoutMusicsInputObjectSchema } from './AlbumUpdateWithoutMusicsInput.schema';
import { AlbumUncheckedUpdateWithoutMusicsInputObjectSchema } from './AlbumUncheckedUpdateWithoutMusicsInput.schema';
import { AlbumCreateWithoutMusicsInputObjectSchema } from './AlbumCreateWithoutMusicsInput.schema';
import { AlbumUncheckedCreateWithoutMusicsInputObjectSchema } from './AlbumUncheckedCreateWithoutMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUpsertWithWhereUniqueWithoutMusicsInput> = z
  .object({
    where: z.lazy(() => AlbumWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => AlbumUpdateWithoutMusicsInputObjectSchema),
      z.lazy(() => AlbumUncheckedUpdateWithoutMusicsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AlbumCreateWithoutMusicsInputObjectSchema),
      z.lazy(() => AlbumUncheckedCreateWithoutMusicsInputObjectSchema),
    ]),
  })
  .strict();

export const AlbumUpsertWithWhereUniqueWithoutMusicsInputObjectSchema = Schema;
