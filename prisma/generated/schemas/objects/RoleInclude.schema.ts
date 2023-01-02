import { z } from 'zod';
import { RoleMapFindManySchema } from '../findManyRoleMap.schema';
import { RoleCountOutputTypeArgsObjectSchema } from './RoleCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleInclude> = z
  .object({
    roleMap: z
      .union([z.boolean(), z.lazy(() => RoleMapFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => RoleCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const RoleIncludeObjectSchema = Schema;
