import { z } from 'zod';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointUpdateWithoutAlbumInputObjectSchema } from './PointUpdateWithoutAlbumInput.schema';
import { PointUncheckedUpdateWithoutAlbumInputObjectSchema } from './PointUncheckedUpdateWithoutAlbumInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUpdateWithWhereUniqueWithoutAlbumInput> = z
  .object({
    where: z.lazy(() => PointWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PointUpdateWithoutAlbumInputObjectSchema),
      z.lazy(() => PointUncheckedUpdateWithoutAlbumInputObjectSchema),
    ]),
  })
  .strict();

export const PointUpdateWithWhereUniqueWithoutAlbumInputObjectSchema = Schema;
