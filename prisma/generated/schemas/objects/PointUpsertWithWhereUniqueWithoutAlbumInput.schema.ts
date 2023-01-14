import { z } from 'zod';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointUpdateWithoutAlbumInputObjectSchema } from './PointUpdateWithoutAlbumInput.schema';
import { PointUncheckedUpdateWithoutAlbumInputObjectSchema } from './PointUncheckedUpdateWithoutAlbumInput.schema';
import { PointCreateWithoutAlbumInputObjectSchema } from './PointCreateWithoutAlbumInput.schema';
import { PointUncheckedCreateWithoutAlbumInputObjectSchema } from './PointUncheckedCreateWithoutAlbumInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUpsertWithWhereUniqueWithoutAlbumInput> = z
  .object({
    where: z.lazy(() => PointWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PointUpdateWithoutAlbumInputObjectSchema),
      z.lazy(() => PointUncheckedUpdateWithoutAlbumInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PointCreateWithoutAlbumInputObjectSchema),
      z.lazy(() => PointUncheckedCreateWithoutAlbumInputObjectSchema),
    ]),
  })
  .strict();

export const PointUpsertWithWhereUniqueWithoutAlbumInputObjectSchema = Schema;
