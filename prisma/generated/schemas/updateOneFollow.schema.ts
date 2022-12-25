import { z } from 'zod';
import { FollowSelectObjectSchema } from './objects/FollowSelect.schema';
import { FollowIncludeObjectSchema } from './objects/FollowInclude.schema';
import { FollowUpdateInputObjectSchema } from './objects/FollowUpdateInput.schema';
import { FollowWhereUniqueInputObjectSchema } from './objects/FollowWhereUniqueInput.schema';

export const FollowUpdateOneSchema = z.object({
  select: FollowSelectObjectSchema.optional(),
  include: FollowIncludeObjectSchema.optional(),
  data: FollowUpdateInputObjectSchema,
  where: FollowWhereUniqueInputObjectSchema,
});
