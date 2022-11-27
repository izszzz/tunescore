import { z } from 'zod';
import { IssueCreateInputObjectSchema } from './objects/IssueCreateInput.schema';

export const IssueCreateOneSchema = z.object({
  data: IssueCreateInputObjectSchema,
});
