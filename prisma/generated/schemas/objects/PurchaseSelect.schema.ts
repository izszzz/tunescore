import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { MusicArgsObjectSchema } from './MusicArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseSelect> = z
  .object({
    id: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    music: z
      .union([z.boolean(), z.lazy(() => MusicArgsObjectSchema)])
      .optional(),
    musicId: z.boolean().optional(),
    stripePaymentIntentId: z.boolean().optional(),
  })
  .strict();

export const PurchaseSelectObjectSchema = Schema;
