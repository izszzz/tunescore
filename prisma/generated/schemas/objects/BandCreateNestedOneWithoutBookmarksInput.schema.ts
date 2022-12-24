import { z } from 'zod';
import { BandCreateWithoutBookmarksInputObjectSchema } from './BandCreateWithoutBookmarksInput.schema';
import { BandUncheckedCreateWithoutBookmarksInputObjectSchema } from './BandUncheckedCreateWithoutBookmarksInput.schema';
import { BandCreateOrConnectWithoutBookmarksInputObjectSchema } from './BandCreateOrConnectWithoutBookmarksInput.schema';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandCreateNestedOneWithoutBookmarksInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => BandCreateWithoutBookmarksInputObjectSchema),
        z.lazy(() => BandUncheckedCreateWithoutBookmarksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => BandCreateOrConnectWithoutBookmarksInputObjectSchema)
      .optional(),
    connect: z.lazy(() => BandWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const BandCreateNestedOneWithoutBookmarksInputObjectSchema = Schema;
