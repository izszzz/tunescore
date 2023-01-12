import { z } from 'zod';
import { AlbumSelectObjectSchema } from './objects/AlbumSelect.schema';
import { AlbumIncludeObjectSchema } from './objects/AlbumInclude.schema';
import { AlbumUpdateInputObjectSchema } from './objects/AlbumUpdateInput.schema';
import { AlbumUncheckedUpdateInputObjectSchema } from './objects/AlbumUncheckedUpdateInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './objects/AlbumWhereUniqueInput.schema';

export const AlbumUpdateOneSchema = z.object({
  select: AlbumSelectObjectSchema.optional(),
  include: AlbumIncludeObjectSchema.optional(),
  data: z.union([
    AlbumUpdateInputObjectSchema,
    AlbumUncheckedUpdateInputObjectSchema,
  ]),
  where: AlbumWhereUniqueInputObjectSchema,
});
