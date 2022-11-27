import { z } from 'zod';
import { PullWhereUniqueInputObjectSchema } from './objects/PullWhereUniqueInput.schema';
import { PullCreateInputObjectSchema } from './objects/PullCreateInput.schema';
import { PullUpdateInputObjectSchema } from './objects/PullUpdateInput.schema';

export const PullUpsertSchema = z.object({
  where: PullWhereUniqueInputObjectSchema,
  create: PullCreateInputObjectSchema,
  update: PullUpdateInputObjectSchema,
});
