import { z } from 'zod';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';
import { TagMapUpdateWithoutBandInputObjectSchema } from './TagMapUpdateWithoutBandInput.schema';
import { TagMapUncheckedUpdateWithoutBandInputObjectSchema } from './TagMapUncheckedUpdateWithoutBandInput.schema';
import { TagMapCreateWithoutBandInputObjectSchema } from './TagMapCreateWithoutBandInput.schema';
import { TagMapUncheckedCreateWithoutBandInputObjectSchema } from './TagMapUncheckedCreateWithoutBandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapUpsertWithWhereUniqueWithoutBandInput> = z
  .object({
    where: z.lazy(() => TagMapWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => TagMapUpdateWithoutBandInputObjectSchema),
      z.lazy(() => TagMapUncheckedUpdateWithoutBandInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TagMapCreateWithoutBandInputObjectSchema),
      z.lazy(() => TagMapUncheckedCreateWithoutBandInputObjectSchema),
    ]),
  })
  .strict();

export const TagMapUpsertWithWhereUniqueWithoutBandInputObjectSchema = Schema;
