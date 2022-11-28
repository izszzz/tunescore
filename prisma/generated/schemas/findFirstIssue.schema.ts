import { z } from 'zod';
import { IssueSelectObjectSchema } from './objects/IssueSelect.schema';
import { IssueIncludeObjectSchema } from './objects/IssueInclude.schema';
import { IssueWhereInputObjectSchema } from './objects/IssueWhereInput.schema';
import { IssueOrderByWithRelationInputObjectSchema } from './objects/IssueOrderByWithRelationInput.schema';
import { IssueWhereUniqueInputObjectSchema } from './objects/IssueWhereUniqueInput.schema';
import { IssueScalarFieldEnumSchema } from './enums/IssueScalarFieldEnum.schema';

export const IssueFindFirstSchema = z.object({
  select: IssueSelectObjectSchema.optional(),
  include: IssueIncludeObjectSchema.optional(),
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
