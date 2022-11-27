import { z } from 'zod';
import { IssueUpdateInputObjectSchema } from './objects/IssueUpdateInput.schema';
import { IssueWhereUniqueInputObjectSchema } from './objects/IssueWhereUniqueInput.schema';

export const IssueUpdateOneSchema = z.object({
  data: IssueUpdateInputObjectSchema,
  where: IssueWhereUniqueInputObjectSchema,
});
