import { z } from 'zod';
import { AlbumSelectObjectSchema } from './objects/AlbumSelect.schema';
import { AlbumIncludeObjectSchema } from './objects/AlbumInclude.schema';
import { AlbumWhereInputObjectSchema } from './objects/AlbumWhereInput.schema';
import { AlbumOrderByWithRelationInputObjectSchema } from './objects/AlbumOrderByWithRelationInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './objects/AlbumWhereUniqueInput.schema';
import { AlbumScalarFieldEnumSchema } from './enums/AlbumScalarFieldEnum.schema';

export const AlbumFindManySchema = z.object({
  select: z.lazy(() => AlbumSelectObjectSchema.optional()),
  include: z.lazy(() => AlbumIncludeObjectSchema.optional()),
  where: AlbumWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      AlbumOrderByWithRelationInputObjectSchema,
      AlbumOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: AlbumWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AlbumScalarFieldEnumSchema).optional(),
});
