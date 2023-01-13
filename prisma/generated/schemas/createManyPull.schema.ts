import { z } from 'zod';
import { PullCreateManyInputObjectSchema } from './objects/PullCreateManyInput.schema';

export const PullCreateManySchema = z.object({
  data: z.union([
    PullCreateManyInputObjectSchema,
    z.array(PullCreateManyInputObjectSchema),
  ]),
});
