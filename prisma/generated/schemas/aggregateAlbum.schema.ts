import { z } from 'zod';
import { AlbumWhereInputObjectSchema } from './objects/AlbumWhereInput.schema';
import { AlbumOrderByWithRelationInputObjectSchema } from './objects/AlbumOrderByWithRelationInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './objects/AlbumWhereUniqueInput.schema';
import { AlbumCountAggregateInputObjectSchema } from './objects/AlbumCountAggregateInput.schema';
import { AlbumMinAggregateInputObjectSchema } from './objects/AlbumMinAggregateInput.schema';
import { AlbumMaxAggregateInputObjectSchema } from './objects/AlbumMaxAggregateInput.schema';

export const AlbumAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), AlbumCountAggregateInputObjectSchema])
    .optional(),
  _min: AlbumMinAggregateInputObjectSchema.optional(),
  _max: AlbumMaxAggregateInputObjectSchema.optional(),
});
