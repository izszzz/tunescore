import { z } from 'zod';
import { PullCreateInputObjectSchema } from './objects/PullCreateInput.schema';

export const PullCreateOneSchema = z.object({
  data: PullCreateInputObjectSchema,
});
