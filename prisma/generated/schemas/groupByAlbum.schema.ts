import { z } from 'zod';
import { AlbumWhereInputObjectSchema } from './objects/AlbumWhereInput.schema';
import { AlbumOrderByWithAggregationInputObjectSchema } from './objects/AlbumOrderByWithAggregationInput.schema';
import { AlbumScalarWhereWithAggregatesInputObjectSchema } from './objects/AlbumScalarWhereWithAggregatesInput.schema';
import { AlbumScalarFieldEnumSchema } from './enums/AlbumScalarFieldEnum.schema';

export const AlbumGroupBySchema = z.object({
  where: AlbumWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      AlbumOrderByWithAggregationInputObjectSchema,
      AlbumOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: AlbumScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AlbumScalarFieldEnumSchema),
});
