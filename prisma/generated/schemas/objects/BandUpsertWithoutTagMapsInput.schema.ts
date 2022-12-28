import { z } from 'zod';
import { BandUpdateWithoutTagMapsInputObjectSchema } from './BandUpdateWithoutTagMapsInput.schema';
import { BandUncheckedUpdateWithoutTagMapsInputObjectSchema } from './BandUncheckedUpdateWithoutTagMapsInput.schema';
import { BandCreateWithoutTagMapsInputObjectSchema } from './BandCreateWithoutTagMapsInput.schema';
import { BandUncheckedCreateWithoutTagMapsInputObjectSchema } from './BandUncheckedCreateWithoutTagMapsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUpsertWithoutTagMapsInput> = z
  .object({
    update: z.union([
      z.lazy(() => BandUpdateWithoutTagMapsInputObjectSchema),
      z.lazy(() => BandUncheckedUpdateWithoutTagMapsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => BandCreateWithoutTagMapsInputObjectSchema),
      z.lazy(() => BandUncheckedCreateWithoutTagMapsInputObjectSchema),
    ]),
  })
  .strict();

export const BandUpsertWithoutTagMapsInputObjectSchema = Schema;
