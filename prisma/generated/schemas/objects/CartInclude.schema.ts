import { z } from 'zod';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { MusicArgsObjectSchema } from './MusicArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    music: z
      .union([z.boolean(), z.lazy(() => MusicArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const CartIncludeObjectSchema = Schema;
