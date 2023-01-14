import { z } from 'zod';
import { BandUpdateWithoutPointsInputObjectSchema } from './BandUpdateWithoutPointsInput.schema';
import { BandUncheckedUpdateWithoutPointsInputObjectSchema } from './BandUncheckedUpdateWithoutPointsInput.schema';
import { BandCreateWithoutPointsInputObjectSchema } from './BandCreateWithoutPointsInput.schema';
import { BandUncheckedCreateWithoutPointsInputObjectSchema } from './BandUncheckedCreateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUpsertWithoutPointsInput> = z
  .object({
    update: z.union([
      z.lazy(() => BandUpdateWithoutPointsInputObjectSchema),
      z.lazy(() => BandUncheckedUpdateWithoutPointsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => BandCreateWithoutPointsInputObjectSchema),
      z.lazy(() => BandUncheckedCreateWithoutPointsInputObjectSchema),
    ]),
  })
  .strict();

export const BandUpsertWithoutPointsInputObjectSchema = Schema;
