import { z } from 'zod';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';
import { TagMapCreateWithoutTagInputObjectSchema } from './TagMapCreateWithoutTagInput.schema';
import { TagMapUncheckedCreateWithoutTagInputObjectSchema } from './TagMapUncheckedCreateWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapCreateOrConnectWithoutTagInput> = z
  .object({
    where: z.lazy(() => TagMapWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TagMapCreateWithoutTagInputObjectSchema),
      z.lazy(() => TagMapUncheckedCreateWithoutTagInputObjectSchema),
    ]),
  })
  .strict();

export const TagMapCreateOrConnectWithoutTagInputObjectSchema = Schema;
