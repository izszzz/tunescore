import { z } from 'zod';
import { FollowSelectObjectSchema } from './objects/FollowSelect.schema';
import { FollowIncludeObjectSchema } from './objects/FollowInclude.schema';
import { FollowCreateInputObjectSchema } from './objects/FollowCreateInput.schema';

export const FollowCreateOneSchema = z.object({
  select: FollowSelectObjectSchema.optional(),
  include: FollowIncludeObjectSchema.optional(),
  data: FollowCreateInputObjectSchema,
});
