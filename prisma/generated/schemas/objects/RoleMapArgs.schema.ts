import { z } from 'zod';
import { RoleMapSelectObjectSchema } from './RoleMapSelect.schema';
import { RoleMapIncludeObjectSchema } from './RoleMapInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleMapArgs> = z
  .object({
    select: z.lazy(() => RoleMapSelectObjectSchema).optional(),
    include: z.lazy(() => RoleMapIncludeObjectSchema).optional(),
  })
  .strict();

export const RoleMapArgsObjectSchema = Schema;
