import { z } from 'zod';
import { AlbumWhereInputObjectSchema } from './objects/AlbumWhereInput.schema';

export const AlbumDeleteManySchema = z.object({
  where: AlbumWhereInputObjectSchema.optional(),
});
