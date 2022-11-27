import { z } from 'zod';
import { PullUpdateManyMutationInputObjectSchema } from './objects/PullUpdateManyMutationInput.schema';
import { PullWhereInputObjectSchema } from './objects/PullWhereInput.schema';

export const PullUpdateManySchema = z.object({
  data: PullUpdateManyMutationInputObjectSchema,
  where: PullWhereInputObjectSchema.optional(),
});
