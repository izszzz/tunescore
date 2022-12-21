import { z } from 'zod';
import { LinkImageNullableUpdateEnvelopeInputObjectSchema } from './LinkImageNullableUpdateEnvelopeInput.schema';
import { LinkImageCreateInputObjectSchema } from './LinkImageCreateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StreamingLinkUpdateInput> = z
  .object({
    youtube: z
      .union([
        z.lazy(() => LinkImageNullableUpdateEnvelopeInputObjectSchema),
        z.lazy(() => LinkImageCreateInputObjectSchema),
      ])
      .optional()
      .nullable(),
    spotify: z
      .union([
        z.lazy(() => LinkImageNullableUpdateEnvelopeInputObjectSchema),
        z.lazy(() => LinkImageCreateInputObjectSchema),
      ])
      .optional()
      .nullable(),
    itunes: z
      .union([
        z.lazy(() => LinkImageNullableUpdateEnvelopeInputObjectSchema),
        z.lazy(() => LinkImageCreateInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const StreamingLinkUpdateInputObjectSchema = Schema;
