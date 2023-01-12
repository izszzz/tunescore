import { z } from 'zod';
import { AlbumOrderByWithRelationInputObjectSchema } from './objects/AlbumOrderByWithRelationInput.schema';
import { AlbumWhereInputObjectSchema } from './objects/AlbumWhereInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './objects/AlbumWhereUniqueInput.schema';
import { AlbumCountAggregateInputObjectSchema } from './objects/AlbumCountAggregateInput.schema';
import { AlbumMinAggregateInputObjectSchema } from './objects/AlbumMinAggregateInput.schema';
import { AlbumMaxAggregateInputObjectSchema } from './objects/AlbumMaxAggregateInput.schema';

export const AlbumAggregateSchema = z.object({
  orderBy: z
    .union([
      AlbumOrderByWithRelationInputObjectSchema,
      AlbumOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: AlbumWhereInputObjectSchema.optional(),
  cursor: AlbumWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), AlbumCountAggregateInputObjectSchema])
    .optional(),
  _min: AlbumMinAggregateInputObjectSchema.optional(),
  _max: AlbumMaxAggregateInputObjectSchema.optional(),
});
