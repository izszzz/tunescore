import { z } from 'zod';
import { BandUpdateWithoutAlbumsInputObjectSchema } from './BandUpdateWithoutAlbumsInput.schema';
import { BandUncheckedUpdateWithoutAlbumsInputObjectSchema } from './BandUncheckedUpdateWithoutAlbumsInput.schema';
import { BandCreateWithoutAlbumsInputObjectSchema } from './BandCreateWithoutAlbumsInput.schema';
import { BandUncheckedCreateWithoutAlbumsInputObjectSchema } from './BandUncheckedCreateWithoutAlbumsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUpsertWithoutAlbumsInput> = z
  .object({
    update: z.union([
      z.lazy(() => BandUpdateWithoutAlbumsInputObjectSchema),
      z.lazy(() => BandUncheckedUpdateWithoutAlbumsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => BandCreateWithoutAlbumsInputObjectSchema),
      z.lazy(() => BandUncheckedCreateWithoutAlbumsInputObjectSchema),
    ]),
  })
  .strict();

export const BandUpsertWithoutAlbumsInputObjectSchema = Schema;
