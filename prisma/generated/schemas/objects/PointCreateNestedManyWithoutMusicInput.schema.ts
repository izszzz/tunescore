import { z } from 'zod';
import { PointCreateWithoutMusicInputObjectSchema } from './PointCreateWithoutMusicInput.schema';
import { PointUncheckedCreateWithoutMusicInputObjectSchema } from './PointUncheckedCreateWithoutMusicInput.schema';
import { PointCreateOrConnectWithoutMusicInputObjectSchema } from './PointCreateOrConnectWithoutMusicInput.schema';
import { PointCreateManyMusicInputEnvelopeObjectSchema } from './PointCreateManyMusicInputEnvelope.schema';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointCreateNestedManyWithoutMusicInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PointCreateWithoutMusicInputObjectSchema),
        z.lazy(() => PointCreateWithoutMusicInputObjectSchema).array(),
        z.lazy(() => PointUncheckedCreateWithoutMusicInputObjectSchema),
        z.lazy(() => PointUncheckedCreateWithoutMusicInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PointCreateOrConnectWithoutMusicInputObjectSchema),
        z.lazy(() => PointCreateOrConnectWithoutMusicInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PointCreateManyMusicInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => PointWhereUniqueInputObjectSchema),
        z.lazy(() => PointWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PointCreateNestedManyWithoutMusicInputObjectSchema = Schema;
