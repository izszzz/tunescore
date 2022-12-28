import { z } from 'zod';
import { TagMapCreateManyMusicInputObjectSchema } from './TagMapCreateManyMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapCreateManyMusicInputEnvelope> = z
  .object({
    data: z.lazy(() => TagMapCreateManyMusicInputObjectSchema).array(),
  })
  .strict();

export const TagMapCreateManyMusicInputEnvelopeObjectSchema = Schema;
