import { z } from 'zod';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointCreateWithoutAlbumInputObjectSchema } from './PointCreateWithoutAlbumInput.schema';
import { PointUncheckedCreateWithoutAlbumInputObjectSchema } from './PointUncheckedCreateWithoutAlbumInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointCreateOrConnectWithoutAlbumInput> = z
  .object({
    where: z.lazy(() => PointWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PointCreateWithoutAlbumInputObjectSchema),
      z.lazy(() => PointUncheckedCreateWithoutAlbumInputObjectSchema),
    ]),
  })
  .strict();

export const PointCreateOrConnectWithoutAlbumInputObjectSchema = Schema;
