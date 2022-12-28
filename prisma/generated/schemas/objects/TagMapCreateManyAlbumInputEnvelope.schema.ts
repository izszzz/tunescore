import { z } from 'zod';
import { TagMapCreateManyAlbumInputObjectSchema } from './TagMapCreateManyAlbumInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapCreateManyAlbumInputEnvelope> = z
  .object({
    data: z.lazy(() => TagMapCreateManyAlbumInputObjectSchema).array(),
  })
  .strict();

export const TagMapCreateManyAlbumInputEnvelopeObjectSchema = Schema;
