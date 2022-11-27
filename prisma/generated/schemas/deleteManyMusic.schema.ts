import { z } from 'zod';
import { MusicWhereInputObjectSchema } from './objects/MusicWhereInput.schema';

export const MusicDeleteManySchema = z.object({
  where: MusicWhereInputObjectSchema.optional(),
});
