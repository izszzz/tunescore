import { z } from 'zod';
import { TagMapCreateManyBandInputObjectSchema } from './TagMapCreateManyBandInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapCreateManyBandInputEnvelope> = z
  .object({
    data: z.lazy(() => TagMapCreateManyBandInputObjectSchema).array(),
  })
  .strict();

export const TagMapCreateManyBandInputEnvelopeObjectSchema = Schema;
