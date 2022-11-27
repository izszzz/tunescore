import { z } from 'zod';
import { IssueWhereUniqueInputObjectSchema } from './objects/IssueWhereUniqueInput.schema';
import { IssueCreateInputObjectSchema } from './objects/IssueCreateInput.schema';
import { IssueUpdateInputObjectSchema } from './objects/IssueUpdateInput.schema';

export const IssueUpsertSchema = z.object({
  where: IssueWhereUniqueInputObjectSchema,
  create: IssueCreateInputObjectSchema,
  update: IssueUpdateInputObjectSchema,
});
