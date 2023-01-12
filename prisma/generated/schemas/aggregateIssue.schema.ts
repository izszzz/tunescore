import { z } from 'zod';
import { IssueOrderByWithRelationInputObjectSchema } from './objects/IssueOrderByWithRelationInput.schema';
import { IssueWhereInputObjectSchema } from './objects/IssueWhereInput.schema';
import { IssueWhereUniqueInputObjectSchema } from './objects/IssueWhereUniqueInput.schema';
import { IssueCountAggregateInputObjectSchema } from './objects/IssueCountAggregateInput.schema';
import { IssueMinAggregateInputObjectSchema } from './objects/IssueMinAggregateInput.schema';
import { IssueMaxAggregateInputObjectSchema } from './objects/IssueMaxAggregateInput.schema';

export const IssueAggregateSchema = z.object({
  orderBy: z
    .union([
      IssueOrderByWithRelationInputObjectSchema,
      IssueOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: IssueWhereInputObjectSchema.optional(),
  cursor: IssueWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), IssueCountAggregateInputObjectSchema])
    .optional(),
  _min: IssueMinAggregateInputObjectSchema.optional(),
  _max: IssueMaxAggregateInputObjectSchema.optional(),
});
