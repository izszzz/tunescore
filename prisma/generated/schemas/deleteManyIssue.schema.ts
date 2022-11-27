import { z } from 'zod';
import { IssueWhereInputObjectSchema } from './objects/IssueWhereInput.schema';

export const IssueDeleteManySchema = z.object({
  where: IssueWhereInputObjectSchema.optional(),
});
