import { z } from 'zod';
import { IssueWhereInputObjectSchema } from './objects/IssueWhereInput.schema';
import { IssueOrderByWithAggregationInputObjectSchema } from './objects/IssueOrderByWithAggregationInput.schema';
import { IssueScalarWhereWithAggregatesInputObjectSchema } from './objects/IssueScalarWhereWithAggregatesInput.schema';
import { IssueScalarFieldEnumSchema } from './enums/IssueScalarFieldEnum.schema';

export const IssueGroupBySchema = z.object({
  where: IssueWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      IssueOrderByWithAggregationInputObjectSchema,
      IssueOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: IssueScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(IssueScalarFieldEnumSchema),
});
