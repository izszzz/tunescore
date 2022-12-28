import { z } from 'zod';
import { TagCreateWithoutTagMapInputObjectSchema } from './TagCreateWithoutTagMapInput.schema';
import { TagUncheckedCreateWithoutTagMapInputObjectSchema } from './TagUncheckedCreateWithoutTagMapInput.schema';
import { TagCreateOrConnectWithoutTagMapInputObjectSchema } from './TagCreateOrConnectWithoutTagMapInput.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateNestedOneWithoutTagMapInput> = z
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
    connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const TagCreateNestedOneWithoutTagMapInputObjectSchema = Schema;
