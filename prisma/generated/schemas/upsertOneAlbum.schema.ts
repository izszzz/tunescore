import { z } from 'zod';
import { AlbumWhereUniqueInputObjectSchema } from './objects/AlbumWhereUniqueInput.schema';
import { AlbumCreateInputObjectSchema } from './objects/AlbumCreateInput.schema';
import { AlbumUpdateInputObjectSchema } from './objects/AlbumUpdateInput.schema';

export const AlbumUpsertSchema = z.object({
  where: AlbumWhereUniqueInputObjectSchema,
  create: AlbumCreateInputObjectSchema,
  update: AlbumUpdateInputObjectSchema,
});
