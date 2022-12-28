import { z } from 'zod';
import { TagMapCreateWithoutMusicInputObjectSchema } from './TagMapCreateWithoutMusicInput.schema';
import { TagMapUncheckedCreateWithoutMusicInputObjectSchema } from './TagMapUncheckedCreateWithoutMusicInput.schema';
import { TagMapCreateOrConnectWithoutMusicInputObjectSchema } from './TagMapCreateOrConnectWithoutMusicInput.schema';
import { TagMapCreateManyMusicInputEnvelopeObjectSchema } from './TagMapCreateManyMusicInputEnvelope.schema';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapUncheckedCreateNestedManyWithoutMusicInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TagMapCreateWithoutMusicInputObjectSchema),
          z.lazy(() => TagMapCreateWithoutMusicInputObjectSchema).array(),
          z.lazy(() => TagMapUncheckedCreateWithoutMusicInputObjectSchema),
          z
            .lazy(() => TagMapUncheckedCreateWithoutMusicInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TagMapCreateOrConnectWithoutMusicInputObjectSchema),
          z
            .lazy(() => TagMapCreateOrConnectWithoutMusicInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TagMapCreateManyMusicInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TagMapWhereUniqueInputObjectSchema),
          z.lazy(() => TagMapWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TagMapUncheckedCreateNestedManyWithoutMusicInputObjectSchema =
  Schema;
