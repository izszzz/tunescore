import { z } from 'zod';
import { TagTypeSchema } from '../enums/TagType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapCreateManyArtistInput> = z
  .object({
    id: z.string().optional(),
    tagId: z.string(),
    resourceType: z.lazy(() => TagTypeSchema),
  })
  .strict();

export const TagMapCreateManyArtistInputObjectSchema = Schema;
