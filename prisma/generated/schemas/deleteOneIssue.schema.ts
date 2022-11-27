import { z } from 'zod';
import { IssueWhereUniqueInputObjectSchema } from './objects/IssueWhereUniqueInput.schema';

export const IssueDeleteOneSchema = z.object({
  where: IssueWhereUniqueInputObjectSchema,
});
