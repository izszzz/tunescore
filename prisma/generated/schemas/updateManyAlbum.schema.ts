import { z } from 'zod';
import { AlbumUpdateManyMutationInputObjectSchema } from './objects/AlbumUpdateManyMutationInput.schema';
import { AlbumWhereInputObjectSchema } from './objects/AlbumWhereInput.schema';

export const AlbumUpdateManySchema = z.object({
  data: AlbumUpdateManyMutationInputObjectSchema,
  where: AlbumWhereInputObjectSchema.optional(),
});
