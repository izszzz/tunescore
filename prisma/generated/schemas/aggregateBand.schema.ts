import { z } from 'zod';
import { BandOrderByWithRelationInputObjectSchema } from './objects/BandOrderByWithRelationInput.schema';
import { BandWhereInputObjectSchema } from './objects/BandWhereInput.schema';
import { BandWhereUniqueInputObjectSchema } from './objects/BandWhereUniqueInput.schema';
import { BandCountAggregateInputObjectSchema } from './objects/BandCountAggregateInput.schema';
import { BandMinAggregateInputObjectSchema } from './objects/BandMinAggregateInput.schema';
import { BandMaxAggregateInputObjectSchema } from './objects/BandMaxAggregateInput.schema';

export const BandAggregateSchema = z.object({
  orderBy: z
    .union([
      BandOrderByWithRelationInputObjectSchema,
      BandOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BandWhereInputObjectSchema.optional(),
  cursor: BandWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), BandCountAggregateInputObjectSchema])
    .optional(),
  _min: BandMinAggregateInputObjectSchema.optional(),
  _max: BandMaxAggregateInputObjectSchema.optional(),
});
