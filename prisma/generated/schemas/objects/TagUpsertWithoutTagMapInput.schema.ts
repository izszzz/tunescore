import { z } from 'zod';
import { TagUpdateWithoutTagMapInputObjectSchema } from './TagUpdateWithoutTagMapInput.schema';
import { TagUncheckedUpdateWithoutTagMapInputObjectSchema } from './TagUncheckedUpdateWithoutTagMapInput.schema';
import { TagCreateWithoutTagMapInputObjectSchema } from './TagCreateWithoutTagMapInput.schema';
import { TagUncheckedCreateWithoutTagMapInputObjectSchema } from './TagUncheckedCreateWithoutTagMapInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUpsertWithoutTagMapInput> = z
  .object({
    update: z.union([
      z.lazy(() => TagUpdateWithoutTagMapInputObjectSchema),
      z.lazy(() => TagUncheckedUpdateWithoutTagMapInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TagCreateWithoutTagMapInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutTagMapInputObjectSchema),
    ]),
  })
  .strict();

export const TagUpsertWithoutTagMapInputObjectSchema = Schema;
