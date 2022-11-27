import { z } from 'zod';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumUpdateWithoutBandInputObjectSchema } from './AlbumUpdateWithoutBandInput.schema';
import { AlbumUncheckedUpdateWithoutBandInputObjectSchema } from './AlbumUncheckedUpdateWithoutBandInput.schema';
import { AlbumCreateWithoutBandInputObjectSchema } from './AlbumCreateWithoutBandInput.schema';
import { AlbumUncheckedCreateWithoutBandInputObjectSchema } from './AlbumUncheckedCreateWithoutBandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUpsertWithWhereUniqueWithoutBandInput> = z
  .object({
    where: z.lazy(() => AlbumWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => AlbumUpdateWithoutBandInputObjectSchema),
      z.lazy(() => AlbumUncheckedUpdateWithoutBandInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AlbumCreateWithoutBandInputObjectSchema),
      z.lazy(() => AlbumUncheckedCreateWithoutBandInputObjectSchema),
    ]),
  })
  .strict();

export const AlbumUpsertWithWhereUniqueWithoutBandInputObjectSchema = Schema;
