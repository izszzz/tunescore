import { z } from 'zod';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';
import { BandUpdateWithoutBookmarksInputObjectSchema } from './BandUpdateWithoutBookmarksInput.schema';
import { BandUncheckedUpdateWithoutBookmarksInputObjectSchema } from './BandUncheckedUpdateWithoutBookmarksInput.schema';
import { BandCreateWithoutBookmarksInputObjectSchema } from './BandCreateWithoutBookmarksInput.schema';
import { BandUncheckedCreateWithoutBookmarksInputObjectSchema } from './BandUncheckedCreateWithoutBookmarksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUpsertWithWhereUniqueWithoutBookmarksInput> =
  z
    .object({
      where: z.lazy(() => BandWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BandUpdateWithoutBookmarksInputObjectSchema),
        z.lazy(() => BandUncheckedUpdateWithoutBookmarksInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => BandCreateWithoutBookmarksInputObjectSchema),
        z.lazy(() => BandUncheckedCreateWithoutBookmarksInputObjectSchema),
      ]),
    })
    .strict();

export const BandUpsertWithWhereUniqueWithoutBookmarksInputObjectSchema =
  Schema;
