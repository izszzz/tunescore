import { z } from 'zod';
import { MusicCreateWithoutBandInputObjectSchema } from './MusicCreateWithoutBandInput.schema';
import { MusicUncheckedCreateWithoutBandInputObjectSchema } from './MusicUncheckedCreateWithoutBandInput.schema';
import { MusicCreateOrConnectWithoutBandInputObjectSchema } from './MusicCreateOrConnectWithoutBandInput.schema';
import { MusicUpsertWithWhereUniqueWithoutBandInputObjectSchema } from './MusicUpsertWithWhereUniqueWithoutBandInput.schema';
import { MusicCreateManyBandInputEnvelopeObjectSchema } from './MusicCreateManyBandInputEnvelope.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithWhereUniqueWithoutBandInputObjectSchema } from './MusicUpdateWithWhereUniqueWithoutBandInput.schema';
import { MusicUpdateManyWithWhereWithoutBandInputObjectSchema } from './MusicUpdateManyWithWhereWithoutBandInput.schema';
import { MusicScalarWhereInputObjectSchema } from './MusicScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateManyWithoutBandNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MusicCreateWithoutBandInputObjectSchema),
        z.lazy(() => MusicCreateWithoutBandInputObjectSchema).array(),
        z.lazy(() => MusicUncheckedCreateWithoutBandInputObjectSchema),
        z.lazy(() => MusicUncheckedCreateWithoutBandInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => MusicCreateOrConnectWithoutBandInputObjectSchema),
        z.lazy(() => MusicCreateOrConnectWithoutBandInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => MusicUpsertWithWhereUniqueWithoutBandInputObjectSchema),
        z
          .lazy(() => MusicUpsertWithWhereUniqueWithoutBandInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => MusicCreateManyBandInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => MusicWhereUniqueInputObjectSchema),
        z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => MusicWhereUniqueInputObjectSchema),
        z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => MusicWhereUniqueInputObjectSchema),
        z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => MusicWhereUniqueInputObjectSchema),
        z.lazy(() => MusicWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => MusicUpdateWithWhereUniqueWithoutBandInputObjectSchema),
        z
          .lazy(() => MusicUpdateWithWhereUniqueWithoutBandInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => MusicUpdateManyWithWhereWithoutBandInputObjectSchema),
        z
          .lazy(() => MusicUpdateManyWithWhereWithoutBandInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => MusicScalarWhereInputObjectSchema),
        z.lazy(() => MusicScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const MusicUpdateManyWithoutBandNestedInputObjectSchema = Schema;
