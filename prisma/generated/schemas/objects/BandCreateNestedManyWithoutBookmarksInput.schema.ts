import { z } from 'zod';
import { BandCreateWithoutBookmarksInputObjectSchema } from './BandCreateWithoutBookmarksInput.schema';
import { BandUncheckedCreateWithoutBookmarksInputObjectSchema } from './BandUncheckedCreateWithoutBookmarksInput.schema';
import { BandCreateOrConnectWithoutBookmarksInputObjectSchema } from './BandCreateOrConnectWithoutBookmarksInput.schema';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandCreateNestedManyWithoutBookmarksInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => BandCreateWithoutBookmarksInputObjectSchema),
            z.lazy(() => BandCreateWithoutBookmarksInputObjectSchema).array(),
            z.lazy(() => BandUncheckedCreateWithoutBookmarksInputObjectSchema),
            z
              .lazy(() => BandUncheckedCreateWithoutBookmarksInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => BandCreateOrConnectWithoutBookmarksInputObjectSchema),
            z
              .lazy(() => BandCreateOrConnectWithoutBookmarksInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => BandWhereUniqueInputObjectSchema),
            z.lazy(() => BandWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const BandCreateNestedManyWithoutBookmarksInputObjectSchema = Schema;
