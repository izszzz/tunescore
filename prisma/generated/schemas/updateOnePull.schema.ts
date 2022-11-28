import { z } from 'zod';
import { PullSelectObjectSchema } from './objects/PullSelect.schema';
import { PullIncludeObjectSchema } from './objects/PullInclude.schema';
import { PullUpdateInputObjectSchema } from './objects/PullUpdateInput.schema';
import { PullWhereUniqueInputObjectSchema } from './objects/PullWhereUniqueInput.schema';

export const PullUpdateOneSchema = z.object({
  select: PullSelectObjectSchema.optional(),
  include: PullIncludeObjectSchema.optional(),
  data: PullUpdateInputObjectSchema,
  where: PullWhereUniqueInputObjectSchema,
});
