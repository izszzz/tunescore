import { z } from 'zod';
import { IssueWhereInputObjectSchema } from './objects/IssueWhereInput.schema';
import { IssueOrderByWithRelationInputObjectSchema } from './objects/IssueOrderByWithRelationInput.schema';
import { IssueWhereUniqueInputObjectSchema } from './objects/IssueWhereUniqueInput.schema';
import { IssueScalarFieldEnumSchema } from './enums/IssueScalarFieldEnum.schema';

export const IssueFindFirstSchema = z.object({
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
  distinct: z.array(IssueScalarFieldEnumSchema).optional(),
});
