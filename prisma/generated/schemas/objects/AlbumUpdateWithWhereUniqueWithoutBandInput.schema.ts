import { z } from 'zod';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumUpdateWithoutBandInputObjectSchema } from './AlbumUpdateWithoutBandInput.schema';
import { AlbumUncheckedUpdateWithoutBandInputObjectSchema } from './AlbumUncheckedUpdateWithoutBandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUpdateWithWhereUniqueWithoutBandInput> = z
  .object({
    where: z.lazy(() => AlbumWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => AlbumUpdateWithoutBandInputObjectSchema),
      z.lazy(() => AlbumUncheckedUpdateWithoutBandInputObjectSchema),
    ]),
  })
  .strict();

export const AlbumUpdateWithWhereUniqueWithoutBandInputObjectSchema = Schema;
