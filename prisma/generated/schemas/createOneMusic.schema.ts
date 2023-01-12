import { z } from 'zod';
import { MusicSelectObjectSchema } from './objects/MusicSelect.schema';
import { MusicIncludeObjectSchema } from './objects/MusicInclude.schema';
import { MusicCreateInputObjectSchema } from './objects/MusicCreateInput.schema';
import { MusicUncheckedCreateInputObjectSchema } from './objects/MusicUncheckedCreateInput.schema';

export const MusicCreateOneSchema = z.object({
  select: MusicSelectObjectSchema.optional(),
  include: MusicIncludeObjectSchema.optional(),
  data: z.union([
    MusicCreateInputObjectSchema,
    MusicUncheckedCreateInputObjectSchema,
  ]),
});
