import { z } from 'zod';
import { TagMapCreateWithoutTagInputObjectSchema } from './TagMapCreateWithoutTagInput.schema';
import { TagMapUncheckedCreateWithoutTagInputObjectSchema } from './TagMapUncheckedCreateWithoutTagInput.schema';
import { TagMapCreateOrConnectWithoutTagInputObjectSchema } from './TagMapCreateOrConnectWithoutTagInput.schema';
import { TagMapCreateManyTagInputEnvelopeObjectSchema } from './TagMapCreateManyTagInputEnvelope.schema';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapCreateNestedManyWithoutTagInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TagMapCreateWithoutTagInputObjectSchema),
        z.lazy(() => TagMapCreateWithoutTagInputObjectSchema).array(),
        z.lazy(() => TagMapUncheckedCreateWithoutTagInputObjectSchema),
        z.lazy(() => TagMapUncheckedCreateWithoutTagInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TagMapCreateOrConnectWithoutTagInputObjectSchema),
        z.lazy(() => TagMapCreateOrConnectWithoutTagInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => TagMapCreateManyTagInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => TagMapWhereUniqueInputObjectSchema),
        z.lazy(() => TagMapWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TagMapCreateNestedManyWithoutTagInputObjectSchema = Schema;
