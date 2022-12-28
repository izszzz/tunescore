import { z } from 'zod';
import { TagMapCreateManyArtistInputObjectSchema } from './TagMapCreateManyArtistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapCreateManyArtistInputEnvelope> = z
  .object({
    data: z.lazy(() => TagMapCreateManyArtistInputObjectSchema).array(),
  })
  .strict();

export const TagMapCreateManyArtistInputEnvelopeObjectSchema = Schema;
