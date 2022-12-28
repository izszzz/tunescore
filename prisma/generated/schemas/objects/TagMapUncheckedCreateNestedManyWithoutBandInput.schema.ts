import { z } from 'zod';
import { TagMapCreateWithoutBandInputObjectSchema } from './TagMapCreateWithoutBandInput.schema';
import { TagMapUncheckedCreateWithoutBandInputObjectSchema } from './TagMapUncheckedCreateWithoutBandInput.schema';
import { TagMapCreateOrConnectWithoutBandInputObjectSchema } from './TagMapCreateOrConnectWithoutBandInput.schema';
import { TagMapCreateManyBandInputEnvelopeObjectSchema } from './TagMapCreateManyBandInputEnvelope.schema';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapUncheckedCreateNestedManyWithoutBandInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TagMapCreateWithoutBandInputObjectSchema),
          z.lazy(() => TagMapCreateWithoutBandInputObjectSchema).array(),
          z.lazy(() => TagMapUncheckedCreateWithoutBandInputObjectSchema),
          z
            .lazy(() => TagMapUncheckedCreateWithoutBandInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TagMapCreateOrConnectWithoutBandInputObjectSchema),
          z
            .lazy(() => TagMapCreateOrConnectWithoutBandInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TagMapCreateManyBandInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TagMapWhereUniqueInputObjectSchema),
          z.lazy(() => TagMapWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TagMapUncheckedCreateNestedManyWithoutBandInputObjectSchema =
  Schema;
