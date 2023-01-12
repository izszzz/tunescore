import { z } from 'zod';
import { PullSelectObjectSchema } from './objects/PullSelect.schema';
import { PullIncludeObjectSchema } from './objects/PullInclude.schema';
import { PullWhereUniqueInputObjectSchema } from './objects/PullWhereUniqueInput.schema';
import { PullCreateInputObjectSchema } from './objects/PullCreateInput.schema';
import { PullUncheckedCreateInputObjectSchema } from './objects/PullUncheckedCreateInput.schema';
import { PullUpdateInputObjectSchema } from './objects/PullUpdateInput.schema';
import { PullUncheckedUpdateInputObjectSchema } from './objects/PullUncheckedUpdateInput.schema';

export const PullUpsertSchema = z.object({
  select: PullSelectObjectSchema.optional(),
  include: PullIncludeObjectSchema.optional(),
  where: PullWhereUniqueInputObjectSchema,
  create: z.union([
    PullCreateInputObjectSchema,
    PullUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PullUpdateInputObjectSchema,
    PullUncheckedUpdateInputObjectSchema,
  ]),
});
