import { z } from 'zod';
import { AlbumCreateInputObjectSchema } from './objects/AlbumCreateInput.schema';

export const AlbumCreateOneSchema = z.object({
  data: AlbumCreateInputObjectSchema,
});
