import { z } from 'zod';
import { FollowWhereInputObjectSchema } from './objects/FollowWhereInput.schema';

export const FollowDeleteManySchema = z.object({
  where: FollowWhereInputObjectSchema.optional(),
});
