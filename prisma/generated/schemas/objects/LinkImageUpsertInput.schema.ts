import { z } from 'zod';
import { LinkImageCreateInputObjectSchema } from './LinkImageCreateInput.schema';
import { LinkImageUpdateInputObjectSchema } from './LinkImageUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.LinkImageUpsertInput> = z
  .object({
    set: z.lazy(() => LinkImageCreateInputObjectSchema).nullable(),
    update: z.lazy(() => LinkImageUpdateInputObjectSchema),
  })
  .strict();

export const LinkImageUpsertInputObjectSchema = Schema;
