import { z } from 'zod';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagCreateWithoutTagMapInputObjectSchema } from './TagCreateWithoutTagMapInput.schema';
import { TagUncheckedCreateWithoutTagMapInputObjectSchema } from './TagUncheckedCreateWithoutTagMapInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateOrConnectWithoutTagMapInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TagCreateWithoutTagMapInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutTagMapInputObjectSchema),
    ]),
  })
  .strict();

export const TagCreateOrConnectWithoutTagMapInputObjectSchema = Schema;
