import { z } from 'zod';
import { IssueWhereUniqueInputObjectSchema } from './objects/IssueWhereUniqueInput.schema';

export const IssueFindUniqueSchema = z.object({
  where: IssueWhereUniqueInputObjectSchema,
});
