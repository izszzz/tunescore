import { z } from 'zod';
import { MusicSelectObjectSchema } from './objects/MusicSelect.schema';
import { MusicIncludeObjectSchema } from './objects/MusicInclude.schema';
import { MusicWhereUniqueInputObjectSchema } from './objects/MusicWhereUniqueInput.schema';
import { MusicCreateInputObjectSchema } from './objects/MusicCreateInput.schema';
import { MusicUpdateInputObjectSchema } from './objects/MusicUpdateInput.schema';

export const MusicUpsertSchema = z.object({
  select: MusicSelectObjectSchema.optional(),
  include: MusicIncludeObjectSchema.optional(),
  where: MusicWhereUniqueInputObjectSchema,
  create: MusicCreateInputObjectSchema,
  update: MusicUpdateInputObjectSchema,
});
