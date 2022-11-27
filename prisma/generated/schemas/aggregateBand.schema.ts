import { z } from 'zod';
import { BandWhereInputObjectSchema } from './objects/BandWhereInput.schema';
import { BandOrderByWithRelationInputObjectSchema } from './objects/BandOrderByWithRelationInput.schema';
import { BandWhereUniqueInputObjectSchema } from './objects/BandWhereUniqueInput.schema';
import { BandCountAggregateInputObjectSchema } from './objects/BandCountAggregateInput.schema';
import { BandMinAggregateInputObjectSchema } from './objects/BandMinAggregateInput.schema';
import { BandMaxAggregateInputObjectSchema } from './objects/BandMaxAggregateInput.schema';

export const BandAggregateSchema = z.object({
  where: BandWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      BandOrderByWithRelationInputObjectSchema,
      BandOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: BandWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), BandCountAggregateInputObjectSchema])
    .optional(),
  _min: BandMinAggregateInputObjectSchema.optional(),
  _max: BandMaxAggregateInputObjectSchema.optional(),
});
