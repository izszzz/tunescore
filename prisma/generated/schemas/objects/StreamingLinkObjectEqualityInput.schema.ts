import { z } from 'zod';
import { LinkImageObjectEqualityInputObjectSchema } from './LinkImageObjectEqualityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StreamingLinkObjectEqualityInput> = z
  .object({
    youtube: z
      .lazy(() => LinkImageObjectEqualityInputObjectSchema)
      .optional()
      .nullable(),
    spotify: z
      .lazy(() => LinkImageObjectEqualityInputObjectSchema)
      .optional()
      .nullable(),
    itunes: z
      .lazy(() => LinkImageObjectEqualityInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const StreamingLinkObjectEqualityInputObjectSchema = Schema;
