import { z } from 'zod';
import { PullSelectObjectSchema } from './objects/PullSelect.schema';
import { PullIncludeObjectSchema } from './objects/PullInclude.schema';
import { PullCreateInputObjectSchema } from './objects/PullCreateInput.schema';
import { PullUncheckedCreateInputObjectSchema } from './objects/PullUncheckedCreateInput.schema';

export const PullCreateOneSchema = z.object({
  select: PullSelectObjectSchema.optional(),
  include: PullIncludeObjectSchema.optional(),
  data: z.union([
    PullCreateInputObjectSchema,
    PullUncheckedCreateInputObjectSchema,
  ]),
});
