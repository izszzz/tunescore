import { z } from 'zod';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointUpdateWithoutArtistInputObjectSchema } from './PointUpdateWithoutArtistInput.schema';
import { PointUncheckedUpdateWithoutArtistInputObjectSchema } from './PointUncheckedUpdateWithoutArtistInput.schema';
import { PointCreateWithoutArtistInputObjectSchema } from './PointCreateWithoutArtistInput.schema';
import { PointUncheckedCreateWithoutArtistInputObjectSchema } from './PointUncheckedCreateWithoutArtistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUpsertWithWhereUniqueWithoutArtistInput> = z
  .object({
    where: z.lazy(() => PointWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PointUpdateWithoutArtistInputObjectSchema),
      z.lazy(() => PointUncheckedUpdateWithoutArtistInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PointCreateWithoutArtistInputObjectSchema),
      z.lazy(() => PointUncheckedCreateWithoutArtistInputObjectSchema),
    ]),
  })
  .strict();

export const PointUpsertWithWhereUniqueWithoutArtistInputObjectSchema = Schema;
