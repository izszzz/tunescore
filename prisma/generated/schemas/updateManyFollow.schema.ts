import { z } from 'zod';
import { FollowUpdateManyMutationInputObjectSchema } from './objects/FollowUpdateManyMutationInput.schema';
import { FollowWhereInputObjectSchema } from './objects/FollowWhereInput.schema';

export const FollowUpdateManySchema = z.object({
  data: FollowUpdateManyMutationInputObjectSchema,
  where: FollowWhereInputObjectSchema.optional(),
});
