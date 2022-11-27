import { z } from 'zod';
import { AlbumUpdateInputObjectSchema } from './objects/AlbumUpdateInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './objects/AlbumWhereUniqueInput.schema';

export const AlbumUpdateOneSchema = z.object({
  data: AlbumUpdateInputObjectSchema,
  where: AlbumWhereUniqueInputObjectSchema,
});
