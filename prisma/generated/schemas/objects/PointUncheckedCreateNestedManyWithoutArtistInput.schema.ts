import { z } from 'zod';
import { PointCreateWithoutArtistInputObjectSchema } from './PointCreateWithoutArtistInput.schema';
import { PointUncheckedCreateWithoutArtistInputObjectSchema } from './PointUncheckedCreateWithoutArtistInput.schema';
import { PointCreateOrConnectWithoutArtistInputObjectSchema } from './PointCreateOrConnectWithoutArtistInput.schema';
import { PointCreateManyArtistInputEnvelopeObjectSchema } from './PointCreateManyArtistInputEnvelope.schema';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUncheckedCreateNestedManyWithoutArtistInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PointCreateWithoutArtistInputObjectSchema),
          z.lazy(() => PointCreateWithoutArtistInputObjectSchema).array(),
          z.lazy(() => PointUncheckedCreateWithoutArtistInputObjectSchema),
          z
            .lazy(() => PointUncheckedCreateWithoutArtistInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PointCreateOrConnectWithoutArtistInputObjectSchema),
          z
            .lazy(() => PointCreateOrConnectWithoutArtistInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PointCreateManyArtistInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PointWhereUniqueInputObjectSchema),
          z.lazy(() => PointWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PointUncheckedCreateNestedManyWithoutArtistInputObjectSchema =
  Schema;
