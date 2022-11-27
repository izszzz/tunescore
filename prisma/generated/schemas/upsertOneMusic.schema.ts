import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './objects/MusicWhereUniqueInput.schema';
import { MusicCreateInputObjectSchema } from './objects/MusicCreateInput.schema';
import { MusicUpdateInputObjectSchema } from './objects/MusicUpdateInput.schema';

export const MusicUpsertSchema = z.object({
  where: MusicWhereUniqueInputObjectSchema,
  create: MusicCreateInputObjectSchema,
  update: MusicUpdateInputObjectSchema,
});
