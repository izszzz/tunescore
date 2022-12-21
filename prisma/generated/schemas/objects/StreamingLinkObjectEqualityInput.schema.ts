import { z } from 'zod';
import { LinkObjectEqualityInputObjectSchema } from './LinkObjectEqualityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StreamingLinkObjectEqualityInput> = z
  .object({
    youtube: z
      .lazy(() => LinkObjectEqualityInputObjectSchema)
      .optional()
      .nullable(),
    spotify: z
      .lazy(() => LinkObjectEqualityInputObjectSchema)
      .optional()
      .nullable(),
    itunes: z
      .lazy(() => LinkObjectEqualityInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const StreamingLinkObjectEqualityInputObjectSchema = Schema;
