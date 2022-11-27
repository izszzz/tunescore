import { z } from 'zod';
import { AlbumWhereInputObjectSchema } from './objects/AlbumWhereInput.schema';
import { AlbumOrderByWithRelationInputObjectSchema } from './objects/AlbumOrderByWithRelationInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './objects/AlbumWhereUniqueInput.schema';
import { AlbumScalarFieldEnumSchema } from './enums/AlbumScalarFieldEnum.schema';

export const AlbumFindFirstSchema = z.object({
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
