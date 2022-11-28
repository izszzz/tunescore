import { z } from 'zod';
import { IssueSelectObjectSchema } from './objects/IssueSelect.schema';
import { IssueIncludeObjectSchema } from './objects/IssueInclude.schema';
import { IssueCreateInputObjectSchema } from './objects/IssueCreateInput.schema';

export const IssueCreateOneSchema = z.object({
  select: IssueSelectObjectSchema.optional(),
  include: IssueIncludeObjectSchema.optional(),
  data: IssueCreateInputObjectSchema,
});
