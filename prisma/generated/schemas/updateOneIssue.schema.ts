import { z } from 'zod';
import { IssueSelectObjectSchema } from './objects/IssueSelect.schema';
import { IssueIncludeObjectSchema } from './objects/IssueInclude.schema';
import { IssueUpdateInputObjectSchema } from './objects/IssueUpdateInput.schema';
import { IssueWhereUniqueInputObjectSchema } from './objects/IssueWhereUniqueInput.schema';

export const IssueUpdateOneSchema = z.object({
  select: IssueSelectObjectSchema.optional(),
  include: IssueIncludeObjectSchema.optional(),
  data: IssueUpdateInputObjectSchema,
  where: IssueWhereUniqueInputObjectSchema,
});
