import { z } from 'zod';
import { IssueWhereInputObjectSchema } from './objects/IssueWhereInput.schema';
import { IssueOrderByWithRelationInputObjectSchema } from './objects/IssueOrderByWithRelationInput.schema';
import { IssueWhereUniqueInputObjectSchema } from './objects/IssueWhereUniqueInput.schema';
import { IssueCountAggregateInputObjectSchema } from './objects/IssueCountAggregateInput.schema';
import { IssueMinAggregateInputObjectSchema } from './objects/IssueMinAggregateInput.schema';
import { IssueMaxAggregateInputObjectSchema } from './objects/IssueMaxAggregateInput.schema';

export const IssueAggregateSchema = z.object({
  where: IssueWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      IssueOrderByWithRelationInputObjectSchema,
      IssueOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: IssueWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), IssueCountAggregateInputObjectSchema])
    .optional(),
  _min: IssueMinAggregateInputObjectSchema.optional(),
  _max: IssueMaxAggregateInputObjectSchema.optional(),
});
