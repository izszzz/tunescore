import { z } from 'zod';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';
import { BandUpdateWithoutBookmarksInputObjectSchema } from './BandUpdateWithoutBookmarksInput.schema';
import { BandUncheckedUpdateWithoutBookmarksInputObjectSchema } from './BandUncheckedUpdateWithoutBookmarksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUpdateWithWhereUniqueWithoutBookmarksInput> =
  z
    .object({
      where: z.lazy(() => BandWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BandUpdateWithoutBookmarksInputObjectSchema),
        z.lazy(() => BandUncheckedUpdateWithoutBookmarksInputObjectSchema),
      ]),
    })
    .strict();

export const BandUpdateWithWhereUniqueWithoutBookmarksInputObjectSchema =
  Schema;
