import { z } from 'zod';
import { BandCreateWithoutBookmarksInputObjectSchema } from './BandCreateWithoutBookmarksInput.schema';
import { BandUncheckedCreateWithoutBookmarksInputObjectSchema } from './BandUncheckedCreateWithoutBookmarksInput.schema';
import { BandCreateOrConnectWithoutBookmarksInputObjectSchema } from './BandCreateOrConnectWithoutBookmarksInput.schema';
import { BandUpsertWithoutBookmarksInputObjectSchema } from './BandUpsertWithoutBookmarksInput.schema';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';
import { BandUpdateWithoutBookmarksInputObjectSchema } from './BandUpdateWithoutBookmarksInput.schema';
import { BandUncheckedUpdateWithoutBookmarksInputObjectSchema } from './BandUncheckedUpdateWithoutBookmarksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUpdateOneWithoutBookmarksNestedInput> = z
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
    upsert: z
      .lazy(() => BandUpsertWithoutBookmarksInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => BandWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => BandUpdateWithoutBookmarksInputObjectSchema),
        z.lazy(() => BandUncheckedUpdateWithoutBookmarksInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const BandUpdateOneWithoutBookmarksNestedInputObjectSchema = Schema;
