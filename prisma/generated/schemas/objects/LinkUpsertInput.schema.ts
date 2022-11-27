import { z } from 'zod';
import { LinkCreateInputObjectSchema } from './LinkCreateInput.schema';
import { LinkUpdateInputObjectSchema } from './LinkUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkUpsertInput> = z
  .object({
    set: z.lazy(() => LinkCreateInputObjectSchema).nullable(),
    update: z.lazy(() => LinkUpdateInputObjectSchema),
  })
  .strict();

export const LinkUpsertInputObjectSchema = Schema;
