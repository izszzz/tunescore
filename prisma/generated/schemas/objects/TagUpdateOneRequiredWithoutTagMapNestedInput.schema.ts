import { z } from 'zod';
import { TagCreateWithoutTagMapInputObjectSchema } from './TagCreateWithoutTagMapInput.schema';
import { TagUncheckedCreateWithoutTagMapInputObjectSchema } from './TagUncheckedCreateWithoutTagMapInput.schema';
import { TagCreateOrConnectWithoutTagMapInputObjectSchema } from './TagCreateOrConnectWithoutTagMapInput.schema';
import { TagUpsertWithoutTagMapInputObjectSchema } from './TagUpsertWithoutTagMapInput.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithoutTagMapInputObjectSchema } from './TagUpdateWithoutTagMapInput.schema';
import { TagUncheckedUpdateWithoutTagMapInputObjectSchema } from './TagUncheckedUpdateWithoutTagMapInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutTagMapNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TagCreateWithoutTagMapInputObjectSchema),
        z.lazy(() => TagUncheckedCreateWithoutTagMapInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => TagCreateOrConnectWithoutTagMapInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => TagUpsertWithoutTagMapInputObjectSchema).optional(),
    connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => TagUpdateWithoutTagMapInputObjectSchema),
        z.lazy(() => TagUncheckedUpdateWithoutTagMapInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const TagUpdateOneRequiredWithoutTagMapNestedInputObjectSchema = Schema;
