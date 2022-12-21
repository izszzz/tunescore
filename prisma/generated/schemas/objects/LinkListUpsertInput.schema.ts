import { z } from 'zod';
import { LinkListCreateInputObjectSchema } from './LinkListCreateInput.schema';
import { LinkListUpdateInputObjectSchema } from './LinkListUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkListUpsertInput> = z
  .object({
    set: z.lazy(() => LinkListCreateInputObjectSchema).nullable(),
    update: z.lazy(() => LinkListUpdateInputObjectSchema),
  })
  .strict();

export const LinkListUpsertInputObjectSchema = Schema;
