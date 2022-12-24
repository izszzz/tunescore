import { z } from 'zod';
import { BookmarkWhereInputObjectSchema } from './objects/BookmarkWhereInput.schema';
import { BookmarkOrderByWithRelationInputObjectSchema } from './objects/BookmarkOrderByWithRelationInput.schema';
import { BookmarkWhereUniqueInputObjectSchema } from './objects/BookmarkWhereUniqueInput.schema';
import { BookmarkCountAggregateInputObjectSchema } from './objects/BookmarkCountAggregateInput.schema';
import { BookmarkMinAggregateInputObjectSchema } from './objects/BookmarkMinAggregateInput.schema';
import { BookmarkMaxAggregateInputObjectSchema } from './objects/BookmarkMaxAggregateInput.schema';

export const BookmarkAggregateSchema = z.object({
  where: BookmarkWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      BookmarkOrderByWithRelationInputObjectSchema,
      BookmarkOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: BookmarkWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), BookmarkCountAggregateInputObjectSchema])
    .optional(),
  _min: BookmarkMinAggregateInputObjectSchema.optional(),
  _max: BookmarkMaxAggregateInputObjectSchema.optional(),
});
