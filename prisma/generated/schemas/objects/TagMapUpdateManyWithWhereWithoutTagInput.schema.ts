import { z } from 'zod';
import { TagMapScalarWhereInputObjectSchema } from './TagMapScalarWhereInput.schema';
import { TagMapUpdateManyMutationInputObjectSchema } from './TagMapUpdateManyMutationInput.schema';
import { TagMapUncheckedUpdateManyWithoutTagMapInputObjectSchema } from './TagMapUncheckedUpdateManyWithoutTagMapInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapUpdateManyWithWhereWithoutTagInput> = z
  .object({
    where: z.lazy(() => TagMapScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => TagMapUpdateManyMutationInputObjectSchema),
      z.lazy(() => TagMapUncheckedUpdateManyWithoutTagMapInputObjectSchema),
    ]),
  })
  .strict();

export const TagMapUpdateManyWithWhereWithoutTagInputObjectSchema = Schema;
