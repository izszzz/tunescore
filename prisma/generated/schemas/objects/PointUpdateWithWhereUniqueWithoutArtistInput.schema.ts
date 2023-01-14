import { z } from 'zod';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointUpdateWithoutArtistInputObjectSchema } from './PointUpdateWithoutArtistInput.schema';
import { PointUncheckedUpdateWithoutArtistInputObjectSchema } from './PointUncheckedUpdateWithoutArtistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUpdateWithWhereUniqueWithoutArtistInput> = z
  .object({
    where: z.lazy(() => PointWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PointUpdateWithoutArtistInputObjectSchema),
      z.lazy(() => PointUncheckedUpdateWithoutArtistInputObjectSchema),
    ]),
  })
  .strict();

export const PointUpdateWithWhereUniqueWithoutArtistInputObjectSchema = Schema;
