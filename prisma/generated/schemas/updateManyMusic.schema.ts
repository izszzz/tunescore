import { z } from 'zod';
import { MusicUpdateManyMutationInputObjectSchema } from './objects/MusicUpdateManyMutationInput.schema';
import { MusicWhereInputObjectSchema } from './objects/MusicWhereInput.schema';

export const MusicUpdateManySchema = z.object({
  data: MusicUpdateManyMutationInputObjectSchema,
  where: MusicWhereInputObjectSchema.optional(),
});
