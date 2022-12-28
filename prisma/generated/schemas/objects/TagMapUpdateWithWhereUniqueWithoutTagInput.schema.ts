import { z } from 'zod';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';
import { TagMapUpdateWithoutTagInputObjectSchema } from './TagMapUpdateWithoutTagInput.schema';
import { TagMapUncheckedUpdateWithoutTagInputObjectSchema } from './TagMapUncheckedUpdateWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapUpdateWithWhereUniqueWithoutTagInput> = z
  .object({
    where: z.lazy(() => TagMapWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TagMapUpdateWithoutTagInputObjectSchema),
      z.lazy(() => TagMapUncheckedUpdateWithoutTagInputObjectSchema),
    ]),
  })
  .strict();

export const TagMapUpdateWithWhereUniqueWithoutTagInputObjectSchema = Schema;
