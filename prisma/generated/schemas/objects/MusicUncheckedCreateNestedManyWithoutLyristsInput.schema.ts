import { z } from 'zod';
import { MusicCreateWithoutLyristsInputObjectSchema } from './MusicCreateWithoutLyristsInput.schema';
import { MusicUncheckedCreateWithoutLyristsInputObjectSchema } from './MusicUncheckedCreateWithoutLyristsInput.schema';
import { MusicCreateOrConnectWithoutLyristsInputObjectSchema } from './MusicCreateOrConnectWithoutLyristsInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUncheckedCreateNestedManyWithoutLyristsInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => MusicCreateWithoutLyristsInputObjectSchema),
            z.lazy(() => MusicCreateWithoutLyristsInputObjectSchema).array(),
            z.lazy(() => MusicUncheckedCreateWithoutLyristsInputObjectSchema),
            z
              .lazy(() => MusicUncheckedCreateWithoutLyristsInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => MusicCreateOrConnectWithoutLyristsInputObjectSchema),
            z
              .lazy(() => MusicCreateOrConnectWithoutLyristsInputObjectSchema)
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

export const MusicUncheckedCreateNestedManyWithoutLyristsInputObjectSchema =
  Schema;
