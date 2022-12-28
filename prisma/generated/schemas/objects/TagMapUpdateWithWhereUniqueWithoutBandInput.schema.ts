import { z } from 'zod';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';
import { TagMapUpdateWithoutBandInputObjectSchema } from './TagMapUpdateWithoutBandInput.schema';
import { TagMapUncheckedUpdateWithoutBandInputObjectSchema } from './TagMapUncheckedUpdateWithoutBandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapUpdateWithWhereUniqueWithoutBandInput> = z
  .object({
    where: z.lazy(() => TagMapWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TagMapUpdateWithoutBandInputObjectSchema),
      z.lazy(() => TagMapUncheckedUpdateWithoutBandInputObjectSchema),
    ]),
  })
  .strict();

export const TagMapUpdateWithWhereUniqueWithoutBandInputObjectSchema = Schema;
