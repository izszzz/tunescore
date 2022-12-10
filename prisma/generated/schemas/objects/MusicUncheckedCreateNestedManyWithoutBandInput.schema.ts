import { z } from 'zod';
import { MusicCreateWithoutBandInputObjectSchema } from './MusicCreateWithoutBandInput.schema';
import { MusicUncheckedCreateWithoutBandInputObjectSchema } from './MusicUncheckedCreateWithoutBandInput.schema';
import { MusicCreateOrConnectWithoutBandInputObjectSchema } from './MusicCreateOrConnectWithoutBandInput.schema';
import { MusicCreateManyBandInputEnvelopeObjectSchema } from './MusicCreateManyBandInputEnvelope.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUncheckedCreateNestedManyWithoutBandInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MusicCreateWithoutBandInputObjectSchema),
          z.lazy(() => MusicCreateWithoutBandInputObjectSchema).array(),
          z.lazy(() => MusicUncheckedCreateWithoutBandInputObjectSchema),
          z
            .lazy(() => MusicUncheckedCreateWithoutBandInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MusicCreateOrConnectWithoutBandInputObjectSchema),
          z
            .lazy(() => MusicCreateOrConnectWithoutBandInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MusicCreateManyBandInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => MusicWhereUniqueInputObjectSchema),
          z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MusicUncheckedCreateNestedManyWithoutBandInputObjectSchema =
  Schema;
