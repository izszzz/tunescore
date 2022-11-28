import { z } from 'zod';
import { MusicSelectObjectSchema } from './objects/MusicSelect.schema';
import { MusicIncludeObjectSchema } from './objects/MusicInclude.schema';
import { MusicWhereUniqueInputObjectSchema } from './objects/MusicWhereUniqueInput.schema';

export const MusicDeleteOneSchema = z.object({
  select: MusicSelectObjectSchema.optional(),
  include: MusicIncludeObjectSchema.optional(),
  where: MusicWhereUniqueInputObjectSchema,
});
