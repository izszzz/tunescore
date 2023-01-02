import { z } from 'zod';
import { RoleCountOutputTypeSelectObjectSchema } from './RoleCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => RoleCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const RoleCountOutputTypeArgsObjectSchema = Schema;
