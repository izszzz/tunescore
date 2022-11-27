import { z } from 'zod';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';
import { BandCreateWithoutBookmarksInputObjectSchema } from './BandCreateWithoutBookmarksInput.schema';
import { BandUncheckedCreateWithoutBookmarksInputObjectSchema } from './BandUncheckedCreateWithoutBookmarksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandCreateOrConnectWithoutBookmarksInput> = z
  .object({
    where: z.lazy(() => BandWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BandCreateWithoutBookmarksInputObjectSchema),
      z.lazy(() => BandUncheckedCreateWithoutBookmarksInputObjectSchema),
    ]),
  })
  .strict();

export const BandCreateOrConnectWithoutBookmarksInputObjectSchema = Schema;
