import { z } from 'zod';
import { IssueSelectObjectSchema } from './objects/IssueSelect.schema';
import { IssueIncludeObjectSchema } from './objects/IssueInclude.schema';
import { IssueWhereUniqueInputObjectSchema } from './objects/IssueWhereUniqueInput.schema';
import { IssueCreateInputObjectSchema } from './objects/IssueCreateInput.schema';
import { IssueUncheckedCreateInputObjectSchema } from './objects/IssueUncheckedCreateInput.schema';
import { IssueUpdateInputObjectSchema } from './objects/IssueUpdateInput.schema';
import { IssueUncheckedUpdateInputObjectSchema } from './objects/IssueUncheckedUpdateInput.schema';

export const IssueUpsertSchema = z.object({
  select: IssueSelectObjectSchema.optional(),
  include: IssueIncludeObjectSchema.optional(),
  where: IssueWhereUniqueInputObjectSchema,
  create: z.union([
    IssueCreateInputObjectSchema,
    IssueUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    IssueUpdateInputObjectSchema,
    IssueUncheckedUpdateInputObjectSchema,
  ]),
});
