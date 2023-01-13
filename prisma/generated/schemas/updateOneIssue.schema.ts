import { z } from 'zod';
import { IssueSelectObjectSchema } from './objects/IssueSelect.schema';
import { IssueIncludeObjectSchema } from './objects/IssueInclude.schema';
import { IssueUpdateInputObjectSchema } from './objects/IssueUpdateInput.schema';
import { IssueUncheckedUpdateInputObjectSchema } from './objects/IssueUncheckedUpdateInput.schema';
import { IssueWhereUniqueInputObjectSchema } from './objects/IssueWhereUniqueInput.schema';

export const IssueUpdateOneSchema = z.object({
  select: IssueSelectObjectSchema.optional(),
  include: IssueIncludeObjectSchema.optional(),
  data: z.union([
    IssueUpdateInputObjectSchema,
    IssueUncheckedUpdateInputObjectSchema,
  ]),
  where: IssueWhereUniqueInputObjectSchema,
});
