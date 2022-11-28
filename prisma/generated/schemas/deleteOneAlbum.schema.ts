import { z } from 'zod';
import { AlbumSelectObjectSchema } from './objects/AlbumSelect.schema';
import { AlbumIncludeObjectSchema } from './objects/AlbumInclude.schema';
import { AlbumWhereUniqueInputObjectSchema } from './objects/AlbumWhereUniqueInput.schema';

export const AlbumDeleteOneSchema = z.object({
  select: AlbumSelectObjectSchema.optional(),
  include: AlbumIncludeObjectSchema.optional(),
  where: AlbumWhereUniqueInputObjectSchema,
});
