import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StreamingLinkCreateInput> = z
  .object({
    youtube: z.string().optional().nullable(),
    spotify: z.string().optional().nullable(),
    itunes: z.string().optional().nullable(),
  })
  .strict();

export const StreamingLinkCreateInputObjectSchema = Schema;
