import { z } from 'zod';
import { ParticipationWhereInputObjectSchema } from './objects/ParticipationWhereInput.schema';
import { ParticipationOrderByWithRelationInputObjectSchema } from './objects/ParticipationOrderByWithRelationInput.schema';
import { ParticipationWhereUniqueInputObjectSchema } from './objects/ParticipationWhereUniqueInput.schema';
import { ParticipationCountAggregateInputObjectSchema } from './objects/ParticipationCountAggregateInput.schema';
import { ParticipationMinAggregateInputObjectSchema } from './objects/ParticipationMinAggregateInput.schema';
import { ParticipationMaxAggregateInputObjectSchema } from './objects/ParticipationMaxAggregateInput.schema';

export const ParticipationAggregateSchema = z.object({
  where: ParticipationWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ParticipationOrderByWithRelationInputObjectSchema,
      ParticipationOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: ParticipationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ParticipationCountAggregateInputObjectSchema])
    .optional(),
  _min: ParticipationMinAggregateInputObjectSchema.optional(),
  _max: ParticipationMaxAggregateInputObjectSchema.optional(),
});
