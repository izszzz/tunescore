import { z } from 'zod';
import { MusicCreateWithoutBandInputObjectSchema } from './MusicCreateWithoutBandInput.schema';
import { MusicUncheckedCreateWithoutBandInputObjectSchema } from './MusicUncheckedCreateWithoutBandInput.schema';
import { MusicCreateOrConnectWithoutBandInputObjectSchema } from './MusicCreateOrConnectWithoutBandInput.schema';
import { MusicCreateManyBandInputEnvelopeObjectSchema } from './MusicCreateManyBandInputEnvelope.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateNestedManyWithoutBandInput> = z.union(
  [
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
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => MusicCreateOrConnectWithoutBandInputObjectSchema),
            z
              .lazy(() => MusicCreateOrConnectWithoutBandInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => MusicCreateManyBandInputEnvelopeObjectSchema)
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
  ],
);

export const MusicCreateNestedManyWithoutBandInputObjectSchema = Schema;
