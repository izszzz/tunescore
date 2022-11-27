import { z } from 'zod';
import { IssueUpdateManyMutationInputObjectSchema } from './objects/IssueUpdateManyMutationInput.schema';
import { IssueWhereInputObjectSchema } from './objects/IssueWhereInput.schema';

export const IssueUpdateManySchema = z.object({
  data: IssueUpdateManyMutationInputObjectSchema,
  where: IssueWhereInputObjectSchema.optional(),
});
