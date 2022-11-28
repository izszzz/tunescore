import { z } from 'zod';
import { MusicSelectObjectSchema } from './objects/MusicSelect.schema';
import { MusicIncludeObjectSchema } from './objects/MusicInclude.schema';
import { MusicCreateInputObjectSchema } from './objects/MusicCreateInput.schema';

export const MusicCreateOneSchema = z.object({
  select: MusicSelectObjectSchema.optional(),
  include: MusicIncludeObjectSchema.optional(),
  data: MusicCreateInputObjectSchema,
});
