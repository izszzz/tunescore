import { z } from 'zod';
import { NotificationWhereInputObjectSchema } from './NotificationWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NotificationListRelationFilter> = z
  .object({
    every: z.lazy(() => NotificationWhereInputObjectSchema).optional(),
    some: z.lazy(() => NotificationWhereInputObjectSchema).optional(),
    none: z.lazy(() => NotificationWhereInputObjectSchema).optional(),
  })
  .strict();

export const NotificationListRelationFilterObjectSchema = Schema;
