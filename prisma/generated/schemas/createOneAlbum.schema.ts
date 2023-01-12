import { z } from 'zod';
import { AlbumSelectObjectSchema } from './objects/AlbumSelect.schema';
import { AlbumIncludeObjectSchema } from './objects/AlbumInclude.schema';
import { AlbumCreateInputObjectSchema } from './objects/AlbumCreateInput.schema';
import { AlbumUncheckedCreateInputObjectSchema } from './objects/AlbumUncheckedCreateInput.schema';

export const AlbumCreateOneSchema = z.object({
  select: AlbumSelectObjectSchema.optional(),
  include: AlbumIncludeObjectSchema.optional(),
  data: z.union([
    AlbumCreateInputObjectSchema,
    AlbumUncheckedCreateInputObjectSchema,
  ]),
});
