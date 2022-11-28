import { z } from 'zod';
import { IssueSelectObjectSchema } from './objects/IssueSelect.schema';
import { IssueIncludeObjectSchema } from './objects/IssueInclude.schema';
import { IssueWhereUniqueInputObjectSchema } from './objects/IssueWhereUniqueInput.schema';
import { IssueCreateInputObjectSchema } from './objects/IssueCreateInput.schema';
import { IssueUpdateInputObjectSchema } from './objects/IssueUpdateInput.schema';

export const IssueUpsertSchema = z.object({
  select: IssueSelectObjectSchema.optional(),
  include: IssueIncludeObjectSchema.optional(),
  where: IssueWhereUniqueInputObjectSchema,
  create: IssueCreateInputObjectSchema,
  update: IssueUpdateInputObjectSchema,
});
