import { z } from 'zod';
import { MusicCreateWithoutBookmarksInputObjectSchema } from './MusicCreateWithoutBookmarksInput.schema';
import { MusicUncheckedCreateWithoutBookmarksInputObjectSchema } from './MusicUncheckedCreateWithoutBookmarksInput.schema';
import { MusicCreateOrConnectWithoutBookmarksInputObjectSchema } from './MusicCreateOrConnectWithoutBookmarksInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateNestedManyWithoutBookmarksInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => MusicCreateWithoutBookmarksInputObjectSchema),
            z.lazy(() => MusicCreateWithoutBookmarksInputObjectSchema).array(),
            z.lazy(() => MusicUncheckedCreateWithoutBookmarksInputObjectSchema),
            z
              .lazy(() => MusicUncheckedCreateWithoutBookmarksInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => MusicCreateOrConnectWithoutBookmarksInputObjectSchema),
            z
              .lazy(() => MusicCreateOrConnectWithoutBookmarksInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => MusicWhereUniqueInputObjectSchema),
            z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const MusicCreateNestedManyWithoutBookmarksInputObjectSchema = Schema;
