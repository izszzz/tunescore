import { z } from 'zod';
import { PullCreateWithoutMusicInputObjectSchema } from './PullCreateWithoutMusicInput.schema';
import { PullUncheckedCreateWithoutMusicInputObjectSchema } from './PullUncheckedCreateWithoutMusicInput.schema';
import { PullCreateOrConnectWithoutMusicInputObjectSchema } from './PullCreateOrConnectWithoutMusicInput.schema';
import { PullCreateManyMusicInputEnvelopeObjectSchema } from './PullCreateManyMusicInputEnvelope.schema';
import { PullWhereUniqueInputObjectSchema } from './PullWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PullCreateNestedManyWithoutMusicInput> = z.union(
  [
    z
      .object({
        create: z
          .union([
            z.lazy(() => PullCreateWithoutMusicInputObjectSchema),
            z.lazy(() => PullCreateWithoutMusicInputObjectSchema).array(),
            z.lazy(() => PullUncheckedCreateWithoutMusicInputObjectSchema),
            z
              .lazy(() => PullUncheckedCreateWithoutMusicInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => PullCreateOrConnectWithoutMusicInputObjectSchema),
            z
              .lazy(() => PullCreateOrConnectWithoutMusicInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => PullCreateManyMusicInputEnvelopeObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => PullWhereUniqueInputObjectSchema),
            z.lazy(() => PullWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ],
);

export const PullCreateNestedManyWithoutMusicInputObjectSchema = Schema;
