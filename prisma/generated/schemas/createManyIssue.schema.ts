import { z } from 'zod';
import { IssueCreateManyInputObjectSchema } from './objects/IssueCreateManyInput.schema';

export const IssueCreateManySchema = z.object({
  data: IssueCreateManyInputObjectSchema,
});
