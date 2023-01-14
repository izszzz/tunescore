import { z } from 'zod';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointCreateWithoutArtistInputObjectSchema } from './PointCreateWithoutArtistInput.schema';
import { PointUncheckedCreateWithoutArtistInputObjectSchema } from './PointUncheckedCreateWithoutArtistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointCreateOrConnectWithoutArtistInput> = z
  .object({
    where: z.lazy(() => PointWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PointCreateWithoutArtistInputObjectSchema),
      z.lazy(() => PointUncheckedCreateWithoutArtistInputObjectSchema),
    ]),
  })
  .strict();

export const PointCreateOrConnectWithoutArtistInputObjectSchema = Schema;
