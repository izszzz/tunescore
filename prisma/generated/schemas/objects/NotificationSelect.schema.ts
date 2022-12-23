import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationSelect> = z
  .object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    resourceId: z.boolean().optional(),
    resurceType: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    readAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
  })
  .strict();

export const NotificationSelectObjectSchema = Schema;
