import { z } from 'zod';
import { FollowSelectObjectSchema } from './objects/FollowSelect.schema';
import { FollowIncludeObjectSchema } from './objects/FollowInclude.schema';
import { FollowWhereUniqueInputObjectSchema } from './objects/FollowWhereUniqueInput.schema';
import { FollowCreateInputObjectSchema } from './objects/FollowCreateInput.schema';
import { FollowUpdateInputObjectSchema } from './objects/FollowUpdateInput.schema';

export const FollowUpsertSchema = z.object({
  select: FollowSelectObjectSchema.optional(),
  include: FollowIncludeObjectSchema.optional(),
  where: FollowWhereUniqueInputObjectSchema,
  create: FollowCreateInputObjectSchema,
  update: FollowUpdateInputObjectSchema,
});
