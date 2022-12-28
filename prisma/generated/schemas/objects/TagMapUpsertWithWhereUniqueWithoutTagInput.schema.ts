import { z } from 'zod';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';
import { TagMapUpdateWithoutTagInputObjectSchema } from './TagMapUpdateWithoutTagInput.schema';
import { TagMapUncheckedUpdateWithoutTagInputObjectSchema } from './TagMapUncheckedUpdateWithoutTagInput.schema';
import { TagMapCreateWithoutTagInputObjectSchema } from './TagMapCreateWithoutTagInput.schema';
import { TagMapUncheckedCreateWithoutTagInputObjectSchema } from './TagMapUncheckedCreateWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapUpsertWithWhereUniqueWithoutTagInput> = z
  .object({
    where: z.lazy(() => TagMapWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => TagMapUpdateWithoutTagInputObjectSchema),
      z.lazy(() => TagMapUncheckedUpdateWithoutTagInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TagMapCreateWithoutTagInputObjectSchema),
      z.lazy(() => TagMapUncheckedCreateWithoutTagInputObjectSchema),
    ]),
  })
  .strict();

export const TagMapUpsertWithWhereUniqueWithoutTagInputObjectSchema = Schema;
