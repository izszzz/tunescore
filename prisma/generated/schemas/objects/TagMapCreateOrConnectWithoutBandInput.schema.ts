import { z } from 'zod';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';
import { TagMapCreateWithoutBandInputObjectSchema } from './TagMapCreateWithoutBandInput.schema';
import { TagMapUncheckedCreateWithoutBandInputObjectSchema } from './TagMapUncheckedCreateWithoutBandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapCreateOrConnectWithoutBandInput> = z
  .object({
    where: z.lazy(() => TagMapWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TagMapCreateWithoutBandInputObjectSchema),
      z.lazy(() => TagMapUncheckedCreateWithoutBandInputObjectSchema),
    ]),
  })
  .strict();

export const TagMapCreateOrConnectWithoutBandInputObjectSchema = Schema;
