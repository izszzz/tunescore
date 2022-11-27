import { z } from 'zod';
import { MusicCreateWithoutUserInputObjectSchema } from './MusicCreateWithoutUserInput.schema';
import { MusicUncheckedCreateWithoutUserInputObjectSchema } from './MusicUncheckedCreateWithoutUserInput.schema';
import { MusicCreateOrConnectWithoutUserInputObjectSchema } from './MusicCreateOrConnectWithoutUserInput.schema';
import { MusicCreateManyUserInputEnvelopeObjectSchema } from './MusicCreateManyUserInputEnvelope.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUncheckedCreateNestedManyWithoutUserInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => MusicCreateWithoutUserInputObjectSchema),
            z.lazy(() => MusicCreateWithoutUserInputObjectSchema).array(),
            z.lazy(() => MusicUncheckedCreateWithoutUserInputObjectSchema),
            z
              .lazy(() => MusicUncheckedCreateWithoutUserInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => MusicCreateOrConnectWithoutUserInputObjectSchema),
            z
              .lazy(() => MusicCreateOrConnectWithoutUserInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => MusicCreateManyUserInputEnvelopeObjectSchema)
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

export const MusicUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
