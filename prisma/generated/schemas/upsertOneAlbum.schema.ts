import { z } from 'zod';
import { AlbumSelectObjectSchema } from './objects/AlbumSelect.schema';
import { AlbumIncludeObjectSchema } from './objects/AlbumInclude.schema';
import { AlbumWhereUniqueInputObjectSchema } from './objects/AlbumWhereUniqueInput.schema';
import { AlbumCreateInputObjectSchema } from './objects/AlbumCreateInput.schema';
import { AlbumUpdateInputObjectSchema } from './objects/AlbumUpdateInput.schema';

export const AlbumUpsertSchema = z.object({
  select: AlbumSelectObjectSchema.optional(),
  include: AlbumIncludeObjectSchema.optional(),
  where: AlbumWhereUniqueInputObjectSchema,
  create: AlbumCreateInputObjectSchema,
  update: AlbumUpdateInputObjectSchema,
});
