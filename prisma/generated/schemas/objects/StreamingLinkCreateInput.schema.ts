import { z } from 'zod';
import { LinkCreateInputObjectSchema } from './LinkCreateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StreamingLinkCreateInput> = z
  .object({
    youtube: z
      .lazy(() => LinkCreateInputObjectSchema)
      .optional()
      .nullable(),
    spotify: z
      .lazy(() => LinkCreateInputObjectSchema)
      .optional()
      .nullable(),
    itunes: z
      .lazy(() => LinkCreateInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const StreamingLinkCreateInputObjectSchema = Schema;
