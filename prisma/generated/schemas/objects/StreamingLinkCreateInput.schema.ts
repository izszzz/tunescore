import { z } from 'zod';
import { LinkImageCreateInputObjectSchema } from './LinkImageCreateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StreamingLinkCreateInput> = z
  .object({
    youtube: z
      .lazy(() => LinkImageCreateInputObjectSchema)
      .optional()
      .nullable(),
    spotify: z
      .lazy(() => LinkImageCreateInputObjectSchema)
      .optional()
      .nullable(),
    itunes: z
      .lazy(() => LinkImageCreateInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const StreamingLinkCreateInputObjectSchema = Schema;
