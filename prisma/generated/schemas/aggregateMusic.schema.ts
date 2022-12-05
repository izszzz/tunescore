import { z } from 'zod';
import { MusicWhereInputObjectSchema } from './objects/MusicWhereInput.schema';
import { MusicOrderByWithRelationInputObjectSchema } from './objects/MusicOrderByWithRelationInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './objects/MusicWhereUniqueInput.schema';
import { MusicCountAggregateInputObjectSchema } from './objects/MusicCountAggregateInput.schema';
import { MusicMinAggregateInputObjectSchema } from './objects/MusicMinAggregateInput.schema';
import { MusicMaxAggregateInputObjectSchema } from './objects/MusicMaxAggregateInput.schema';
import { MusicAvgAggregateInputObjectSchema } from './objects/MusicAvgAggregateInput.schema';
import { MusicSumAggregateInputObjectSchema } from './objects/MusicSumAggregateInput.schema';

export const MusicAggregateSchema = z.object({
  where: MusicWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MusicOrderByWithRelationInputObjectSchema,
      MusicOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: MusicWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), MusicCountAggregateInputObjectSchema])
    .optional(),
  _min: MusicMinAggregateInputObjectSchema.optional(),
  _max: MusicMaxAggregateInputObjectSchema.optional(),
  _avg: MusicAvgAggregateInputObjectSchema.optional(),
  _sum: MusicSumAggregateInputObjectSchema.optional(),
});
