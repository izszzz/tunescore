import { z } from 'zod';
import { NotificationSelectObjectSchema } from './NotificationSelect.schema';
import { NotificationIncludeObjectSchema } from './NotificationInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationArgs> = z
  .object({
    select: z.lazy(() => NotificationSelectObjectSchema).optional(),
    include: z.lazy(() => NotificationIncludeObjectSchema).optional(),
  })
  .strict();

export const NotificationArgsObjectSchema = Schema;
