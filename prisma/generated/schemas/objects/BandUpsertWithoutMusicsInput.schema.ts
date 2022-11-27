import { z } from 'zod';
import { BandUpdateWithoutMusicsInputObjectSchema } from './BandUpdateWithoutMusicsInput.schema';
import { BandUncheckedUpdateWithoutMusicsInputObjectSchema } from './BandUncheckedUpdateWithoutMusicsInput.schema';
import { BandCreateWithoutMusicsInputObjectSchema } from './BandCreateWithoutMusicsInput.schema';
import { BandUncheckedCreateWithoutMusicsInputObjectSchema } from './BandUncheckedCreateWithoutMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUpsertWithoutMusicsInput> = z
  .object({
    update: z.union([
      z.lazy(() => BandUpdateWithoutMusicsInputObjectSchema),
      z.lazy(() => BandUncheckedUpdateWithoutMusicsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => BandCreateWithoutMusicsInputObjectSchema),
      z.lazy(() => BandUncheckedCreateWithoutMusicsInputObjectSchema),
    ]),
  })
  .strict();

export const BandUpsertWithoutMusicsInputObjectSchema = Schema;
