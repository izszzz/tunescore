import { z } from 'zod';
import { AlbumWhereUniqueInputObjectSchema } from './objects/AlbumWhereUniqueInput.schema';

export const AlbumDeleteOneSchema = z.object({
  where: AlbumWhereUniqueInputObjectSchema,
});
