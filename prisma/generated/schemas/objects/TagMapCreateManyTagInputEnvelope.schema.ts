import { z } from 'zod';
import { TagMapCreateManyTagInputObjectSchema } from './TagMapCreateManyTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapCreateManyTagInputEnvelope> = z
  .object({
    data: z.lazy(() => TagMapCreateManyTagInputObjectSchema).array(),
  })
  .strict();

export const TagMapCreateManyTagInputEnvelopeObjectSchema = Schema;
