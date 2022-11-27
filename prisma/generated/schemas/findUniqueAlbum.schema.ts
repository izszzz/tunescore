import { z } from 'zod';
import { AlbumWhereUniqueInputObjectSchema } from './objects/AlbumWhereUniqueInput.schema';

export const AlbumFindUniqueSchema = z.object({
  where: AlbumWhereUniqueInputObjectSchema,
});
